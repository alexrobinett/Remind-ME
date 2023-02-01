import addListeners from './JS/buttons'
import { createReminder } from './JS/control'
import { displayProjectList, displayProjectTitle, displayReminders } from './JS/display'

window.displayReminders = displayReminders

let testReminder1 = createReminder("feed keni", "give keni dog food", "11/12/23", "high", "inbox", false)

window.testReminder1 = testReminder1

let inbox = []

window.inbox = inbox

window.displayProjectTitle = displayProjectTitle

window.displayProjectList = displayProjectList


addListeners()
