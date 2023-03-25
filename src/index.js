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
// const projectObjects = getAllProjects();
// const projTitle = "testProjectObject";
// const taskTitle = "taskThree";
// const projIndex = projectObjects.findIndex((projObj) => projObj.projectTitle === projTitle);

// const targetProjTasks = projectObjects[projIndex].tasksArr;
// const taskIndex = targetProjTasks.findIndex((projTask) => projTask.title === taskTitle);
// console.log(taskIndex);

const tasks = document.querySelectorAll(".tasks > div");
const randomTask = tasks[0];
console.log(randomTask);

showProjInputEventListener();
closeProjInputEventListener();
renderProjectsToDOM();
renderProjTasksListener();
projInputFormListener();
renderWeekTasksListener();
renderDailyTasksListener();
/* deleteTaskListener(); */
