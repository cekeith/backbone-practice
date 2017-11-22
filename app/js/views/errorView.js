define([
  'jquery',
  'underscore',
  'backbone',
  'router'], function($, _, Backbone, AppRouter){
    var ErrorView = Backbone.View.extend({
     render: function(){
       var source = $("#errorTemplate").html();
       var template = _.template(source);
       this.$el.html(template());

       return this;
     }
    });

    return ErrorView;
});
