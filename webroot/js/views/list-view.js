Tornado.ListView = Class.create(Tornado.MixedView, {
    initialize: function($super, id, containerId){
        $super(id, containerId);
    },

    getAjaxUrl: function() {
        return "/tornado/task_lists/view/" + this.id;
    },

	includeItem: function(item) {
		if (item instanceof Tornado.Task){
			return item.checked == "0" && item.parent !== undefined && item.parent.id == this.id;
		} else if (item instanceof Tornado.List){
			return item.parent_id == this.id;
		}

		return false;
	},

	getTitle: function() {
		var list = Tornado.lists.get(this.id);
		return "-" + list.name;
	}
});

/*Tornado.ListView = Class.create(Tornado.View, {
 initialize: function($super, id, name){
 $super(id, name);

 jq("#tasks").append("<ul class=\"tasks\"></ul>");
 this.tasksContainer = jq("#tasks > ul");
 this.tasksContainer.id = "tasks";
 jq("#tasks-done").append("<ul class=\"tasks\"></ul>");
 this.tasksDoneContainer = jq("#tasks-done > ul");
 this.tasksDoneContainer.id = "tasks-done";
 },

 getAjaxUrl: function() {
 return "/tornado/task_lists/view/" + this.id;
 },

 displayElement: function(element) {
 if (element.task.checked === "1"){
 element.display(this.tasksDoneContainer);
 } else {
 element.display(this.tasksContainer);
 }
 },

 addItem: function(taskElement) {
 if (taskElement.task.checked === "0"){
 taskElement.display(this.tasksContainer);
 }
 },

 display: function(item) {
 var self = this;

 if (item){
 self.displayElement(item);
 } else {
 self.taskElements.each(function(data) {
 var taskElement = data.value;
 self.addItem(taskElement);
 });
 }
 }
 });
 */
