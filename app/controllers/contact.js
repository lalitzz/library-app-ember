import Controller from '@ember/controller';
import { empty, match, not, lt, gte } from '@ember/object/computed';

export default Controller.extend({
	responseMessage: '',
	emailAddress: '',
	textMessage: '',
	isValidMessage: gte('textMessage.length', 5),
    isValid: match('emailAddress', /^.+@.+\..+$/),
    isDisabled: not('isValid') && lt('textMessage.length', 5),
    actions: {
    	sendMail() {
    		alert(`Your Email: ${this.get('emailAddress')} and message: ${this.get('textMessage')}`);
    		this.set('responseMessage', 'We have received your message. We will get back to you at the earliest');
    		this.set('emailAddress', '');
    		this.set('textMessage', '');
    	}
    }
});
