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
		// 	this.trigger('websocket-reconnect');
		// });

		// streamer.on('reconnect scheduled', () => {
		// 	this.trigger('websocket-reconnect-scheduled');
		// });

		// streamer.on('reconnected', () => {
		// 	this.trigger('websocket-reconnected');
		// });

		// streamer.on('reconnect timeout', () => {
		// 	this.trigger('websocket-reconnect-timeout');
		// });

		// streamer.on('reconnect failed', () => {
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
		this.get('streamer').on('data', this.get('boundDataProcessor'));
		this.trigger('websocket-open');
	},

	onStreamerClose() {
		this.get('streamer').off('data', this.get('boundDataProcessor'));
		this.trigger('websocket-close');
	},

	onStreamerEnd() {
		this.get('streamer').off('data', this.get('boundDataProcessor'));
		this.trigger('websocket-end');
	},

	onStreamerError() {
		this.trigger('websocket-error');
	},

	_websocketDataProcessor(websocketData) {
		this.trigger(`websocket-data::${websocketData.channel}`, websocketData.data);
		this.trigger(`data`, websocketData.channel, websocketData.data);
	}
});
