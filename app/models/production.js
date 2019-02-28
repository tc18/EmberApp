import Ember from 'ember';

export default Ember.Object.extend({
    boards: Ember.computed('BoardsSum', function(){
        return this.get('BoardsSum');
    }),
    Product: Ember.computed.alias('ProductName')
})