import Component from '@ember/component';

export default Component.extend({
    boards: Ember.computed.mapBy('model', 'boards'),
    total_boards: Ember.computed.sum('boards'),
    max_boards: Ember.computed.max('boards'),
    boardfeet: Ember.computed.mapBy('model', 'BoardFeetSum'),
    total_boardfeet: Ember.computed.sum('boardfeet'),
    max_boardfeet: Ember.computed.max('boardfeet')
});
