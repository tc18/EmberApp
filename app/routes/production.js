import Route from '@ember/routing/route';
import Ember from 'ember';
import $ from 'jquery';
import production from '../models/production';

const Promise = Ember.RSVP.Promise;

export default Route.extend({
    model(params){
        // return{
        //     "ProductName": "Chintan's Phone",
        //     "DimensionName": "1\" X 4\" X 14'",
        //     "BoardsSum": 20,
        //     "BoardFeetSum": 1000
        // }
        // return Ember.$.getJSON("/production.json?start=${params.start}&end={params.end}");
        return new Promise(function(resolve) {
            setTimeout(function() {
                let data = $.getJSON("/production.json?start=${params.start}&end={params.end}");
                data.then(function(data){
                    let records = [];
                    data.forEach(element => {
                        records.push(production.create(element));
                    });
                    resolve(records);
                })
            }, 1000);
        });
    }
});
