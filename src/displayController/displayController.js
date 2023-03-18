import {
  createProject,
  addProjectToProjectsArray,
  getAllProjects,
  setCurrentProject,
  getProjectTasks,
  getCurrentProject,
} from "../projectManager/projectManager";

import { setAttributes } from "../setAttributes";
import { createTaskElement } from "../DOMElements/createTaskElement";
import {
  createTaskBtn,
  createTaskBtnListener,
  closeTaskForm,
} from "../DOMElements/createTask";
import { renderProjectHeader } from "../DOMElements/createTaskHeader";

const addProjectButton = document.querySelector(".projSubmitBtn");
const showProjInputBtn = document.querySelector(".showProjInputBtn");
const projectInputForm = document.querySelector(".projectInputForm");
const projectTitleInput = document.querySelector(".projTitleInput");
const closeProjInputBtn = document.querySelector(".closeProjectInputBtn");
const projectObjects = document.querySelectorAll(".projects");

const addProjectToDOM = (event) => {
  event.preventDefault();
  const projectTitleInput = document.querySelector(".projTitleInput");
  const projectTitleInputValue = projectTitleInput.value;
  const project = createProject(projectTitleInputValue, []);
  addProjectToProjectsArray(project);
  renderProjectsToDOM();
  projectInputForm.reset();
};

const projInputFormListener = () =>
  projectInputForm.addEventListener("submit", addProjectToDOM);

const renderProjectsToDOM = () => {
  // element that holds the project objects
  const projectsHolder = document.querySelector(".projects");
  projectsHolder.innerHTML = "";
  const projectObjects = getAllProjects();
  projectObjects.forEach((projectObj, index) => {
    const projectDiv = document.createElement("div");
    projectDiv.textContent = projectObj.projectTitle;
    projectDiv.setAttribute("data-index", `${index}`);
    projectsHolder.appendChild(projectDiv);
  });
};

const showProjInputEventListener = () =>
  showProjInputBtn.addEventListener("click", showProjInput);

const showProjInput = () => {
  projectInputForm.style.display = "block";
  closeProjInputBtn.style.display = "block";
};

const closeProjInputEventListener = () =>
  closeProjInputBtn.addEventListener("click", closeProjectInput);

const closeProjectInput = () => {
  projectInputForm.style.display = "none";
  closeProjInputBtn.style.display = "none";
};

const renderProjTasksListener = () =>
  projectObjects.forEach((projObject) =>
    projObject.addEventListener("click", renderProjectTasksOnClick)
  );

// renders project tasks when user clicks on project sidebar
const renderProjectTasksOnClick = (event) => {
  /* console.log("Event listener is working!"); */
  const taskContainer = document.querySelector(".taskContainer");
  taskContainer.innerHTML = "";
  renderProjectHeader();
  const tasks = document.createElement("div");
  tasks.classList.add("tasks");
  taskContainer.appendChild(tasks);

  // tasks.innerHTML = "";
  const projectObjects = getAllProjects();
  projectObjects.forEach((projObject, index) => {
    if (index === +event.target.dataset.index) {
      setCurrentProject(projObject);
      const projTasks = getProjectTasks(projObject);
      // return if there is no proj tasks. Probably means you will want to query task header
      // and change it's title to match current proj that way.
      if (projTasks) {
        projTasks.forEach((taskObj, index) => {
          createTaskElement(taskObj, index, tasks);
        });
      }
      createTaskBtn();
      createTaskBtnListener();
    }
  });
  // listens for user click of task delete button
  deleteTaskListener();
};

// renders project tasks for cases when user doesn't first click on the project
// e.g., after a user deletes a task
const renderProjectTasks = () => {
  const tasksHolder = document.querySelector(".tasks");
  tasksHolder.innerHTML = "";
  const currentProj = getCurrentProject();
  const projTasks = getProjectTasks(currentProj);
  // return if there is no proj tasks. Probably means you will want to query task header
  // and change it's title to match current proj that way.
  if (projTasks) {
    projTasks.forEach((taskObj, index) => {
      createTaskElement(taskObj, index, tasksHolder);
    });
  }
  deleteTaskListener();
};

const deleteTaskListener = () => {
  const deleteButtons = document.querySelectorAll(".deleteButton");
  deleteButtons.forEach((deleteBtn) =>
    deleteBtn.addEventListener("click", deleteTask)
  );
};

const deleteTask = (event) => {
  const targetDeleteBtn = +event.target.dataset.index;
  const projectObjects = getAllProjects();

  projectObjects.forEach((projObject, index) => {
    const projTasks = getProjectTasks(projObject);
    if (projTasks) {
      for (let j = 0; j < projTasks.length; j++) {
        if (j === targetDeleteBtn) {
          projTasks.splice(j, 1);
          renderProjectTasks();
          return;
        }
      }
    }
  });
};

export {
  addProjectToDOM,
  renderProjectsToDOM,
  projInputFormListener,
  closeProjInputEventListener,
  showProjInputEventListener,
  renderProjTasksListener,
  renderProjectTasksOnClick,
  deleteTaskListener,
  renderProjectTasks,
};
