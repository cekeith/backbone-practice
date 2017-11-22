define([
  'jquery',
  'underscore',
  'backbone',
  'router'], function($, _, Backbone, AppRouter){
    var GenresView = Backbone.View.extend({
     render: function(){
       this.$el.html("GenresView");

       return this;
     }
    });

    return GenresView;
});
