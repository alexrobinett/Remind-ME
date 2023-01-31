const createReminder = (name, description, dueDate, priority, project, isComplete) => {
  const titleReminder = name;
  const descriptionReminder = description;
  const dueDateReminder = dueDate
  const priorityReminder = priority
  const projectCategory = project
  const isCompleted = isComplete

  function logReminder(){
    console.log(`This is the thing I have to do ${titleReminder}. it is due on ${dueDateReminder}. is this reminder complete ${isCompleted}`)
  }
  return {
    titleReminder,
    descriptionReminder,
    dueDateReminder,
    priorityReminder,
    projectCategory,
    isComplete,
    createReminder,
    logReminder
  };
};

window.createReminder = createReminder


const CreateProject = (projectTitle, ) => {


  return{
    projectTitle,
    CreateProject
  }


}