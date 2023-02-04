import { renderRemindersList, renderProjectList, displayProjectTitle } from "./display";
import { addListeners } from "./buttons";

const createReminder = (isComplete = false) => {
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
    const projectId = Date.now()

    function addTask(){
        this.task.push(createReminder())
    }

 

    return { 
        addTask,
        projectName,
        task,
        projectId
    };

  };




    function storeProjects(projectList){
        localStorage.setItem("list-of-projects", JSON.stringify(projectList))
        console.log(JSON.stringify(projectList))
    }




    function getProjectsFromStore(){
    let retrievedProjects = []
    retrievedProjects = JSON.parse(localStorage.getItem("list-of-projects"))
    return retrievedProjects
    }



let projectsContainer = []


if(getProjectsFromStore() === null){
    projectsContainer.push(createProject("Inbox"))
    projectsContainer[0].addTask()
    projectsContainer[0].task[0].isComplete
    projectsContainer[0].task[0].reminderDescription = "Wash Work Clothes"
    projectsContainer[0].task[0].reminderTitle = "Separate Lights and Darks"
    projectsContainer[0].task[0].reminderDueDate = "3-21-23"
    projectsContainer[0].task[0].reminderPriority = "medium"
    
    renderRemindersList()
    displayProjectTitle()
    renderProjectList()
    


}else if (typeof getProjectsFromStore() === "object"){
    projectsContainer = getProjectsFromStore()
    console.log(projectsContainer[0])
    renderRemindersList()
    displayProjectTitle()
    renderProjectList()
   
}


export{createReminder,createProject, getProjectsFromStore, storeProjects, projectsContainer}
  

