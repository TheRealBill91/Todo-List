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

import "./normalize.css";
import "./generalStyles.css";

import { setAttributes } from "./setAttributes";

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
  "title",
  "description",
  "2023-03-15",
  "low",
  "notes",
  true
);
const sampleTaskTwo = createToDoTask(
  "taskTwo",
  "descriptionTwo",
  "2023-03-21",
  "medium",
  "notes",
  false
);
const sampleTaskThree = createToDoTask(
  "taskThree",
  "descriptionThree",
  "2023-03-17",
  "medium",
  "notes",
  true
);

const taskForProjTwo = createToDoTask(
  "ProjTwoTask",
  "descriptionTwo",
  "2023-03-21",
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
addProjectToProjectsArray(sampleProject);
addProjectToProjectsArray(projectTwo);

const currentWeekIndex = getWeek(new Date());
const sampleDate = format(parseISO("2023-03-20"), "yyyy-MM-dd");
const currentWeekDate = format(new Date(), "yyyy-MM-dd");
const currentWeek = getWeek(new Date(currentWeekDate));
const sampleWeekIndex = getWeek(new Date("2023-03-20"));

/* console.log(getProjectTasks(sampleProject));
console.log(getAllProjects());
console.log(`Current week: ${currentWeek}`);
console.log(`Current week in date format: ${currentWeekDate}`)
console.log(sampleDate)
console.log(`Current Date ${format(new Date(), "yyyy-MM-dd")}`);
console.log(`Sample week: ${getWeek(new Date())}`);
console.log(sampleWeekIndex === currentWeekIndex); */

/* console.log(getWeekOfMonth(new Date())) */
console.log(getAllProjects());

showProjInputEventListener();
closeProjInputEventListener();
renderProjectsToDOM();
renderProjTasksListener();
projInputFormListener();
renderWeekTasksListener();
/* deleteTaskListener(); */
