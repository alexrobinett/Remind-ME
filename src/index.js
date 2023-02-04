import {addListeners} from './JS/buttons.js'
import { createReminder, Project, projectsContainer, getProjectsFromStore } from './JS/control'
import { displayProjectList, displayProjectTitle, displayReminders, renderRemindersList } from './JS/display'

import './style.css'
import editBtn from './icons/text-box-edit.svg'
import deleteBtn from './icons/trash-can-outline.svg'
import inboxIcon from './icons/inbox.svg'
import checklistIcon from './icons/format-list-bulleted.svg'


// window.displayReminders = displayReminders



// window.inbox = inbox

// window.displayProjectTitle = displayProjectTitle

// window.displayProjectList = displayProjectList



addListeners()

export{editBtn ,deleteBtn, inboxIcon, checklistIcon}