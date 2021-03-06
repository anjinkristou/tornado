Tornado.MixedView = Class.create(Tornado.View, {
	initialize: function($super, id, containerId){
		$super(id, containerId);

        this.container.append("<ul class=\"lists\"></ul>");
        this.listsContainer = this.container.find(".lists");
        this.container.append("<ul class=\"tasks\"></ul>");
        this.tasksContainer = this.container.find(".tasks");
	},

	getAjaxUrl: function() {
		return "/tornado/task_lists/view/" + this.id;
	},

    addItem: function(element) {
        if (element.model instanceof Tornado.Task){
            if (element.model.checked === "1"){
                //element.display(this.tasksDoneContainer);
            } else {
                element.display(this.tasksContainer, this.loaded);
            }
        } else if (element.model instanceof Tornado.List) {
			// We don't want to list the current list again
			if (element.model.id != this.id){
	            element.display(this.listsContainer, this.loaded);
			}
        }
    },

	updateItem: function(item) {
		if (this.includeItem(item.model)){
			item.display(this.tasksContainer);
		} else {
			item.element.fadeOut("fast", function (){
				$(this).remove();
			});
			this.taskElements.unset(item.id);
		}
	}
});
