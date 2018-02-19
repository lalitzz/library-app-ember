import DS from 'ember-data';

export default DS.Model.extend({
  releaseYear: DS.attr('date'),
  library: DS.belongsTo('library'),
  author: DS.belongsTo('author')
});
