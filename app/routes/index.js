import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(){
        // setTimeout(() => {
            
        // this.transitionTo('production', 's', 'y');
        // }, 2000);
        this.transitionTo('production', 's', 'y');
    }
});
