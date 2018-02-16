import { computed, observer } from '@ember/object';
import { empty, match, not } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
	
	headerMessage: 'Coming Soon',
	responseMessage: '',
	emailAddress: '',
    isValid: match('emailAddress', /^.+@.+\..+$/),
    isDisabled: not('isValid'),
    actions: {
    	saveInvitation() {
    		alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
    		this.set('responseMessage', `Thank You, we have save the following email address: ${this.get('emailAddress')}`);
    		this.set('emailAddress', '');
    	}
    }
});
