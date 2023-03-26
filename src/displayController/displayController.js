import {
  createProject,
  addProjectToProjectsArray,
  getAllProjects,
  setCurrentProject,
  setCurrentProjectIndex,
  getCurrentProjectIndex,
  getProjectTasks,
  getCurrentProject,
} from "../projectManager/projectManager";

import {
  btnPrioritySelector,
  createTaskBtn,
  createTaskBtnListener,
  closeTaskForm,
} from "../DOMElements/createTask";

import { format, getWeek, isSameWeek, parse, parseISO } from "date-fns";

import {
  changeTaskTitle,
  changeTaskDescription,
  changeTaskDueDate,
  changeTaskPriority,
  changeTaskNotes,
  modifyTask,
  toggleTaskCompletion,
} from "../toDoManager/toDoManager";

import { setAttributes } from "../setAttributes";
import { createTaskElement } from "../DOMElements/createTaskElement";
import { renderProjectHeader } from "../DOMElements/createTaskHeader";
import { getAllTasks } from "../getAllTasks";
import {
  addProjLocalStorageArr,
  removeTaskFromLocalStorage,
  modifyTaskInLocalStorage,
  updateTaskStatusInLocalStorage,
} from "../localStorage";

const addProjectButton = document.querySelector(".projSubmitBtn");
const showProjInputBtn = document.querySelector(".showProjInputBtn");
const projectInputForm = document.querySelector(".projectInputForm");
const projectTitleInput = document.querySelector(".projTitleInput");
const closeProjInputBtn = document.querySelector(".closeProjectInputBtn");
const projectElms = document.querySelectorAll(".projects");

