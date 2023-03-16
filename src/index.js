import toDoManager from "./toDoManager/toDoManager";
/* import projectManager from "./projectManager/projectManager"; */
import { addTaskToProjectObj, createProject, addProjectToProjectsArray, getAllProjects } from "./projectManager/projectManager";

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

const sampleTask = toDoManager().createToDoTask('title', 'description', '03/15/2023', 'low', 'notes');
const sampleTaskTwo = toDoManager().createToDoTask('taskTwo', 'descriptionTwo', '03/15/2023', 'medium', 'notes');
const sampleTaskThree = toDoManager().createToDoTask('taskThree', 'descriptionThree', '03/15/2023', 'medium', 'notes');
const sampleProject = createProject('testProjectObject', []);

addTaskToProjectObj(sampleProject, sampleTask);
addTaskToProjectObj(sampleProject, sampleTaskTwo);
addTaskToProjectObj(sampleProject, sampleTaskThree);
/* sampleProject.sampleTask = sampleTask;
sampleProject.sampleTaskTwo = sampleTaskTwo;
sampleProject.sampleTaskThree = sampleTaskThree; */
addProjectToProjectsArray(sampleProject);
console.table(getAllProjects());