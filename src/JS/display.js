function displayReminders(name, description, dueDate, priority, isComplete){

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
        taskSpan.textContent = `${name}`;

        const descriptionSpan = document.createElement("span");
        descriptionSpan.classList.add("description");
        descriptionSpan.classList.add("completed");
        descriptionSpan.textContent = `${description}`;

        const rightSideDiv = document.createElement("div");
        rightSideDiv.classList.add("right-side");

        const dueDateSpan = document.createElement("span");
        dueDateSpan.classList.add("due-date");
        dueDateSpan.classList.add("completed");
        dueDateSpan.textContent = `${dueDate}`;

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
        circleDiv.classList.add(`${priority}`);

        const taskSpan = document.createElement("span");
        taskSpan.classList.add("task");
        taskSpan.textContent = `${name}`;

        const descriptionSpan = document.createElement("span");
        descriptionSpan.classList.add("description");
        descriptionSpan.textContent = `${description}`;

        const rightSideDiv = document.createElement("div");
        rightSideDiv.classList.add("right-side");

        const dueDateSpan = document.createElement("span");
        dueDateSpan.classList.add("due-date");
        dueDateSpan.textContent = `${dueDate}`;

        const editBtnImg = document.createElement("img");
        editBtnImg.classList.add("edit-btn");
        editBtnImg.src = "/src/icons/text-box-edit.svg";
        editBtnImg.alt = "edit";

        const deleteBtnImg = document.createElement("img");
        deleteBtnImg.classList.add("delete-btn");
        deleteBtnImg.src = "/src/icons/trash-can-outline.svg";
        deleteBtnImg.alt = "trash";

    
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









export{displayReminders,displayProjectTitle}