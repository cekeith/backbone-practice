define([
  'underscore',
  'backbone',
  'views/navView',
  'views/artistsView',
  'views/albumsView',
  'views/genresView',
  'views/homeView',
  'views/errorView'], function(
    _,
    Backbone,
    NavView,
    ArtistsView,
    AlbumsView,
    GenresView,
    HomeView,
    ErrorView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      "": "viewHome",
      "home": "viewHome",
      "albums": "viewAlbums",
      "albums/:albumId": "viewAlbumsById",
      "artists": "viewArtists",
      "genres": "viewGenres",
      "*other": "defaultRoute"
    },
    defaultRoute: function(){
      var view = new ErrorView({ el: "#container" });
      view.render();
    },
    viewHome: function(){
      var view = new HomeView({ el: "#container" });
      view.render();
    },
    viewArtists: function(){
      var view = new ArtistsView({ el: "#container" });
      view.render();
    },
    viewGenres: function(){
      var view = new GenresView({ el: "#container" });
      view.render();
    },
    viewAlbumsById: function(albumId){

    },
    viewAlbums: function(){
      var view = new AlbumsView({ el: "#container" });
      view.render();
    }
  });
  
  return AppRouter;
});
