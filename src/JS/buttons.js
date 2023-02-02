import { Project } from "./control"
import {inbox} from "./control"
import { clearReminderList, renderRemindersList } from "./display"

// const createForm = document.querySelector("")

function closeModal(element){
      element.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle("hidden")
    }
  
function removeDisplay(element){
      if (element.classList == "delete-btn"){
        element.parentNode.parentNode.remove()
      }else if (element.parentNode.classList == "project"){
        element.parentNode.remove()
      }else console.log("error")

}


function addListeners(){
    const addReminderBtn = document.querySelector(".add-reminder")
    const inputForm = document.querySelector(".modal")
    const updateForm = document.querySelector(".modal-update")
    const closeReminderBtn = document.querySelectorAll(".close-button")
    const editReminderBtn = document.querySelectorAll(".edit-btn")
    const createReminderBtn = document.querySelector("#create-reminder")

    const deleteReminderBtn = document.querySelectorAll(".delete-btn")
    
    addReminderBtn.addEventListener("click", function toggleModal(e){
        inputForm.classList.toggle("hidden")
    });
    
    closeReminderBtn.forEach( function (element) {
      element.addEventListener("click", function() {
        closeModal(element)
      })
    });
   
    createReminderBtn.addEventListener("click",(e) => {    
        inbox.addTask()
        clearReminderList()
        renderRemindersList()
        inputForm.classList.toggle("hidden")
        addListeners()
        console.log("button clicked")
   });
  
    deleteReminderBtn.forEach( function (i) {
      i.addEventListener("click", function() {
        removeDisplay(i)
        inbox.task.splice(0,1)
      })
    });
  
    editReminderBtn.forEach( function (i) {
      i.addEventListener("click", function() {
        updateForm.classList.toggle("hidden")
      })
    });
  
  }




  export {addListeners}