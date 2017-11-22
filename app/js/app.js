define([
  'underscore',
  'backbone',
  'handlebars',
  'models/artist',
  'collections/artistCollection',
  'views/navView',
  'views/artistsView',
  'views/albumsView',
  'views/genresView',
  'views/homeView',
  'views/errorView',
  'router'], function(
    _,
    Backbone,
    handlebars,
    Artist,
    Artists,
    NavView,
    ArtistsView,
    AlbumsView,
    GenresView,
    HomeView,
    ErrorView,
    AppRouter){
      initialize = function(){
          var router = new AppRouter();
          Backbone.history.start();
          var bus = _.extend({}, Backbone.Events);
          var navView = new NavView({ el: "#nav"})
      };

      return { initialize: initialize };
});
