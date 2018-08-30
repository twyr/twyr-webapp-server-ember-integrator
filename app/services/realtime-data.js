/* eslint-disable require-yield */
/* eslint-disable no-console */

import Service from '@ember/service';
import Evented from '@ember/object/evented';

import { task } from 'ember-concurrency';

export default Service.extend(Evented, {
	'onInit': task(function* () {
		const dataProcessor = this.get('_websocketDataProcessor').bind(this),
			streamer = window.Primus.connect('/', {
				'strategy': 'online, timeout, disconnect',
				'reconnect': {
					'min': 1000,
					'max': Infinity,
					'retries': 25
				}
			});

		streamer.on('open', () => {
			if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::open: ', arguments);

			this.get('streamer').on('data', dataProcessor);
			this.trigger('websocket-open');
		});

		streamer.on('reconnect', () => {
			if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::reconnect: ', arguments);
			this.trigger('websocket-reconnect');
		});

		streamer.on('reconnect scheduled', () => {
			if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::reconnect scheduled: ', arguments);
			this.trigger('websocket-reconnect-scheduled');
		});

		streamer.on('reconnected', () => {
			if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::reconnected: ', arguments);

			this.get('streamer').on('data', dataProcessor);
			this.trigger('websocket-open');
		});

		streamer.on('reconnect timeout', () => {
			if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::reconnect timeout: ', arguments);
			this.trigger('websocket-reconnect-timeout');
		});

		streamer.on('reconnect failed', () => {
			if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::reconnect failed: ', arguments);
			this.trigger('websocket-reconnect-failed');
		});

		streamer.on('close', () => {
			if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::close: ', arguments);
			this.trigger('websocket-close');
			this.get('streamer').off('data', dataProcessor);
		});

		streamer.on('end', () => {
			if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::end: ', arguments);
			this.trigger('websocket-end');
			this.get('streamer').off('data', dataProcessor);
		});

		streamer.on('error', () => {
			if(window.developmentMode) console.error('twyr-webapp-server/services/websockets::streamer::on::error: ', arguments);
			this.trigger('websocket-error');
		});

		this.set('streamer', streamer);
	}).on('init'),

	'_websocketDataProcessor': function(websocketData) {
		if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::data: ', websocketData);

		this.trigger(`websocket-data::${websocketData.channel}`, websocketData.data);
		this.trigger(`data`, websocketData.channel, websocketData.data);
	}
});
