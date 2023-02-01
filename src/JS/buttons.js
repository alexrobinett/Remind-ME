const addReminderBtn = document.querySelector(".add-reminder")
const inputForm = document.querySelector(".modal")
const updateForm = document.querySelector(".modal-update")
const closeReminderBtn = document.querySelectorAll(".close-button")
const deleteReminderBtn = document.querySelectorAll(".delete-btn")
const editReminderBtn = document.querySelectorAll(".edit-btn")
const createReminderBtn = document.querySelector("#create-reminder")

function closeModal(element){
      element.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle("hidden")
    }
  
function removeDisplay(element){
      if (element.classList = "delete-btn"){
        element.parentNode.parentNode.remove()
      }else if (element.parentNode.classList = "project"){
        element.parentNode.remove()
      }else console.log("error")

}



function addListeners(){
    
    addReminderBtn.addEventListener("click", function toggleModal(e){
        inputForm.classList.toggle("hidden")
    });
    
    closeReminderBtn.forEach( function (element) {
      element.addEventListener("click", function() {
        closeModal(element)
      })
    });
   
    createReminderBtn.addEventListener("click",(e) => {    
        hideDivHistorias();
        showDivPagina2();    
   });
  
    deleteReminderBtn.forEach( function (i) {
      i.addEventListener("click", function() {
        removeDisplay(i)
      })
    });
  
    editReminderBtn.forEach( function (i) {
      i.addEventListener("click", function() {
        updateForm.classList.toggle("hidden")
      })
    });
  
  }



  addListeners()

  export {addListeners}