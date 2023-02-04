import { createProject, projectsContainer, toggleCompleted, createReminder, storeProjects} from "./control"
import { clearReminderList, renderRemindersList, displayProject, renderProjectList, clearProjectList, updateDisplayedProject, updateDisplayedReminders, updateFormTextUpdate } from "./display"
import '../style.css'

// DOM Cache

const addReminderBtn = document.querySelector(".add-reminder")
const updateReminderBtn = document.querySelector("#update-reminder")
const inputForm = document.querySelector(".modal")
const updateForm = document.querySelector(".modal-update")
const closeReminderBtn = document.querySelectorAll(".close-button")
const createReminderBtn = document.querySelector("#create-reminder")
const createProjectBtn = document.querySelector("#add-project")

let currentProjectIndex = 0
let currentReminderIndex = 0

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
        updateForm.classList.toggle("hidden");
        let selectedTask = projectsContainer[currentProjectIndex].task[index];
        i.setAttribute("data-task", index);
        updateReminderIndex(index)
        console.log(`This is the ${index}`)
        updateFormTextUpdate()

        })
        });

    
        toggleCompleted.forEach(function (i, index) {
          if (!i.hasAttribute("data-listener")) {
            i.setAttribute("data-task", index);
            i.addEventListener("click", function () {
              let taskIndex = i.getAttribute("data-task");
              console.log(currentProjectIndex)
              let reminder = projectsContainer[currentProjectIndex].task[taskIndex];
              if (reminder && reminder.toggleCompleted) {
               reminder.toggleCompleted.call(reminder)}
               storeProjects(projectsContainer)
              clearReminderList()
              renderRemindersList(currentProjectIndex)
              addListeners()
            });
            i.setAttribute("data-listener", true);
          }
        });


        projectBtn.forEach(function (i, index) {
            i.setAttribute("data-project", index);
            i.addEventListener("click", function () {
              let projectIndex = i.getAttribute("data-project");
              let project = projectsContainer[projectIndex].projectName;
              updateDisplayedProject(project , projectIndex)
              updateDisplayedReminders(projectIndex)
              updateProjectIndex(projectIndex)
              addListeners()
              
            });
          });
        
}



function updateReminderIndex(val = 0){
    currentReminderIndex = val
    console.log(`This is the index value at update reminder ${val}`)
}

function updateProjectIndex(val = 0){
  currentProjectIndex = val
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


createReminderBtn.addEventListener("click",(e) => { 
    const title = document.getElementById("reminder-title").value
    const description = document.getElementById("reminder-description").value
    const priority = document.getElementById("reminder-priority").value
    const dueDate = document.getElementById("reminder-due-date").value
    const project = projectsContainer[currentProjectIndex]

    console.log(currentProjectIndex)
    clearReminderList()
    project.addTask(title, description, priority, dueDate)
    renderRemindersList(currentProjectIndex)
    inputForm.classList.add("hidden")
    addListeners()
    storeProjects(projectsContainer)
});


// create project buttons

createProjectBtn.addEventListener("click",(e) => {    
    const projectName = document.querySelector("#project-name").value
    if(projectName == ""){
      alert("project must have name")
    }else if (projectName.length > 0){
      projectsContainer.push(createProject(projectName))
      clearProjectList()
      console.log(currentProjectIndex)
      renderProjectList(currentProjectIndex)
      addListeners()
      storeProjects(projectsContainer)
    }

console.log("button clicked")
});



updateReminderBtn.addEventListener("click", function() {
  updateForm.classList.toggle("hidden")
  currentReminderIndex

let updatedReminderTitle = document.getElementById("reminder-title-update").value;
let updatedReminderDescription = document.getElementById("reminder-description-update").value;
let updatedReminderPriority = document.getElementById("reminder-priority-update").value;
let updatedReminderDueDate = document.getElementById("reminder-due-date-update").value;



projectsContainer[currentProjectIndex].task[currentReminderIndex].reminderTitle = updatedReminderTitle;
projectsContainer[currentProjectIndex].task[currentReminderIndex].reminderDescription = updatedReminderDescription;
projectsContainer[currentProjectIndex].task[currentReminderIndex].reminderPriority = updatedReminderPriority;
projectsContainer[currentProjectIndex].task[currentReminderIndex].reminderDueDate = updatedReminderDueDate;
clearReminderList();
renderRemindersList(currentProjectIndex);
addListeners();
storeProjects(projectsContainer);

  
  
});

  export {addListeners, currentProjectIndex, currentReminderIndex}