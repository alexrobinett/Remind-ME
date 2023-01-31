import { addReminderBTN } from "./display";

const appControl = (function () {


    
  
    return {
        getUserInput
    };
  })();







const createReminder = (name, description, dueDate, priority, project, isComplete) => {
    const titleReminder = name;
    const descriptionReminder = description;
    const dueDateReminder = dueDate
    const priorityReminder = priority
    const projectCategory = project
    const isCompleted = isComplete
  

    return {
      titleReminder,
      descriptionReminder,
      dueDateReminder,
      priorityReminder,
      projectCategory,
      isComplete,
      createReminder
    };
  };
  