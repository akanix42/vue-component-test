import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

import Vue from 'vue';
import App from './imports/App.vue';

Meteor.startup(() => {
  new Vue({
    render: h => h(App),
  }).$mount('app');
});
