import { projectsContainer } from "./control";
import { currentProjectIndex, currentReminderIndex } from "./buttons";
import editBtn from '../icons/text-box-edit.svg'
import deleteBtn from '../icons/trash-can-outline.svg'
import inboxIcon from '../icons/inbox.svg'
import checklistIcon from '../icons/format-list-bulleted.svg'
import '../style.css'


// DOM Element Creations

function displayReminders(reminderTitle, reminderDescription, reminderDueDate, reminderPriority, isComplete, reminderId){

    if(isComplete === true){
        const completedContainer = document.querySelector(".reminder-container-completed")
        const reminderDiv = document.createElement("div");
        reminderDiv.classList.add("reminder");
        reminderDiv.classList.add("completed");

        const circleDiv = document.createElement("div");
        circleDiv.classList.add("circle");
        circleDiv.classList.add("completed");

        const taskSpan = document.createElement("span");
        taskSpan.classList.add("task");
        taskSpan.classList.add("completed");
        taskSpan.textContent = `${reminderTitle}`;

        const descriptionSpan = document.createElement("span");
        descriptionSpan.classList.add("description");
        descriptionSpan.classList.add("completed");
        descriptionSpan.textContent = `${reminderDescription}`;

        const rightSideDiv = document.createElement("div");
        rightSideDiv.classList.add("right-side");

        const dueDateSpan = document.createElement("span");
        dueDateSpan.classList.add("due-date");
        dueDateSpan.classList.add("completed");
        dueDateSpan.textContent = `${reminderDueDate}`;

        const editBtnImg = document.createElement("img");
        editBtnImg.classList.add("edit");
        editBtnImg.classList.add("completed-icon");
        editBtnImg.src = editBtn;
        editBtnImg.alt = "edit";

        const deleteBtnImg = document.createElement("img");
        deleteBtnImg.classList.add("delete");
        deleteBtnImg.classList.add("completed-icon");
        deleteBtnImg.src = deleteBtn;
        deleteBtnImg.alt = "trash";
        deleteBtnImg.setAttribute('data-task', reminderId);

        rightSideDiv.appendChild(dueDateSpan);
        rightSideDiv.appendChild(editBtnImg);
        rightSideDiv.appendChild(deleteBtnImg);

        reminderDiv.appendChild(circleDiv);
        reminderDiv.appendChild(taskSpan);
        reminderDiv.appendChild(descriptionSpan);
        reminderDiv.appendChild(rightSideDiv);
        completedContainer.appendChild(reminderDiv)

    }else if (isComplete === false){

        const reminderContainer = document.querySelector(".reminder-container")

        const reminderDiv = document.createElement("div");
        reminderDiv.classList.add("reminder");

        const circleDiv = document.createElement("div");
        circleDiv.classList.add("circle");
        circleDiv.classList.add(`${reminderPriority}`);
        circleDiv.setAttribute('data-task', reminderId)

        const taskSpan = document.createElement("span");
        taskSpan.classList.add("task");
        taskSpan.textContent = `${reminderTitle}`;

        const descriptionSpan = document.createElement("span");
        descriptionSpan.classList.add("description");
        descriptionSpan.textContent = `${reminderDescription}`;

        const rightSideDiv = document.createElement("div");
        rightSideDiv.classList.add("right-side");

        const dueDateSpan = document.createElement("span");
        dueDateSpan.classList.add("due-date");
        dueDateSpan.textContent = `${reminderDueDate}`;

        const editBtnImg = document.createElement("img");
        editBtnImg.classList.add("edit-btn");
        editBtnImg.src = editBtn;
        editBtnImg.alt = "edit";

        const deleteBtnImg = document.createElement("img");
        deleteBtnImg.classList.add("delete-btn");
        deleteBtnImg.src = deleteBtn;
        deleteBtnImg.alt = "trash";
        deleteBtnImg.setAttribute('data-task', reminderId);


    
        rightSideDiv.appendChild(dueDateSpan);
        rightSideDiv.appendChild(editBtnImg);
        rightSideDiv.appendChild(deleteBtnImg);

        reminderDiv.appendChild(circleDiv);
        reminderDiv.appendChild(taskSpan);
        reminderDiv.appendChild(descriptionSpan);
        reminderDiv.appendChild(rightSideDiv);
        reminderContainer.appendChild(reminderDiv)
    }

}



function displayProject(projectName, projectId){
    const projectListContainer = document.querySelector(".project-list-ul")

    const listItem = document.createElement("li");
    listItem.classList.add("nav-item")
    listItem.classList.add("project")
    listItem.setAttribute('data-project', projectId);

    const listImg = document.createElement("img")
    listImg.src = checklistIcon 

    const projectTitleHolder = document.createElement("span")
    projectTitleHolder.textContent = `${projectName}`

    listItem.appendChild(listImg)
    listItem.appendChild(projectTitleHolder)

    projectListContainer.appendChild(listItem)
}





function displayProjectTitle(projectIndex = 0){
    const projectNameDisplayer= document.querySelector(".project-title-holder")
    projectNameDisplayer.textContent = `${projectsContainer[projectIndex].projectName}`
}



// clear Functions

function clearProjectList(){
    const projectContainer = document.querySelector(".project-list-ul")

    projectContainer.innerHTML = ""
}



function clearReminderList(){
    const reminderContainer = document.querySelector(".reminder-container")
    const completedContainer = document.querySelector(".reminder-container-completed")

    completedContainer.innerHTML = ""
    reminderContainer.innerHTML = ""
}



function updateFormTextUpdate(){

    console.log(`this is the reminder index inside update from function ${currentReminderIndex}`)
    console.log( `this is the project index inside update from function ${currentProjectIndex}`)

    const reminder =  projectsContainer[currentProjectIndex].task[currentReminderIndex].reminderTitle
    const description = projectsContainer[currentProjectIndex].task[currentReminderIndex].reminderDescription
    const priority = projectsContainer[currentProjectIndex].task[currentReminderIndex].reminderPriority
    const dueDate  = projectsContainer[currentProjectIndex].task[currentReminderIndex].reminderDueDate


    let updatedReminderTitle = document.getElementById("reminder-title-update")
    let updatedReminderDescription = document.getElementById("reminder-description-update")
    let updatedReminderPriority = document.getElementById("reminder-priority-update")
    let updatedReminderDueDate = document.getElementById("reminder-due-date-update")

    updatedReminderTitle.value = reminder
    updatedReminderDescription.value = description
    updatedReminderPriority.value = priority
    updatedReminderDueDate.value = dueDate
}   




// Render Functions

function renderProjectList(){
    for(let i = 0; i < projectsContainer.length; i++){
        displayProject(projectsContainer[i].projectName, projectsContainer[i].projectId)
    }   
}


function renderRemindersList(project = 0){
    for (let i = 0; i < projectsContainer[project].task.length; i++){
        displayReminders(projectsContainer[project].task[i].reminderTitle, projectsContainer[project].task[i].reminderDescription, projectsContainer[project].task[i].reminderDueDate, projectsContainer[project].task[i].reminderPriority, projectsContainer[project].task[i].isComplete, projectsContainer[project].task[i].reminderId)
    }
}


function updateDisplayedProject(projectName,projectIndex){
    clearProjectList()
    renderProjectList(projectIndex , projectIndex)
    displayProjectTitle(projectIndex)
}

function updateDisplayedReminders(projectIndex){
    clearReminderList()
    renderRemindersList(projectIndex)
}


export{displayReminders, displayProjectTitle, displayProject, renderRemindersList, clearReminderList, clearProjectList, renderProjectList, updateDisplayedProject,updateDisplayedReminders, updateFormTextUpdate}