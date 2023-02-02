import { renderRemindersList, renderProjectList } from "./display";
import { addListeners } from "./buttons";


const createReminder = (isComplete = false, id) => {
    let reminderTitle = document.getElementById("reminder-title").value
    let reminderDescription = document.getElementById("reminder-description").value
    let reminderPriority = document.getElementById("reminder-priority").value
    let reminderDueDate = document.getElementById("reminder-due-date").value
    let reminderId = Date.now()

    function toggleCompleted() {
        this.isComplete = !this.isComplete;
        console.log("isComplete set to", this.isComplete);
      }

    return {
        reminderTitle,
        reminderDescription,
        reminderDueDate,
        reminderPriority,
        isComplete,
        toggleCompleted,
        reminderId
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

renderProjectList()
renderRemindersList()


export{createReminder,createProject,projectsContainer}
  


