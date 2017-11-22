require.config({
  paths: {
    jquery: 'lib/jquery-min',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone-min'
  }
});

define(['app'], function( App ){
  App.initialize();
});


















//
// var ListItem = Backbone.Model.extend({
//   idAttribute: "id",
//   urlRoot: "/api/items",
// 	validate: function(attrs){
// 		if (!attrs.id)
// 			return "ListItem is not valid.";
// 	}
// });
//
// var List = Backbone.Collection.extend({
//   Model: ListItem
// });
//
// var ListItemView = Backbone.View.extend({
//   tagName: "li",
//   className: "listItem",
// 	events: {
//   },
//   render: function() {
// 		var source = $("#itemTemplate").html();
// 		var template = _.template(source);
// 		this.$el.html(template(this.model.toJSON()));
//
// 		return this;
// 	}
// });
//
// var DeleteButtonView = Backbone.View.extend({
// 	events: {
// 		"click .delete": "bulkDelete"
// 	},
//   render: function() {
// 		var source = $("#deleteTemplate").html();
// 		var template = _.template(source);
// 		this.$el.html(template());
//
// 		return this;
// 	},
// 	bulkDelete: function(){
//     bus.trigger("delete" )
// 	}
// });
//
// var ListView = Backbone.View.extend({
//   tagName: "ul",
//   initialize: function(){
//     bus.on("newItem", this.onNewListItem, this);
//     bus.on("delete", this.onDelete, this);
//   },
//   render: function(){
//     this.collection.each(function(listItem){
//       var view = new ListItemView({ model: listItem });
//       this.$el.append(view.render().$el);
//     }, this);
//     return this;
//   },
//   onNewListItem: function(id){
//     var listItem = new ListItem({id: id.id, content: id.content });
//     var itemView = new ListItemView({ model: listItem });
// 		this.$el.append(itemView.render().$el);
//   },
//   onDelete: function(id){
//     console.log(id)
//     this.collection.each(function(listItem){
//       console.log(listItem)
//     })
//   }
// });
//
// var NewListItemView = Backbone.View.extend({
//   events: {
//     "click .add": "onAdd"
//   },
//   render: function(){
//     var source = $("#addItem").html();
// 		var template = _.template(source);
// 		this.$el.html(template());
// 		return this;
//   },
//   onAdd: function(){
//     var idInput = this.$el.find(".idAdd");
//     var contentInput = this.$el.find(".contentAdd");
//     var id = idInput.val();
//     var content = contentInput.val();
//     bus.trigger("newItem", { id: id, content: content});
//     idInput.val("");
//     contentInput.val("");
//   }
// });
//
// var bus = _.extend({}, Backbone.Events);
//
// var listItems = new List([
//   new ListItem({ id: "1", content: "content 1" }),
//   new ListItem({ id: "2", content: "content 2" }),
//   new ListItem({ id: "3", content: "content 3" })
// ]);
//
// $("#container")
// 	.append(new NewListItemView().render().$el)
// 	.append(new ListView({ collection: listItems }).render().$el)
//   .append(new DeleteButtonView().render().$el);
