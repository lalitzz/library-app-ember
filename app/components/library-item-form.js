import Component from '@ember/component';

export default Component.extend({
	buttonLabel: 'Save',

	actions: {
		buttonClicked(params) {
			this.sendAction('action', params);
		}
	}
});
