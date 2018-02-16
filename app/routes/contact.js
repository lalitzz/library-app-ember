import Route from '@ember/routing/route';

export default Route.extend({
	actions:{
		prevent(e){
			e.preventDefault();
			return false;
		}
	}
});
