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
  getAllTasks,
  toggleDueDateStatus,
} from "../toDoManager/toDoManager";

import { setAttributes } from "../setAttributes";
import { createTaskElement } from "../DOMElements/createTaskElement";
import { renderProjectHeader } from "../DOMElements/createTaskHeader";
import {
  addProjLocalStorageArr,
  removeTaskFromLocalStorage,
  modifyTaskInLocalStorage,
  updateTaskStatusInLocalStorage,
  removeProjLocalStorageArr,
  editProjTitleLocalStorage,
} from "./localStorageController";
import { createProjInputFormElm } from "../DOMElements/createProjectFormElm";

const showProjInputBtn = document.querySelector(".showProjInputBtn");

const projInputFormListener = () => {
  const projectInputForm = document.querySelector(".projectInputForm");
  projectInputForm.addEventListener("submit", addProjectToDOM);
};

const addProjectToDOM = (event) => {
  event.preventDefault();
  const projectTitleInput = document.querySelector(".projTitleInput");
  const projectInputForm = document.querySelector(".projectInputForm");
  const projectTitleInputValue = projectTitleInput.value;
  const project = createProject(projectTitleInputValue, []);
  addProjectToProjectsArray(project);
  addProjLocalStorageArr(project);
  renderProjectsToDOM();
  projectInputForm.reset();
};

const renderProjectsToDOM = () => {
  // element that holds the project objects
  const projectsHolder = document.querySelector(".projects");
  projectsHolder.innerHTML = "";
  const projectObjects = getAllProjects();
  for (let i = 1; i < projectObjects.length; i++) {
    const projectDiv = document.createElement("div");
    projectDiv.setAttribute("data-project", `${i}`);
    const projectTitle = document.createElement("button");
    projectTitle.textContent = projectObjects[i].projectTitle;
    // const projEditTitleBtn = document.createElement("button");
    // projEditTitleBtn.textContent = "edit";
    const projectControls = document.createElement("div");
    projectControls.setAttribute("data-project", `${i}`);
    projectControls.classList.add("projectControls");
    projectControls.innerHTML = `<button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"></path></svg></button>
    <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path></svg></button>`;
    projectDiv.append(projectTitle, projectControls);
    projectsHolder.appendChild(projectDiv);
  }
  editProjectTitleOnDOMListener();
};

const showProjInputEventListener = () =>
  showProjInputBtn.addEventListener("click", showProjInput);

const showProjInput = () => {
  const projectsHolder = document.querySelector(".projects");

  projectsHolder.innerHTML = "";
  projectsHolder.style.backgroundColor = "rgb(230, 230, 230)";
  projectsHolder.style.boxShadow = "none";
  projectsHolder.appendChild(createProjInputFormElm());
  const projectInputForm = document.querySelector(".projectInputForm");
  const closeProjInputBtn = document.querySelector(".closeProjectInputBtn");
  projectInputForm.style.display = "flex";
  closeProjInputBtn.style.display = "block";
  projInputFormListener();
  closeProjInputEventListener();
};

const closeProjInputEventListener = () => {
  const closeProjInputBtn = document.querySelector(".closeProjectInputBtn");
  closeProjInputBtn.addEventListener("click", closeProjectInput);
};

const closeProjectInput = () => {
  const projectsHolder = document.querySelector(".projects");
  projectsHolder.innerHTML = "";
  projectsHolder.style = "";

  renderProjectsToDOM();
};

const renderProjTasksListener = () => {
  const projectElms = document.querySelectorAll(".projects > div > button");

  projectElms.forEach((projElm) =>
    projElm.addEventListener("click", renderProjectTasksOnClick)
  );
};

