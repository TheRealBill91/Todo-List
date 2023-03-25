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
  /*   const currentProj = setCurrentProject(project); */
  const projects = getAllProjects();
  for (let i = 0; i < projects.length; i++) {
    /* if (i === +event.target.dataset.project) { */
    // Used for creating tasks
    const project = projects[i];

    console.log(getCurrentProject());
    const projTasks = projects[i].tasksArr;
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
  console.table(getAllProjects());
};

const renderProjectTasks = () => {
  const projectObjects = getAllProjects();
  for (let i = 1; i < projectObjects.length; i++) { }
};

const createDefaultProject = () => {
  const defaultProject = createProject("DefaultProj", []);
  addProjectToProjectsArray(defaultProject);
};

const setIndexForDefaultTab = () => {
  const defaultTab = document.querySelector(".defaulTab");
  const projectObjects = getAllProjects();
  const targetProjectIndex = projectObjects.findIndex(
    (projectObj) => projectObj.title === "defaultProject"
  );

  defaultTab.dataset.project = targetProjectIndex;
};

export { createDefaultProject, renderDefaultViewListener, setIndexForDefaultTab };
