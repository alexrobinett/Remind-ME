import { projectsContainer } from "./control";

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
        editBtnImg.src = "/src/icons/text-box-edit.svg";
        editBtnImg.alt = "edit";

        const deleteBtnImg = document.createElement("img");
        deleteBtnImg.classList.add("delete");
        deleteBtnImg.classList.add("completed-icon");
        deleteBtnImg.src = "/src/icons/trash-can-outline.svg";
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
        editBtnImg.src = "/src/icons/text-box-edit.svg";
        editBtnImg.alt = "edit";

        const deleteBtnImg = document.createElement("img");
        deleteBtnImg.classList.add("delete-btn");
        deleteBtnImg.src = "/src/icons/trash-can-outline.svg";
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


function displayProjectTitle(project){
    const projectNameDisplayer= document.querySelector(".project-title-holder")
    projectNameDisplayer.textContent = `${project}`
}


function displayProjectList(project){
    const projectListContainer = document.querySelector(".project-list-ul")

    const listItem = document.createElement("li");
    listItem.classList.add("nav-item")
    listItem.classList.add("project")

    const listImg = document.createElement("img")
    listImg.src = "/src/icons/format-list-bulleted.svg"

    const projectTitleHolder = document.createElement("span")
    projectTitleHolder.textContent = `${project}`

    listItem.appendChild(listImg)
    listItem.appendChild(projectTitleHolder)

    projectListContainer.appendChild(listItem)
}




function clearReminderList(){
    const reminderContainer = document.querySelector(".reminder-container")
    const completedContainer = document.querySelector(".reminder-container-completed")

    completedContainer.innerHTML = ""
    reminderContainer.innerHTML = ""
}





function renderRemindersList(){
    for (let i = 0; i < projectsContainer[0].task.length; i++){
        displayReminders(projectsContainer[0].task[i].reminderTitle, projectsContainer[0].task[i].reminderDescription, projectsContainer[0].task[i].reminderDueDate, projectsContainer[0].task[i].reminderPriority, projectsContainer[0].task[i].isComplete)
    }
}


export{displayReminders,displayProjectTitle,displayProjectList,renderRemindersList,clearReminderList}