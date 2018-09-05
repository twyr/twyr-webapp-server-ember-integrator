export default function() {
	this.transition(
		this.fromRoute(function() {
			return true;
		}),
		this.toRoute(function() {
			return true;
		}),
		this.use('crossFade', {
			'duration': 500
		}),
	);

	this.transition(
		this.fromModel(function() {
			return true;
		}),
		this.toModel(function() {
			return true;
		}),
		this.use('crossFade', {
			'duration': 500
		}),
	);
}
