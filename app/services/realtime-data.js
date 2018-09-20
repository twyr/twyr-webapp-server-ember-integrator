/* eslint-disable require-yield */
/* eslint-disable no-console */

import Service from '@ember/service';
import Evented from '@ember/object/evented';

export default Service.extend(Evented, {
	boundDataProcessor: null,

	init() {
		this._super(...arguments);
		this.set('boundDataProcessor', this._websocketDataProcessor.bind(this));

		const streamer = window.Primus.connect('/', {
			'strategy': 'online, timeout, disconnect',
			'reconnect': {
				'min': 1000,
				'max': Infinity,
				'retries': 25
			}
		});

		streamer.on('open', this.onStreamerOpen.bind(this));

		// streamer.on('reconnect', () => {
		// 	if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::reconnect: ', arguments);
		// 	this.trigger('websocket-reconnect');
		// });

		// streamer.on('reconnect scheduled', () => {
		// 	if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::reconnect scheduled: ', arguments);
		// 	this.trigger('websocket-reconnect-scheduled');
		// });

		// streamer.on('reconnected', () => {
		// 	if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::reconnected: ', arguments);
		// 	this.trigger('websocket-reconnected');
		// });

		// streamer.on('reconnect timeout', () => {
		// 	if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::reconnect timeout: ', arguments);
		// 	this.trigger('websocket-reconnect-timeout');
		// });

		// streamer.on('reconnect failed', () => {
		// 	if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::reconnect failed: ', arguments);
		// 	this.trigger('websocket-reconnect-failed');
		// });

		streamer.on('close', this.onStreamerClose.bind(this));
		streamer.on('end', this.onStreamerEnd.bind(this));

		streamer.on('error', this.onStreamerError.bind(this));
		this.set('streamer', streamer);
	},

	destroy() {
		this.get('streamer').off('error', this.onStreamerError.bind(this));

		this.get('streamer').off('end', this.onStreamerEnd.bind(this));
		this.get('streamer').off('close', this.onStreamerClose.bind(this));

		this.get('streamer').off('open', this.onStreamerOpen.bind(this));

		this.get('streamer').end();
		this._super(...arguments);
	},

	onStreamerOpen() {
		if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::open: ', arguments);

		this.get('streamer').on('data', this.get('boundDataProcessor'));
		this.trigger('websocket-open');
	},

	onStreamerClose() {
		if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::close: ', arguments);

		this.get('streamer').off('data', this.get('boundDataProcessor'));
		this.trigger('websocket-close');
	},

	onStreamerEnd() {
		if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::end: ', arguments);

		this.get('streamer').off('data', this.get('boundDataProcessor'));
		this.trigger('websocket-end');
	},

	onStreamerError() {
		if(window.developmentMode) console.error('twyr-webapp-server/services/websockets::streamer::on::error: ', arguments);
		this.trigger('websocket-error');
	},

	_websocketDataProcessor(websocketData) {
		if(window.developmentMode) console.log('twyr-webapp-server/services/websockets::streamer::on::data: ', websocketData);

		this.trigger(`websocket-data::${websocketData.channel}`, websocketData.data);
		this.trigger(`data`, websocketData.channel, websocketData.data);
	}
});
