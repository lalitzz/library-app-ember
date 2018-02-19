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
        const email = this.get('emailAddress');
        const message = this.get('textMessage');
        const newMessage = this.store.createRecord('contact', {email: email, message, message});
        newMessage.save().then((response) => {
            this.set('responseMessage', 'We have received your message. We will get back to you at the earliest. Reference Number:'+response.get('id'));
            this.set('emailAddress', '');
            this.set('textMessage', '');
        });
		
	}
    }
});
