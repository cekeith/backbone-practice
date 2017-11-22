define([
  'jquery',
  'underscore',
  'backbone',
  '../router'], function($, _, Backbone, AppRouter){
  var NavView = Backbone.View.extend({
    events: {
      "click": "onClick"
    },
    onClick: function(e){
      var router = new AppRouter;
      var $li = $(e.target);
      router.navigate($li.attr("data-url"), { trigger: true });
    }
  });

  return NavView;
});
