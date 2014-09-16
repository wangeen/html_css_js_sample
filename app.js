"use strict";
function addTask(){ // add task to list
    var taskName = $("#new-task-name").val(); 
    if(taskName == 0) return; 
    // important the space between template and task must keep
    var $task= $("#task-template .task").clone()
    $("span.task-name", $task).text(taskName); 
    $("#task-list").append($task); 

    $("button.delete", $task).click(
        function(){
            $task.remove();     
        }
    )
    $("button.move-up", $task).click(
        function(){
            $task.insertBefore($task.prev());     
        }
    )
    $("button.move-down", $task).click(
        function(){
            $task.insertAfter($task.next());     
        }
    )


//    var newItem = $("#new-task-name").val(); 
//    if(newItem){
//        var $task = $("<li></li>"); 
//        var $delete = $("<button class='delete'>X</button>"); 
//        var $moveUp = $("<button class='moveUp'>^</button>"); 
//        var $moveDown = $("<button class='moveDown'>V</button>"); 
//        $task.append($delete)
//            .append($moveUp)
//            .append($moveDown)
//            .append("<span class='task-name'>"+newItem+"</span>"); 
//        $delete.click( // very tricky,  how can delete parent DOM
//            function(){
//                $task.remove(); 
//            }
//        ); 
//        $moveUp.click(
//            function(){
//                $task.insertBefore($task.prev()); 
//            }
//        )
//        $moveDown.click(
//            function(){
//                $task.insertAfter($task.next()); 
//            }
//        )
//
//        $("#task-list").append($task); 
//
//        $("#new-task-name").val("").focus(); 
//    }
}

function MyApp()
{
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
