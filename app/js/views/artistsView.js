// var x = "<p>{{title}}, {{body}}</p>";

define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'router',
  '../models/artist',
  '../collections/artistCollection'], function($, _, Backbone, Handlebars, AppRouter, Artist, ArtistCollections){

  var AView = Backbone.View.extend({
    template: Handlebars.compile($("#return-template").html()),
    render: function(){
     this.$el.html(this.template({
      title: "this is the first one",
      body: "yay!"
    }));
     return this;
   }
  });

  var BView = Backbone.View.extend({
    template: Handlebars.compile($("#return-template").html()),
    render: function(){
     this.$el.html(this.template({
      title: "Handlebars is finally working",
      body: "hooray!"
    }));
     return this;
   }
  });

  var ArtistsView = Backbone.View.extend({

    render: function(){
      var aView = new AView();
      var bView = new BView();
      $("#container")
      .empty()
      .append(aView.render().$el)
      .append(bView.render().$el)

     return this;
   }
  });

  return ArtistsView;
});
