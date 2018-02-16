import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';

export default Controller.extend({
	isDisabled: true,
	emailAddress: '',

    actualEmailAddress: computed('emailAddress', function(){
    	console.log("Actual Email Address Funtion is called", this.get('emailAddress'));
    }),

    emailAddressChanged: observer('emailAddress', function(){
    	console.log("observer is called", this.get('emailAddress'));
    })
});
