define([
  'jquery',
  'underscore',
  'backbone',
  'router'], function($, _, Backbone, AppRouter){
    var AlbumsView = Backbone.View.extend({
     render: function(){
       this.$el.html("Albums View added ");

       return this;
     }
    });

    return AlbumsView;
});