// renders project tasks when user clicks on project on the sidebar
const renderProjectTasksOnClick = (event) => {
  // Holds the task objects for the current project
  // So they can be used to load the task status for the projects
  const projTasksArr = [];
  const taskContainer = document.querySelector(".taskContainer");
  taskContainer.innerHTML = "";

  // const tasksHolder = document.createElement("div");
  // tasksHolder.classList.add("tasks");
  // taskContainer.appendChild(tasksHolder);
  const viewType = "project";

  // tasks.innerHTML = "";
  const projects = getAllProjects();
  for (let i = 0; i < projects.length; i++) {
    if (i === +event.target.parentElement.dataset.project) {
      // Used for creating tasks
      const project = projects[i];
      const currentProj = setCurrentProject(project);
      renderProjectHeader(project);
      const tasksHolder = document.querySelector(".tasks");
      /* console.log(getCurrentProject()); */
      const projTasks = projects[i].tasksArr;
      // return if there is no proj tasks. Probably means you will want to query task header
      // and change it's title to match current proj that way.
      if (projTasks) {
        for (let j = 0; j < projTasks.length; j++) {
          const taskObj = projTasks[j];
          projTasksArr.push(taskObj);
          const taskElement = createTaskElement(
            i,
            j,
            tasksHolder,
            taskObj,
            viewType
          );
          toggleDueDateStatus(taskObj, taskElement);
        }
      }
    }
  }
  // listens for user click of task delete button

  createTaskBtn();
  createTaskBtnListener();
  loadTaskPriorityColor(projTasksArr);
  loadTaskStatusForProjects(projTasksArr);
  deleteTaskListener();
  changeTaskStatusListener();
  editTaskListener();
};

const removeProjectFromDOM = () => {
  const deleteButtons = document.querySelectorAll(
    ".projectControls > button:last-of-type"
  );
  const projObjects = getAllProjects();
  const projElms = document.querySelectorAll(".projects > div");
  const projElmsArr = Array.from(projElms);

  deleteButtons.forEach((deleteBtn) =>
    deleteBtn.addEventListener("click", (event) => {
      const targetProjIndex = +event.target.parentElement.dataset.project;
      projObjects.splice(targetProjIndex, 1);
      removeProjLocalStorageArr(targetProjIndex);
      const targetProjElmIndex = projElmsArr.findIndex((projElm) => {
        return projElm.dataset.project === targetProjIndex.toString();
      });
      projElms[targetProjElmIndex].remove();
    })
  );
};

const editProjectTitleOnDOMListener = () => {
  const editButtons = document.querySelectorAll(
    ".projectControls>button:first-of-type"
  );

  editButtons.forEach((editBtn) => {
    editBtn.addEventListener("click", editProjectTitleOnDOM, { once: true });
  });
};

const editProjectTitleOnDOM = (event) => {
  const targetEditProjIndex = +event.target.parentElement.dataset.project;
  const projObjects = getAllProjects();
  const targetProjObject = projObjects[targetEditProjIndex];
  // DOM elements that hold the project title btn, edit, & delete buttons
  const projectElmHolders = document.querySelectorAll(".projects > div");
  // Buttons that show project titles and allows user to render project tasks
  // when clicked
  const projectTitleButtons = document.querySelectorAll(
    ".projects > div > button"
  );

  const projTitleBtnsArr = Array.from(projectTitleButtons);
  const targetProjTitleBtnIndex = projTitleBtnsArr.findIndex((projTitleBtn) => {
    return (
      projTitleBtn.parentElement.dataset.project ===
      targetEditProjIndex.toString()
    );
  });
  const targetProjTitleBtn = projectTitleButtons[targetProjTitleBtnIndex];
  targetProjTitleBtn.style.display = "none";

  const targetProjHolderElm = projectElmHolders[targetProjTitleBtnIndex];
  targetProjHolderElm.innerHTML = "";
  const changeTitleInputForm = document.createElement("form");
  setAttributes(changeTitleInputForm, {
    class: "editProjTitleForm",
    "data-project": `${targetEditProjIndex}`,
  });
  changeTitleInputForm.classList.add("editProjTitleForm");
  changeTitleInputForm.innerHTML = `<input 
    class="projTitleEdit" 
    type="text" 
    value=${targetProjObject.projectTitle}
    name="projectTitleEdit" 
    id="projectTitleEdit" 
    required=""
    ><button>Submit</button>
     `;

  targetProjHolderElm.appendChild(changeTitleInputForm);

  /*  targetProjHolderElm.insertBefore(changeTitleInputForm, targetProjControlsDiv); */
  /* targetProjControlsDiv.remove(); */

  const wrappedModifyProjectSubmit = (event) => {
    editProjTitleSubmit(
      event,
      changeTitleInputForm,
      targetProjObject,
      targetEditProjIndex,
      targetProjHolderElm
    );
  };

  editProjTitleSubmitListener(wrappedModifyProjectSubmit);
};

