import {
  createToDoTask,
  addToDoTaskArr,
  deleteAllTasks,
  deleteTask,
  changeTaskPriority,
  changeTaskTitle,
  changeTaskNotes,
  toggleTaskCompletion,
} from "./toDoManager/toDoManager";

import { renderWeekTasksListener } from "./weeklyView";

import {
  deleteProjectTask,
  getCurrentProject,
  setCurrentProject,
  addTaskToProjectObj,
  createProject,
  addProjectToProjectsArray,
  getAllProjects,
  getProjectTasks,
} from "./projectManager/projectManager";

import { projectHolder, getAllTasks } from "./getAllTasks";

import { getWeek, parseISO, format, getWeekOfMonth } from "date-fns";

import {
  renderProjectsToDOM,
  projInputFormListener,
  addProjectToDOM,
  closeProjInputEventListener,
  showProjInputEventListener,
  renderProjTasksListener,
  deleteTaskListener,
} from "./displayController/displayController";

import { renderDailyTasksListener } from "./dailyView";

import "./normalize.css";
import "./generalStyles.css";

import { setAttributes } from "./setAttributes";
import { v4 as uuidv4 } from "uuid";
import { addProjArrLocalStorage } from "./localStorage";

import {
  createDefaultProject,
  renderDefaultViewListener,
  setIndexForDefaultTab,
} from "./defaultView";

/* toDoManager(); */

/* const sampleTask = toDoManager().createToDoTask('title', 'description', '03/15/2023', 'low', 'notes');
toDoManager().addToDoTaskArr(sampleTask);
console.table(toDoManager().getAllTasks());
const deleteTask = toDoManager().deleteTask(0);
console.log("Tasks have been deleted:", deleteTask);
console.log(toDoManager().getAllTasks());

const test = [1, 2, 3];

const remove = test.splice(0, 1);
console.log(remove); */

const sampleTask = createToDoTask(
  uuidv4(),
  "title",
  "description",
  "2023-03-15",
  "low",
  "notes",
  true
);
const sampleTaskTwo = createToDoTask(
  uuidv4(),
  "taskTwo",
  "descriptionTwo",
  "2023-03-21",
  "medium",
  "notes",
  false
);
const sampleTaskThree = createToDoTask(
  uuidv4(),
  "taskThree",
  "descriptionThree",
  "2023-03-24",
  "medium",
  "notes",
  true
);

const taskForProjTwo = createToDoTask(
  uuidv4(),
  "ProjTwoTask",
  "descriptionTwo",
  "2023-03-13",
  "medium",
  "notes",
  true
);
const sampleProject = createProject("testProjectObject", []);
const projectTwo = createProject("ProjTwoTest", []);
addTaskToProjectObj(projectTwo, taskForProjTwo);

addTaskToProjectObj(sampleProject, sampleTask);
addTaskToProjectObj(sampleProject, sampleTaskTwo);
addTaskToProjectObj(sampleProject, sampleTaskThree);
createDefaultProject();
addProjectToProjectsArray(sampleProject);
addProjectToProjectsArray(projectTwo);

showProjInputEventListener();
closeProjInputEventListener();
renderProjectsToDOM();
renderProjTasksListener();
setIndexForDefaultTab();
projInputFormListener();
renderWeekTasksListener();
renderDailyTasksListener();
renderDefaultViewListener();
/* createDefaultProject(); */
console.table(getAllProjects());
addProjArrLocalStorage();
/* deleteTaskListener(); */
