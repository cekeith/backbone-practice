define([
  'underscore',
  'backbone',
  'views/navView',
  'views/artistsView',
  'views/albumsView',
  'views/genresView',
  'views/homeView',
  'views/errorView',
  'router'], function(
    _,
    Backbone,
    NavView,
    ArtistsView,
    AlbumsView,
    GenresView,
    HomeView,
    ErrorView,
    AppRouter){
      initialize = function(){
        console.log("this works so far")
          var router = new AppRouter();
          Backbone.history.start();
          var navView = new NavView({ el: "#nav"})
      };

      return { initialize: initialize };
});
