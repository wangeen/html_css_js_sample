"use strict";

function MyApp()
{
    function removeTask($task){
        $task.remove();     
    }
    
    function moveTask($task, moveUp){
        if(moveUp){
            $task.insertBefore($task.prev());     
        }else{
            $task.insertAfter($task.next());     
        }
    }

    function addTask(){ // add task to list
        var taskName = $("#new-task-name").val(); 
        if(taskName == 0) return; 
        // important the space between template and task must keep
        var $task= $("#task-template .task").clone()
        $("span.task-name", $task).text(taskName); 
        $("#task-list").append($task); 
        var msg = $("#task-list").html();
        console.log(msg);

        $("button.delete", $task).click(
            function(){
                removeTask($task);
            }
        )
        $("button.move-up", $task).click(
            function(){
                moveTask($task,true);
            }
        )
        $("button.move-down", $task).click(
            function(){
                moveTask($task,false);
            }
        )
    }

    var version = "v1.0";
    function setStatus(message)
    {
        $("#app>footer").text(message);
    }
    this.start = function()
    {
        $("#new-task-name").keypress(
            function(e){
                if(e.which==13){ // 13: Enter pressed
                    addTask(); 
                    return false; 
                }
            }
        ).focus(); 
        $("#app>header").append(version);
        setStatus("ready");
    };
}

//var myApp = {
//        version: "v1.0",
//        setStatus: function(message)
//        {
//                $("#app>footer").text(message);
//        },
//        start: function()
//        {
//                $("#app>header").append(this.version);
//                this.setStatus("ready");
//        };
//};
