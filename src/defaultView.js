import { renderProjectHeader } from "./DOMElements/createTaskHeader";
import { getAllTasks } from "./getAllTasks";
import {
  getAllProjects,
  getCurrentProject,
  setCurrentProject,
  createProject,
  addProjectToProjectsArray,
} from "./projectManager/projectManager";
import { createTaskElement } from "./DOMElements/createTaskElement";

import {
  loadTaskStatusForProjects,
  deleteTaskListener,
  changeTaskStatusListener,
  editTaskListener,
} from "./displayController/displayController";

import { createTaskBtn, createTaskBtnListener } from "./DOMElements/createTask";

const renderDefaultViewListener = () => {
  const defaultTab = document.querySelector(".defaultTab");
  defaultTab.addEventListener("click", renderDefaultTasksOnClick);
};

const renderDefaultTasksOnClick = (event) => {
  const taskContainer = document.querySelector(".taskContainer");
  taskContainer.innerHTML = "";
  const tasksHolder = document.createElement("div");
  tasksHolder.classList.add("tasks");
  renderProjectHeader();
  taskContainer.appendChild(tasksHolder);
  // Holds the task objects for the weekly tasks
  // So they can be used to load the task status for the weekly tasks
  const defaultViewTasksArr = [];
  // This will be deleted later
  const viewType = "default";
  const targetDefaultTabIndex = +event.target.dataset.project;

  const projectObjects = getAllProjects();
  const currentProj = setCurrentProject(projectObjects[0]);
  for (let i = 0; i < projectObjects.length; i++) {
    /* if (i === +event.target.dataset.project) { */
    // Used for creating tasks
    const project = projectObjects[i];
    const currentProjObject = getCurrentProject();
    console.log(currentProjObject);
    const projTasks = projectObjects[i].tasksArr;
    // return if there is no proj tasks.
    if (projTasks) {
      for (let j = 0; j < projTasks.length; j++) {
        const taskObj = projTasks[j];
        defaultViewTasksArr.push(taskObj);
        createTaskElement(i, j, tasksHolder, taskObj, viewType);
      }
    }
    /* } */
    loadTaskStatusForProjects(defaultViewTasksArr);
  }

  createTaskBtn();
  createTaskBtnListener();
  deleteTaskListener();
  changeTaskStatusListener();
  editTaskListener();
  console.table(getAllProjects());
};

const renderDefaultTasks = () => {
  const taskContainer = document.querySelector(".taskContainer");
  taskContainer.innerHTML = "";
  const tasksHolder = document.createElement("div");
  tasksHolder.classList.add("tasks");
  renderProjectHeader();
  taskContainer.appendChild(tasksHolder);
  // Holds the task objects for the weekly tasks
  // So they can be used to load the task status for the weekly tasks
  const defaultViewTasksArr = [];
  // This will be deleted later
  const viewType = "default";

  const projectObjects = getAllProjects();
  setCurrentProject(projectObjects[0]);
  for (let i = 0; i < projectObjects.length; i++) {
    // Used for creating tasks
    const project = projectObjects[i];
    const currentProjObject = getCurrentProject();
    /* console.log(currentProjObject); */
    const projTasks = projectObjects[i].tasksArr;
    // return if there is no proj tasks. Probably means you will want to query task header
    // and change it's title to match current proj that way.
    if (projTasks) {
      for (let j = 0; j < projTasks.length; j++) {
        const taskObj = projTasks[j];
        defaultViewTasksArr.push(taskObj);
        createTaskElement(i, j, tasksHolder, taskObj, viewType);
      }
    }
    /* } */
    loadTaskStatusForProjects(defaultViewTasksArr);
  }

  createTaskBtn();
  createTaskBtnListener();
  deleteTaskListener();
  changeTaskStatusListener();
  editTaskListener();
  /* console.table(getAllProjects()); */
};

const createDefaultProject = () => {
  const defaultProject = createProject("DefaultProj", []);
  addProjectToProjectsArray(defaultProject);
};

const setIndexForDefaultTab = () => {
  const defaultTab = document.querySelector(".defaultTab");
  const targetProjectIndex = 0;

  defaultTab.dataset.project = targetProjectIndex;
};

export {
  createDefaultProject,
  renderDefaultViewListener,
  setIndexForDefaultTab,
  renderDefaultTasks,
};
