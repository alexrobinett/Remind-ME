import { renderRemindersList } from "./display";


const createReminder = (isComplete = false, id) => {
    
    let reminderTitle = document.getElementById("reminder-title").value
    let reminderDescription = document.getElementById("reminder-description").value
    let reminderPriority = document.getElementById("reminder-priority").value
    let reminderDueDate = document.getElementById("reminder-due-date").value
    let reminderId = Date.now()

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



const createProject = (name) => {
    let projectName = name
    let task = []

    function addTask(){
        this.task.push(createReminder())
    }

 

    return { 
        addTask,
        createProject,
        projectName,
        task
    };

  };



let projectsContainer = []

window.projectsContainer = projectsContainer

projectsContainer.push(createProject("inbox"))

projectsContainer[0].addTask()

projectsContainer[0].task[0].isComplete
projectsContainer[0].task[0].reminderDescription = "test description"
projectsContainer[0].task[0].reminderTitle = "Test Reminder"
projectsContainer[0].task[0].reminderDueDate = "12-22-23"
projectsContainer[0].task[0].reminderPriority = "high"

renderRemindersList()


export{createReminder,createProject,projectsContainer}
  


