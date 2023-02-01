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

    function addToProject(project){
        project.push(this)
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



const createProject = (name) => {
    let notCompleted = []
    let completed = []

    function pushToProjectList(projectlist){
        projectlist.push(this)
    }

    return { 
        name,
        completed,
        notCompleted,
        pushToProjectList
    };

  };


  export{createReminder,createProject}
  


