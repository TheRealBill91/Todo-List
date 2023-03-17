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
  deleteProjectTask, getCurrentProject, setCurrentProject,
  addTaskToProjectObj,
  createProject,
  addProjectToProjectsArray,
  getAllProjects,
} from "./projectManager/projectManager";

import { projectHolder, getAllTasks } from "./getAllTasks";

import { addProjectToDOM, renderProjectsToDOM } from "./displayController/displayController";

import "./normalize.css";
import "./generalStyles.css";



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
  "notes",

);

function modelTesting() {
  const secondProject = createProject("Project Two", []);
  addTaskToProjectObj(secondProject, secondProjTask);
  addTaskToProjectObj(secondProject, secondProjTaskTwo);
  addProjectToProjectsArray(secondProject);
  /* deleteProjectTask(1, 1); */

  setCurrentProject(sampleProject);
  console.log("The current project is set to:", getCurrentProject().projectTitle);
  setCurrentProject(secondProject);
  console.log("The current project is now set to:", getCurrentProject().projectTitle);

  changeTaskPriority(0, 0, "med");
  changeTaskTitle(0, 0, "Changed, now first task")
  changeTaskNotes(0, 0, "Updated Notes!")
  toggleTaskCompletion(0, 0);
  toggleTaskCompletion(0, 0)

  console.log(getAllTasks());

  console.table(getAllProjects());
}

/* modelTesting() */
addProjectToDOM();
renderProjectsToDOM();

