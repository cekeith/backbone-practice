define([
  'jquery',
  'underscore',
  'backbone',
  'router'], function($, _, Backbone, AppRouter){
  var ArtistsView = Backbone.View.extend({
   render: function(){
     this.$el.html("ArtistsView");

     return this;
   }
  });

  return ArtistsView;
});
