import Component from '@ember/component';
import { observer } from '@ember/object';
import { later, cancel } from '@ember/runloop';

export default Component.extend({
	tagName: 'span',

	className: ['label label-success label-fade'],
	classNameBindings: ['isShowing:label-show'],

	isShowing: false,

	isShowingChanged: observer('isShowing', function(){
		this._runLater = later(() => this.set('isShowing', false), 3000);
	}),

	resetRunLater() {
		this.set('isShowing', false);
		cancel(this._runLater);
	},

	willDestroy() {
		this.resetRunLater();
		this._super(...arguments);
	}
});
