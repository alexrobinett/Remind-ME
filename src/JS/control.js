
const createReminder = (isComplete = false) => {
    
    let reminderTitle = document.getElementById("reminder-title").value
    let reminderDescription = document.getElementById("reminder-description").value
    let reminderPriority = document.getElementById("reminder-priority").value
    let reminderDueDate = document.getElementById("reminder-due-date").value

    // test Text/

    // reminderDescription = "this is test test"
    // reminderTitle = "Test Title 123"
    // reminderPriority = "high"
    // reminderDueDate = "11-22-33"

    function toggleCompleted(){
        if (this.isComplete == true){
            this.isComplete = false
            console.log("toggled false")
        }else if (this.isComplete == false){
            this.isComplete = true
            console.log("toggled true")
        }else console.log("error something went wrong")
    }

    return {
      reminderTitle,
      reminderDescription,
      reminderDueDate,
      reminderPriority,
      isComplete,
      createReminder,
      toggleCompleted,
    };
  };



const Project = (name) => {
    let projectName = name
    let task = []

    function addTask(){
        this.task.push(createReminder())
    }

 

    return { 
        addTask,
        Project,
        projectName,
        task
    };

  };



const inbox = Project("inbox")

window.inbox = inbox

inbox.addTask()
inbox.addTask()
inbox.addTask()

inbox.task[0].isComplete = true

  export{createReminder,Project, inbox}
  


