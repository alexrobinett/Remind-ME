import {
  renderRemindersList,
  renderProjectList,
  displayProjectTitle,
} from './display';
import { addListeners } from './buttons';
import '../style.css';

const createReminder = (
  reminder,
  description,
  priority,
  duedate,
  isComplete = false
) => {
  const reminderTitle = reminder;
  const reminderDescription = description;
  const reminderPriority = priority;
  const reminderDueDate = duedate;
  const reminderId = Date.now();

  function toggleCompleted() {
    this.isComplete = !this.isComplete;
    console.log('isComplete set to', this.isComplete);
  }

  return {
    reminderTitle,
    reminderDescription,
    reminderDueDate,
    reminderPriority,
    isComplete,
    toggleCompleted,
    reminderId,
  };
};

const createProject = (name) => {
  const projectName = name;
  const task = [];
  const projectId = Date.now();

  function addTask(title, description, priority, dueDate) {
    this.task.push(createReminder(title, description, priority, dueDate));
    storeProjects(projectsContainer);
  }

  return {
    addTask,
    projectName,
    task,
    projectId,
  };
};

const projectsContainer = retrieveProjects();
window.projectsContainer = projectsContainer;

if (projectsContainer.length === 0) {
  projectsContainer.push(createProject('Inbox'));
  projectsContainer[0].addTask(
    'Wash Clothes',
    'Separate Lights and Darks',
    'medium',
    '3-21-23'
  );
}

renderRemindersList();
displayProjectTitle();
renderProjectList();
addListeners();
storeProjects(projectsContainer);

function storeProjects(projects) {
  localStorage.clear();
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < projects.length; i++) {
    const key = `project_${i}`;
    localStorage.setItem(
      key,
      JSON.stringify({
        name: projects[i].projectName,
        tasks: projects[i].task.map((task) => ({
          reminderTitle: task.reminderTitle,
          reminderDescription: task.reminderDescription,
          reminderPriority: task.reminderPriority,
          reminderDueDate: task.reminderDueDate,
          isComplete: task.isComplete,
        })),
      })
    );
  }
}

function retrieveProjects() {
  const projectList = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('project_')) {
      const value = JSON.parse(localStorage.getItem(key));
      projectList.push(createProject(value.name));
      if (value.tasks) {
        projectList[projectList.length - 1].task = value.tasks.map((task) =>
          createReminder(
            task.reminderTitle,
            task.reminderDescription,
            task.reminderPriority,
            task.reminderDueDate,
            task.isComplete
          )
        );
      }
    }
  }
  return projectList;
}

export {
  createReminder,
  createProject,
  retrieveProjects,
  storeProjects,
  projectsContainer,
};
