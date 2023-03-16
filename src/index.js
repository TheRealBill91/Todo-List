import {
  createToDoTask,
  addToDoTaskArr,
  deleteAllTasks,
  deleteTask,
} from "./toDoManager/toDoManager";
import { deleteProjectTask } from "./projectManager/projectManager";
import { projectHolder, getAllTasks } from "./getAllTasks";

import {
  addTaskToProjectObj,
  createProject,
  addProjectToProjectsArray,
  getAllProjects,
} from "./projectManager/projectManager";

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
  "notes"
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
const secondProject = createProject("Project Two", []);
addTaskToProjectObj(secondProject, secondProjTask);
addTaskToProjectObj(secondProject, secondProjTaskTwo);
addProjectToProjectsArray(secondProject);
const deletedTask = deleteProjectTask(1, 1);
console.log("Some info about deleted task:", deletedTask);
/* sampleProject.sampleTask = sampleTask;
sampleProject.sampleTaskTwo = sampleTaskTwo;
sampleProject.sampleTaskThree = sampleTaskThree; */

console.log(getAllTasks());

console.table(getAllProjects());
