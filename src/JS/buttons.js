import { createProject, projectsContainer } from "./control"
import { clearReminderList, renderRemindersList } from "./display"

// const createForm = document.querySelector("")

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


function addListeners(){
  
   deleteReminderBtn.forEach( function (i, index, ) {
    i.setAttribute("data-task", index);
    i.addEventListener("click", function() {
      removeDisplay(i)
      let taskIndex = i.getAttribute("data-task");
      projectsContainer[0].task.splice(taskIndex, 1);
    });
  });
  
    editReminderBtn.forEach( function (i) {
      i.addEventListener("click", function() {
        updateForm.classList.toggle("hidden")
      })
    });

    // toggleCompleted.forEach( function (i, index, ) {
    //     i.setAttribute("data-task", index);
    //     i.addEventListener("click", function() {
    //       let taskIndex = i .getAttribute("data-task");
    //       inbox.task.splice(taskIndex, 1);
    //     });
    //   });
  
}


const addReminderBtn = document.querySelector(".add-reminder")
const inputForm = document.querySelector(".modal")
const updateForm = document.querySelector(".modal-update")
const closeReminderBtn = document.querySelectorAll(".close-button")
const editReminderBtn = document.querySelectorAll(".edit-btn")
const createReminderBtn = document.querySelector("#create-reminder")
const createProjectBtn = document.querySelector("#add-project")
const toggleCompleted = document.querySelectorAll(".circle")
const deleteReminderBtn = document.querySelectorAll(".delete-btn")

addReminderBtn.addEventListener("click", function toggleModal(e){
    inputForm.classList.remove("hidden")
});

closeReminderBtn.forEach( function (element) {
  element.addEventListener("click", function() {
    closeModal(element)
  })
});

createReminderBtn.addEventListener("click",(e, project = projectsContainer[0]) => {    
    project.addTask()
    clearReminderList()
    renderRemindersList()
    inputForm.classList.add("hidden")
    addListeners()
    console.log("button clicked")
});

createProjectBtn.addEventListener("click",(e) => {    
window.projectsContainer = createProject(document.querySelector("#project-name").value)
console.log("button clicked")
});




  export {addListeners}