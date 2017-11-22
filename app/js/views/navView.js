define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  '../router'], function($, _, Backbone, handlebars, AppRouter){
  var NavView = Backbone.View.extend({
    events: {
      "click .navItem": "onClick"
    },
    onClick: function(e){
      var router = new AppRouter;
      var $li = $(e.target);
      router.navigate($li.attr("data-url"), { trigger: true });
    }
  });

  return NavView;
});
