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

import {
  renderProjectsToDOM,
  projInputFormListener,
  addProjectToDOM,
  closeProjInputEventListener,
  showProjInputEventListener,
  renderProjTasksListener,
  deleteTaskListener
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
  "03/15/2023",
  "low",
  "notes",
  true
);
const sampleTaskTwo = createToDoTask(
  "taskTwo",
  "descriptionTwo",
  "03/15/2023",
  "medium",
  "notes"
);
const sampleTaskThree = createToDoTask(
  "taskThree",
  "descriptionThree",
  "03/15/2023",
  "medium",
  "notes"
);
const sampleProject = createProject("testProjectObject", []);
addTaskToProjectObj(sampleProject, sampleTask);
addTaskToProjectObj(sampleProject, sampleTaskTwo);
addTaskToProjectObj(sampleProject, sampleTaskThree);
addProjectToProjectsArray(sampleProject);

const secondProjTask = createToDoTask(
  "title",
  "description",
  "03/15/2023",
  "low",
  "notes"
);

const secondProjTaskTwo = createToDoTask(
  "title",
  "description",
  "03/15/2023",
  "low",
  "notes"
);




console.log(getProjectTasks(sampleProject));
console.log(getAllProjects());

showProjInputEventListener();
closeProjInputEventListener();
renderProjectsToDOM();
renderProjTasksListener();
projInputFormListener();
/* deleteTaskListener(); */

