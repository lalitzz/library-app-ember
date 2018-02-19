import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return this.store.findAll('author');
	},

	actions: {
		editAuthors(author){
			author.set('isEditing', true);
		},

		cancelAuthorEdit(author){
			author.set('isEditing', false);
			author.rollbackAttributes();
		},

		saveAuthor(author) {
			if(author.get('isNotValid')){
				return;
			}

			author.set('isEditing', false);
			author.save();
		}
	}
});
