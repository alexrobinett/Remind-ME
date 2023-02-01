let inbox = []

window.inbox = inbox



const createReminder = (name, description, dueDate, priority, project, isComplete) => {
  

    function toggleCompleted(){
        if (this.isComplete == true){
            this.isComplete = false
            console.log("toggled false")
        }else if (this.isComplete == false){
            this.isComplete = true
            console.log("toggled true")
        }else console.log("error soemthing went wrong")
    }

    function addToProject(){
        inbox.push(this)
    }

    return {
      name,
      description,
      dueDate,
      priority,
      project,
      isComplete,
      createReminder,
      toggleCompleted,
      addToProject
    };
  };


const testReminder1 = createReminder("feed keni", "give keni dog food", "11/12/23", "high", "inbox", false)

window.testReminder1 = testReminder1


const createProject = (name) => {
    let projectName = name
  

    return { };
  };


  export{testReminder1 , createReminder, inbox}
  


