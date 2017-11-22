define([
  'jquery',
  'underscore',
  'backbone',
  'router'], function($, _, Backbone, AppRouter){
    var HomeView = Backbone.View.extend({
     render: function(){
       this.$el.html("home");

       return this;
     }
    });

    return HomeView;
});