const editProjTitleSubmitListener = (wrappedModifyProjectSubmit) => {
  const editTitleForm = document.querySelector(".projects > div > form");
  editTitleForm.addEventListener("submit", wrappedModifyProjectSubmit, {
    once: true,
  });
};

const editProjTitleSubmit = (
  event,
  changeTitleInputForm,
  targetProjObject,
  targetEditProjIndex,
  targetProjHolderElm
) => {
  event.preventDefault();
  const newProjTitle = changeTitleInputForm.childNodes[0].value;
  targetProjObject.projectTitle = newProjTitle;
  editProjTitleLocalStorage(targetEditProjIndex, newProjTitle);

  targetProjHolderElm.textContent = "";
  targetProjHolderElm.dataset.project = `${targetEditProjIndex}`;
  targetProjHolderElm.innerHTML = `
      <button>${newProjTitle}</button>
      <div data-project="${targetEditProjIndex}" class="projectControls">
        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"></path></svg></button>
        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path></svg></button>
      </div>
      `;

  editProjectTitleOnDOMListener();
  removeProjectFromDOM();
  renderProjTasksListener();
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
  const targetDeleteProjectIndex = +event.target.dataset.project;
  const taskElms = document.querySelectorAll(".tasks > div");
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
  const formModalBg = document.querySelector(".form-modal-background");
  const formContainer = document.querySelector(".form-container");

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
  dateEl.textContent = format(parseISO(newTaskValues[2]), "LLL do");
  toggleDueDateStatus(targetTaskObject, targetTaskEl);
  changeTaskPriorityColor(targetTaskEl, newTaskValues);
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

// Loads task priority colors and displays it with
// a border color around the task
const loadTaskPriorityColor = (Arr) => {
  const checkBoxElements = document.querySelectorAll(".toggleTaskStatus");
  const tasks = document.querySelectorAll(".tasks > div");
  // This is the project index from renderProjectTasksOnClick
  // const projIndex = i;
  const currentProjTasks = Arr;

  currentProjTasks.forEach((task, index) => {
    const taskPriority =
      task.priority === "low"
        ? (tasks[index].style.borderRight = "8px solid #e4e423")
        : task.priority === "medium"
        ? (tasks[index].style.borderRight = "8px solid #dd9a20")
        : task.priority === "high"
        ? (tasks[index].style.borderRight = "8px solid #cf2020")
        : null;
  });
};

// Changes the task priorty color around task el
// after user edits a task using task form
const changeTaskPriorityColor = (targetTaskEl, newTaskValues) => {
  if (newTaskValues[3] === "low") {
    targetTaskEl.style.borderRight = "8px solid #e4e423";
  } else if (newTaskValues[3] === "medium") {
    targetTaskEl.style.borderRight = "8px solid #dd9a20";
  } else if (newTaskValues[3] === "high") {
    targetTaskEl.style.borderRight = "8px solid #cf2020";
  }
};

// Will set the task priority border color on
// a newly created task elm
const setTaskPriorityColor = (taskElm, task) => {
  if (task.priority === "low") {
    taskElm.style.borderRight = "8px solid #e4e423";
  } else if (task.priority === "medium") {
    taskElm.style.borderRight = "8px solid #dd9a20";
  } else if (task.priority === "high") {
    taskElm.style.borderRight = "8px solid #cf2020";
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

const toggleMobileMenu = () => {
  const menuButton = document.getElementById("mobileMenu");
  const aside = document.querySelector(".mobileAside");
  menuButton.addEventListener("click", (event) => {
    aside.classList.toggle("showMobileMenu");
    // aside.style.display = "block";
  });
};

// If user clicks home, today, or week buttons, and mobile
// media query is active, close mobile menu
const closeMobileMenuOnClick = () => {
  const aside = document.querySelector(".mobileAside");
  const mobileMQ = window.matchMedia("(max-device-width: 812px)");
  if (mobileMQ) {
    aside.classList.toggle("showMobileMenu");
  }
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
  removeProjectFromDOM,
  editProjectTitleOnDOMListener,
  editProjTitleSubmitListener,
  toggleMobileMenu,
  loadTaskPriorityColor,
  setTaskPriorityColor,
  closeMobileMenuOnClick,
};
