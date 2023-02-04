import { renderRemindersList, renderProjectList, displayProjectTitle } from "./display";
import { addListeners } from "./buttons";
import '../style.css'

const createReminder = (reminder, description, priority, duedate, isComplete = false) => {
    let reminderTitle = reminder
    let reminderDescription = description
    let reminderPriority = priority
    let reminderDueDate = duedate
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

    function addTask(title, description, priority, dueDate) {
        this.task.push(createReminder(title, description, priority, dueDate));
        storeProjects(projectsContainer);
    }

 

    return { 
        addTask,
        projectName,
        task,
        projectId
    };

  };


  let projectsContainer = retrieveProjects();
  window.projectsContainer = projectsContainer;
  
  if (projectsContainer.length === 0) {
      projectsContainer.push(createProject("Inbox"));
      projectsContainer[0].addTask("Wash Clothes", "Separate Lights and Darks", "medium", "3-21-23");
  }
  
  renderRemindersList()
  displayProjectTitle()
  renderProjectList()
  addListeners()
  storeProjects(projectsContainer)


  
    function storeProjects(projects) {
        localStorage.clear();
        for (let i = 0; i < projects.length; i++) {
            let key = `project_${i}`;
            localStorage.setItem(key, JSON.stringify({
                name: projects[i].projectName,
                tasks: projects[i].task.map(task => ({
                    reminderTitle: task.reminderTitle,
                    reminderDescription: task.reminderDescription,
                    reminderPriority: task.reminderPriority,
                    reminderDueDate: task.reminderDueDate,
                    isComplete: task.isComplete
                }))
            }));
        }
      }
      
  
    function retrieveProjects() {
      let projectList = [];
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith("project_")) {
          let value = JSON.parse(localStorage.getItem(key));
          projectList.push(createProject(value.name));
          if (value.tasks) {
            projectList[projectList.length - 1].task = value.tasks.map(
              task => createReminder(
                task.reminderTitle,
                task.reminderDescription,
                task.reminderPriority,
                task.reminderDueDate,
                task.isComplete
              )
            );
          }
        }
      }
      return projectList;
}
  
  
  



export{createReminder,createProject, retrieveProjects, storeProjects, projectsContainer}
  