const addProjectToDOM = (event) => {
  event.preventDefault();
  const projectTitleInput = document.querySelector(".projTitleInput");
  const projectTitleInputValue = projectTitleInput.value;
  const project = createProject(projectTitleInputValue, []);
  addProjectToProjectsArray(project);
  addProjLocalStorageArr(project);
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
  for (let i = 1; i < projectObjects.length; i++) {
    const projectDiv = document.createElement("div");
    projectDiv.textContent = projectObjects[i].projectTitle;
    projectDiv.setAttribute("data-project", `${i}`);
    projectsHolder.appendChild(projectDiv);
  }
  projectObjects.forEach((projectObj, index) => { });
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
  projectElms.forEach((projElm) =>
    projElm.addEventListener("click", renderProjectTasksOnClick)
  );

// renders project tasks when user clicks on project on the sidebar
const renderProjectTasksOnClick = (event) => {
  // Holds the task objects for the current project
  // So they can be used to load the task status for the projects
  const projTasksArr = [];
  const taskContainer = document.querySelector(".taskContainer");
  taskContainer.innerHTML = "";
  renderProjectHeader();
  const tasksHolder = document.createElement("div");
  tasksHolder.classList.add("tasks");
  taskContainer.appendChild(tasksHolder);
  const viewType = "project";

  // tasks.innerHTML = "";
  const projects = getAllProjects();
  for (let i = 0; i < projects.length; i++) {
    if (i === +event.target.dataset.project) {
      // Used for creating tasks
      const project = projects[i];
      const currentProj = setCurrentProject(project);
      console.log(getCurrentProject());
      const projTasks = projects[i].tasksArr;
      // return if there is no proj tasks. Probably means you will want to query task header
      // and change it's title to match current proj that way.
      if (projTasks) {
        for (let j = 0; j < projTasks.length; j++) {
          const taskObj = projTasks[j];
          projTasksArr.push(taskObj);
          createTaskElement(i, j, tasksHolder, taskObj, viewType);
        }
      }
    }
    loadTaskStatusForProjects(projTasksArr);
  }
  // listens for user click of task delete button

  createTaskBtn();
  createTaskBtnListener();
  deleteTaskListener();
  changeTaskStatusListener();
  editTaskListener();
};

// renders project tasks for cases when user doesn't first click on the project
// e.g., after a user deletes or edits a task
const renderProjectTasks = (i) => {
  const tasksHolder = document.querySelector(".tasks");
  tasksHolder.innerHTML = "";
  const currentProjIndex = getCurrentProjectIndex();

  /*   const projTasks = getProjectTasks(currentProj); */
  // return if there is no proj tasks. Probably means you will want to query task header
  // and change it's title to match current proj that way.
  /* if (projTasks) {
    projTasks.forEach((taskObj, index) => {
      createTaskElement(taskObj, index, tasksHolder);
    });
  } */

  const projects = getAllProjects();
  const currentProjTasks = projects[currentProjIndex].tasksArr;

  currentProjTasks.forEach((task, taskIndex) => {
    createTaskElement(currentProjIndex, taskIndex, tasksHolder, task);
  });
  deleteTaskListener();
  editTaskListener();
};

/* allTasks.forEach((task, index) => {
    const taskDateString = task.dueDate; // "2022-03-15"
    const taskDateObject = parseISO(taskDateString);
    const taskDateWeekIndex = getWeek(taskDateObject, { weekStartsOn: 1 });
    console.log(`This should say 11!: ${taskDateWeekIndex}`);
    if (currentWeekIndex === taskDateWeekIndex) {
      createTaskElement(task, index, tasks);
    }
  }); */

const deleteTaskListener = () => {
  const deleteButtons = document.querySelectorAll(".deleteButton");
  deleteButtons.forEach((deleteBtn) =>
    deleteBtn.addEventListener("click", deleteTask)
  );
};

const deleteTask = (event) => {
  const targetDeleteTaskIndex = +event.target.dataset.index;
  const targetDeleteProjectIndex = +event.target.dataset.project;
  const taskElms = document.querySelectorAll(".tasks > div");
  const viewType = event.target.dataset.view;
  const targetTaskUUID = event.target.dataset.uuid;

  const projectObjects = getAllProjects();
  const projectTaskObjects = projectObjects[targetDeleteProjectIndex].tasksArr;
  const targetTaskIndex = projectTaskObjects.findIndex(
    (taskObj) => taskObj.UUID === targetTaskUUID
  );

  removeTaskFromLocalStorage(targetDeleteProjectIndex, targetTaskIndex);
  projectTaskObjects.splice(targetTaskIndex, 1);

  taskElms.forEach((task) => {
    // eslint-disable-next-line no-unused-expressions
    task.dataset.uuid === targetTaskUUID ? task.remove() : null;
  });
};

// Sets event listener on each edit button for all the tasks
// in the currently selected project
const editTaskListener = () => {
  const editButtons = document.querySelectorAll(".editButton");
  editButtons.forEach((editBtn) => editBtn.addEventListener("click", editTask));
};

//
const editTask = (event) => {
  const targetEditTaskID = event.target.dataset.uuid;
  const targetEditProjIndex = +event.target.dataset.project;
  const currentProj = getCurrentProject();
  const formModalBg = document.querySelector(".form-modal-background");
  const formContainer = document.querySelector(".form-container");
  const viewType = event.target.dataset.view;

  const projectObjects = getAllProjects();
  const projectTaskObjects = projectObjects[targetEditProjIndex].tasksArr;
  const targetTaskObject = projectTaskObjects.find(
    (taskObj) => taskObj.UUID === targetEditTaskID
  );

  formModalBg.style.display = "flex";
  formContainer.style.display = "grid";
  loadTaskValues(targetTaskObject);

  const wrappedModifySubmit = (event) =>
    modifyTaskSubmit(
      event,
      projectTaskObjects,
      targetTaskObject,
      targetEditProjIndex,
      targetEditTaskID
    );

  modifyTaskSubmitListen(wrappedModifySubmit);
  closeTaskForm(wrappedModifySubmit);
};

// Adds submit event listener to the form for editing a task
const modifyTaskSubmitListen = (wrappedModifySubmit) => {
  const taskForm = document.getElementById("taskForm");
  taskForm.addEventListener("submit", wrappedModifySubmit, { once: true });
};

// Submits the the form used to edit the selected task
const modifyTaskSubmit = (
  event,
  projectTaskObjects,
  targetTaskObject,
  targetEditProjIndex,
  targetEditTaskID
) => {
  event.preventDefault();
  const taskForm = document.getElementById("taskForm");
  const formModalBg = document.querySelector(".form-modal-background");
  const formContainer = document.querySelector(".form-container");

  modifyTaskInLocalStorage(
    targetEditProjIndex,
    targetEditTaskID,
    getNewTaskValues()
  );

  modifyTask(targetTaskObject, getNewTaskValues());
  modifyTaskElement(getNewTaskValues(), targetEditProjIndex, targetTaskObject);
  /* renderProjectTasks(i); */
  taskForm.reset();
  formModalBg.style.display = "none";
  formContainer.style.display = "none";
};

// Changes the title and date text content of the task element that was edited
const modifyTaskElement = (
  getNewTaskValues,
  targetEditProjIndex,
  targetTaskObject
) => {
  const newTaskValues = getNewTaskValues;

  const taskEls = document.querySelectorAll(".tasks > div");
  const taskElsArr = Array.from(taskEls);
  const targetTaskEl = taskElsArr.find(
    (taskEl) => taskEl.dataset.uuid === targetTaskObject.UUID
  );

  const titleEl = targetTaskEl.childNodes[0].childNodes[1];
  const titleParaEl = titleEl.childNodes[0];
  titleParaEl.textContent = newTaskValues[0];

  const dateEl = targetTaskEl.childNodes[1].childNodes[0];
  dateEl.textContent = newTaskValues[2];
};

// Puts event listener on each checkbox
const changeTaskStatusListener = () => {
  const checkBoxElements = document.querySelectorAll(".toggleTaskStatus");
  checkBoxElements.forEach((checkBox) =>
    checkBox.addEventListener("change", changeTaskStatus)
  );
};

// Changes the completion status of a task when user clicks on checkbox
const changeTaskStatus = (event) => {
  const targetCheckboxTaskID = event.target.dataset.uuid;
  const targetCheckBoxProjectIndex = +event.target.dataset.project;
  const projects = getAllProjects();
  const currentProjObj = projects[targetCheckBoxProjectIndex];

  /*  const currentProj = getCurrentProject(); */
  const projTasks = currentProjObj.tasksArr;
  const targetProjectObj = projTasks.find(
    (task) => task.UUID === targetCheckboxTaskID
  );

  updateTaskStatusInLocalStorage(
    targetCheckBoxProjectIndex,
    targetCheckboxTaskID
  );
  toggleTaskCompletion(
    currentProjObj,
    targetProjectObj,
    targetCheckBoxProjectIndex
  );
};

// For each task in the current project, load completion status,
// check the checkbox if complete, and apply grey styling to text
// in the task element (for project views only)
const loadTaskStatusForProjects = (Arr) => {
  const checkBoxElements = document.querySelectorAll(".toggleTaskStatus");
  const tasks = document.querySelectorAll(".tasks > div");
  // This is the project index from renderProjectTasksOnClick
  // const projIndex = i;
  const currentProjTasks = Arr;

  currentProjTasks.forEach((task, index) => {
    if (task.isComplete) {
      checkBoxElements[index].checked = task.isComplete;
      tasks[index].classList.add("complete");
    }
  });
};
// Need to go through each task element and compare the
// project dataset index

// loads task values into form when user hits the edit button
const loadTaskValues = (currentTask) => {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const dueDate = document.getElementById("dueDate");
  const priority = document.getElementById("priority");
  const notes = document.getElementById("notes");

  const taskValues = Object.values(currentTask);
  const priorityValue = taskValues[4];
  const dateString = taskValues[3];
  const dateObject = parseISO(dateString);
  // You only need this version for the tasks you manually created
  // inside index.js
  // const parsedDate = parse(dateValue, 'MM/dd/yyyy', new Date());
  const formattedDate = format(dateObject, "yyyy-MM-dd");

  title.value = taskValues[1];
  description.value = taskValues[2];
  dueDate.value = formattedDate;
  setPriorityRadioButton(priorityValue);
  notes.value = taskValues[5];
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

// Retrieves all of the new task values the user has entered before
// submitting, and pushes them into an array. Makes it easier to get
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
  loadTaskStatusForProjects,
  changeTaskStatusListener,
};
