import { createProject, projectsContainer, toggleCompleted, createReminder, storeProjects} from "./control"
import { clearReminderList, renderRemindersList, displayProject, renderProjectList, clearProjectList, updateDisplayedProject, updateDisplayedReminders } from "./display"
import '../style.css'

// DOM Cache

const addReminderBtn = document.querySelector(".add-reminder")
const inputForm = document.querySelector(".modal")
const updateForm = document.querySelector(".modal-update")
const closeReminderBtn = document.querySelectorAll(".close-button")
const createReminderBtn = document.querySelector("#create-reminder")
const createProjectBtn = document.querySelector("#add-project")

let currentProjectIndex = 0

function addListeners(){

    const deleteReminderBtn = document.querySelectorAll(".delete-btn")
    const editReminderBtn = document.querySelectorAll(".edit-btn")
    const toggleCompleted = document.querySelectorAll(".circle")
    const projectBtn = document.querySelectorAll(".nav-item")
      
       deleteReminderBtn.forEach( function (i, index, ) {
        i.setAttribute("data-task", index);
        i.addEventListener("click", function() {
          removeDisplay(i)
          let taskIndex = i.getAttribute("data-task");
          projectsContainer[currentProjectIndex].task.splice(taskIndex, 1);
         storeProjects(projectsContainer)
        });
      });
      
        editReminderBtn.forEach( function (i, index) {
          i.addEventListener("click", function() {
            updateForm.classList.toggle("hidden")
            
          })
        });

    
        toggleCompleted.forEach(function (i, index) {
            i.setAttribute("data-task", index);
            i.addEventListener("click", function () {
              let taskIndex = i.getAttribute("data-task");
              console.log(currentProjectIndex)
              let reminder = projectsContainer[currentProjectIndex].task[taskIndex];
              if (reminder && reminder.toggleCompleted) {
               reminder.toggleCompleted.call(reminder)}
              clearReminderList()
              renderRemindersList(currentProjectIndex)
              addListeners()
              storeProjects(projectsContainer)
            });
          });


        projectBtn.forEach(function (i, index) {
            i.setAttribute("data-project", index);
            i.addEventListener("click", function () {
              let projectIndex = i.getAttribute("data-project");
              let project = projectsContainer[projectIndex].projectName;
              updateDisplayedProject(project , projectIndex)
              updateDisplayedReminders(projectIndex)
              currentProjectIndex = projectIndex
              addListeners()
              
            });
          });
        
}


// Reminder input forms

function closeModal(element){
      element.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("hidden")
    }
  
function removeDisplay(element){
      if (element.classList == "delete-btn"){
        element.parentNode.parentNode.remove()
      }else if (element.parentNode.classList == "project"){
        element.parentNode.remove()
      }else console.log("error")

}




addReminderBtn.addEventListener("click", function toggleModal(e){
    inputForm.classList.remove("hidden")
});


closeReminderBtn.forEach( function (element) {
  element.addEventListener("click", function() {
    closeModal(element)
  })
});


createReminderBtn.addEventListener("click",(e, project = projectsContainer[currentProjectIndex]) => {    
    clearReminderList()
    project.addTask()
    renderRemindersList(currentProjectIndex)
    inputForm.classList.add("hidden")
    addListeners()
    storeProjects(projectsContainer)
});


// create project buttons

createProjectBtn.addEventListener("click",(e) => {    
    projectsContainer.push(createProject(document.querySelector("#project-name").value))
    clearProjectList()
    console.log(currentProjectIndex)
    renderProjectList(currentProjectIndex)
    addListeners()
    storeProjects(projectsContainer)

console.log("button clicked")
});





  export {addListeners}