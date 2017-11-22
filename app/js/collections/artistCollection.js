define([
  'underscore',
  'backbone',
  '../models/artist'], function(_, Backbone, Artist){
    var artist = new Artist();
    var Artists = Backbone.Collection.extend({
      model: artist
    });

    return Artists;
});
