"use strict";

function MyApp()
{
    var appStorage = new AppStorage("task-name");
    function saveTaskList(){
        var tasks = [];
        $("#task-list .task span.task-name").each(function(){
            tasks.push($(this).text())
            console.log("save: "+ $(this).text());
        });
        appStorage.setValue("taskList", tasks);
    }

    function loadTaskList(){
        var tasks = appStorage.getValue("taskList");
        if(tasks){
            for(var i in tasks){
                console.log("load: "+tasks[i]);
                addTask(tasks[i]);
            }
        }
    }


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

    function addTask(taskName){ // add task to list
        if (taskName === undefined){
            taskName = $("#new-task-name").val(); 
        }
        if(taskName == 0) return; 
        // important the space between template and task must keep
        var $task= $("#task-template .task").clone()
        $("span.task-name", $task).text(taskName); 
        $("#task-list").append($task); 
        var msg = $("#task-list").html();
        console.log(msg);
        saveTaskList(); 

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
        loadTaskList(); 
        $("#app>header").append(version);
        setStatus("ready");
    };
}

