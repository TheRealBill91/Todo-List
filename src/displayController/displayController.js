import {
  createProject,
  addProjectToProjectsArray,
  getAllProjects,
  setCurrentProject,
  getProjectTasks,
  getCurrentProject,
} from "../projectManager/projectManager";

import {
  btnPrioritySelector,
  createTaskBtn,
  createTaskBtnListener,
  closeTaskForm,
} from "../DOMElements/createTask";

import { format, parse, parseISO } from "date-fns";

import {
  changeTaskTitle,
  changeTaskDescription,
  changeTaskDueDate,
  changeTaskPriority,
  changeTaskNotes,
  modifyTask,
} from "../toDoManager/toDoManager";

import { setAttributes } from "../setAttributes";
import { createTaskElement } from "../DOMElements/createTaskElement";
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

// renders project tasks when user clicks on project on the sidebar
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

  editTaskListener();
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
  editTaskListener();
};

const deleteTaskListener = () => {
  const deleteButtons = document.querySelectorAll(".deleteButton");
  deleteButtons.forEach((deleteBtn) =>
    deleteBtn.addEventListener("click", deleteTask)
  );
};

const deleteTask = (event) => {
  const targetDeleteBtn = +event.target.dataset.index;
  const currentProj = getCurrentProject();

  const projTasks = getProjectTasks(currentProj);
  if (projTasks) {
    for (let j = 0; j < projTasks.length; j++) {
      if (j === targetDeleteBtn) {
        projTasks.splice(j, 1);
        renderProjectTasks();
        return;
      }
    }
  }
};

// Sets event listener on each edit button for all the tasks
// in the currently selected project
const editTaskListener = () => {
  const editButtons = document.querySelectorAll(".editButton");
  editButtons.forEach((editBtn) => editBtn.addEventListener("click", editTask));
};

const editTask = (event) => {
  const targetEditBtn = +event.target.dataset.index;
  const currentProj = getCurrentProject();
  const formModalBg = document.querySelector(".form-modal-background");
  const formContainer = document.querySelector(".form-container");

  const projTasks = getProjectTasks(currentProj);
  if (projTasks) {
    for (let j = 0; j < projTasks.length; j++) {
      if (j === targetEditBtn) {
        formModalBg.style.display = "flex";
        formContainer.style.display = "grid";
        const currentTask = projTasks[j];
        loadTaskValues(currentTask);
        // Use a variable to wrap the callback with parameters for editing task form
        // Remove the form event listener each time to avoid accumulation
        // Remove the form event listener in a separate function if not submitted
        const wrappedModifySubmit = (event) =>
          modifyTaskSubmit(event, projTasks, j);
        modifyTaskSubmitListen(wrappedModifySubmit);
        closeTaskForm(wrappedModifySubmit);
        return;
      }
    }
  }
};

// loads task values into form when user hits the edit button
const loadTaskValues = (currentTask) => {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const dueDate = document.getElementById("dueDate");
  const priority = document.getElementById("priority");
  const notes = document.getElementById("notes");

  const taskValues = Object.values(currentTask);
  const priorityValue = taskValues[3];
  const dateString = taskValues[2];
  const dateObject = parseISO(dateString);
  // You only need this version for the tasks you manually created
  // inside index.js
  // const parsedDate = parse(dateValue, 'MM/dd/yyyy', new Date());
  const formattedDate = format(dateObject, "yyyy-MM-dd");

  title.value = taskValues[0];
  description.value = taskValues[1];
  dueDate.value = formattedDate;
  setPriorityRadioButton(priorityValue);
  notes.value = taskValues[4];
};

// loads and checks the correct priority value for the task that user is trying to
// edit using the edit task form
const setPriorityRadioButton = (priorityValue) => {
  const radioButtons = document.querySelectorAll('label input[type="radio"]');

  radioButtons.forEach((radioBtn) => {
    if (radioBtn.id === priorityValue) {
      radioBtn.checked = priorityValue;
      return radioBtn.checked;
    }
  });
};

const modifyTaskSubmitListen = (wrappedModifySubmit) => {
  const taskForm = document.getElementById("taskForm");
  taskForm.addEventListener("submit", wrappedModifySubmit, { once: true });
};

const modifyTaskSubmit = (event, projTasks, j) => {
  event.preventDefault();
  const taskForm = document.getElementById("taskForm");
  const formModalBg = document.querySelector(".form-modal-background");
  const formContainer = document.querySelector(".form-container");

  modifyTask(projTasks, j, getNewTaskValues());
  renderProjectTasks();
  taskForm.reset();
  formModalBg.style.display = "none";
  formContainer.style.display = "none";
};

// Retrieves all of the new task values the user has entered before
// submitting, and pushes them into an array. Makes it easier to
// new task values into function that modifies the task values
const getNewTaskValues = () => {
  const taskValues = [];

  const title = document.getElementById("title");
  const newTitle = title.value;
  taskValues.push(newTitle);

  const description = document.getElementById("description");
  const newDescription = description.value;
  taskValues.push(newDescription);

  const dueDate = document.getElementById("dueDate");
  const newDueDate = dueDate.value;
  taskValues.push(newDueDate);

  taskValues.push(btnPrioritySelector());

  const notes = document.getElementById("notes");
  const newNotes = notes.value;
  taskValues.push(newNotes);

  return taskValues;
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
  editTaskListener,
};
