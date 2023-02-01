
const inbox = []






const createReminder = (name, description, dueDate, priority, project, isComplete) => {
    let titleReminder = name;
    let descriptionReminder = description;
    let dueDateReminder = dueDate
    let priorityReminder = priority
    let projectCategory = project
    let isCompleted = isComplete
  

    function toggleCompleted(){
        if (this.isCompleted === true){
            this.isCompleted = false
        }else if (this.isCompleted === false){
            this.isCompleted = true
        }
    }

    // function editReminder{
        
    // }

    function deleteReminder(){
        this.delete
    }


    return {
      titleReminder,
      descriptionReminder,
      dueDateReminder,
      priorityReminder,
      projectCategory,
      isComplete,
      createReminder,
      toggleCompleted,
    //   editReminder,
      deleteReminder
    };
  };


const testReminder1 = createReminder("feed keni", "give keni dog food", "11/12/23", "high", "inbox", false)

window.testReminder1 = testReminder1

  export{testReminder1 , createReminder}
  


