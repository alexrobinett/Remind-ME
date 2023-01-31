const addReminderBTN = document.querySelector(".add-reminder")
const inputForm = document.querySelector(".modal")
const closeReminderBTN = document.querySelector(".close-button")

addReminderBTN.addEventListener("click", function toggleModal(e){
    inputForm.classList.toggle("hidden")
})

closeReminderBTN.addEventListener("click", function toggleModal(e){
  inputForm.classList.add("hidden")
})

function renderReminders(){
    console.log("I Have rendered them")
}

export{addReminderBTN, closeReminderBTN }