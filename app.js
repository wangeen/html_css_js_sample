"use strict";

function MyApp()
{
    function deleteTask($task){
        $task.remove();     
        //saveTaskList(); 
    }

    function moveTask($task, moveUp){
        if(moveUp){
            $task.insertBefore($task.prev());     
        }else{

            $task.insertAfter($task.next());     
        }
        saveTaskList(); 
    }

    function addTask(){ // add task to list
        var taskName = $("#new-task-name").val(); 
        if(taskName == 0) return; 
        // important the space between template and task must keep
        var $task= $("#task-template .task").clone()
        $("span.task-name", $task).text(taskName); 
        $("#task-list").append($task); 
        console.log("xxx"); 
        var msg = $("#task-list").html(); 
        console.log(msg); 
        //alert($("#task-list").html()); 
        //saveTaskList(); 
        $("button.delete", $task).click(
            function(){
                deleteTask($task);
            };
        )

        //$("button.move-up", $task).click(
        //    moveTask($task, true)
        //)
        //$("button.move-down", $task).click(
        //    moveTask($task, false)
        //)
    }

    var version = "v1.1";

    function setStatus(message)
    {
        $("#app>footer").text(message);
    }

    var appStorage = new AppStorage("app"); 
    function saveTaskList(){
        var tasks = []; 
        $("#task-list .task span.task-name").each(function(){
            tasks.push($(this).text())
        }); 
        appStorage.setValue("taskList", tasks); 
    }

    function loadTaskList(){
        var tasks = appStorage.getValue("taskList"); 
        if(tasks){
            for(var i in tasks){
                addTask(i); 
            }
        }
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
        //loadTaskList(); 
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
