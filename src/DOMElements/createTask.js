import { createToDoTask } from "../toDoManager/toDoManager";
import {
  addTaskToProjectObj,
  getAllProjects,
  getCurrentProject,
} from "../projectManager/projectManager";

import { createTaskElement } from "./createTaskElement";

import {
  renderProjectTasks,
  deleteTaskListener,
  editTaskListener,
  changeTaskStatusListener,
} from "../displayController/displayController";
import { getAllTasks } from "../getAllTasks";
import { v4 as uuidv4 } from "uuid";

// Creates button for adding task on current page as well as
// setting up an event listener to open the form inputting details

const createTaskBtn = () => {
  const taskContainer = document.querySelector(".taskContainer");
  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("addTaskBtn");
  addTaskBtn.textContent = "Add Task";
  taskContainer.appendChild(addTaskBtn);
};

// Sets up event listener to open task form when user clicks
// add task btn
const createTaskBtnListener = () => {
  const addTaskBtn = document.querySelector(".addTaskBtn");
  const formModalBg = document.querySelector(".form-modal-background");
  const formContainer = document.querySelector(".form-container");
  // once you create form element using DOM, you can use a callback
  // instead of arrow function here
  addTaskBtn.addEventListener("click", () => {
    formModalBg.style.display = "flex";
    formContainer.style.display = "grid";
    taskFormSubmitListen();
    closeTaskForm();
  });
};

const closeTaskForm = (wrappedModifySubmit) => {
  const formModalBg = document.querySelector(".form-modal-background");
  const formContainer = document.querySelector(".form-container");
  const closeModalBtn = document.querySelector(".close-modal");
  const form = document.getElementById("taskForm");
  closeModalBtn.addEventListener("click", () => {
    form.reset();
    // remove event listener when user closes form without creating task
    form.removeEventListener("submit", createTask, { once: true });
    // remove event listener when user closes form without creat
    form.removeEventListener("submit", wrappedModifySubmit);
    formModalBg.style.display = "none";
    formContainer.style.display = "none";
  });
};

// Creates task after user submits form
const createTask = (event) => {
  console.log(btnPrioritySelector());
  const formContainer = document.querySelector(".form-container");
  const taskForm = document.getElementById("taskForm");
  const formModalBg = document.querySelector(".form-modal-background");
  const currentProj = getCurrentProject();

  event.preventDefault();
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const dueDate = document.getElementById("dueDate");
  const priority = btnPrioritySelector();
  const notes = document.getElementById("notes");

  const task = createToDoTask(
    uuidv4(),
    titleInput.value,
    descriptionInput.value,
    dueDate.value,
    priority,
    notes.value,
    false
  );

  console.log("Submitted task:", task);
  addTaskToProjectObj(currentProj, task);
  console.log(getAllTasks());
  taskForm.reset();
  formContainer.style.display = "none";
  formModalBg.style.display = "none";
  addNewTaskElement(task, currentProj);
  // taskForm.removeEventListener("submit", createTask);
  // renderProjectTasks();
};

// Adds new task element to the project tasks view
const addNewTaskElement = (task, currentProj) => {
  const taskContainer = document.querySelector(".taskContainer");
  const tasksHolder = document.querySelector(".tasks");

  const tasks = document.querySelectorAll(".tasks > div");
  const randomProjTask = tasks[0];
  const randomProjView = randomProjTask.dataset.view;

  const viewType = randomProjView;

  const newTaskTitle = task.title;
  const currentProjTitle = currentProj.projectTitle;
  const projectObjects = getAllProjects();
  // projectObjects.forEach((projObject, index) => {
  //   if (projObject.title === currentProjTitle) {
  //     const projIndex = index;
  //   }
  // });

  const projectIndex = projectObjects.findIndex(
    (projObj) => projObj.projectTitle === currentProjTitle
  );
  const targetProjTasks = projectObjects[projectIndex].tasksArr;
  const taskIndex = targetProjTasks.findIndex(
    (projTask) => projTask.title === newTaskTitle
  );

  createTaskElement(projectIndex, taskIndex, tasksHolder, task, viewType);
  deleteTaskListener();
  changeTaskStatusListener();
  editTaskListener();
};

// listens for user clicking submit button when creating
// task
const taskFormSubmitListen = () => {
  const taskForm = document.getElementById("taskForm");
  taskForm.addEventListener("submit", createTask, { once: true });
};

// selects the task priority based on the button the user
// clicked on
const btnPrioritySelector = () => {
  const radioButtons = document.querySelectorAll('label input[type="radio"]');
  let selectedPriority;

  radioButtons.forEach((btn) => {
    if (btn.checked) {
      selectedPriority = btn.value;
    }
  });

  return selectedPriority;
};

const formatDate = date => { };

export {
  createTaskBtn,
  createTaskBtnListener,
  closeTaskForm,
  btnPrioritySelector,
};
