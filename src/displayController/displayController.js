import {
  createProject,
  addProjectToProjectsArray,
  getAllProjects,
  setCurrentProject,
  getProjectTasks
} from "../projectManager/projectManager";

import { setAttributes } from "../setAttributes";

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
  const project = createProject(projectTitleInputValue);
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

const renderProjTasksListener = () => projectObjects.forEach(projObject => projObject.addEventListener("click", renderProjectTasksOnClick))

// renders project tasks when user clicks on project sidebar
const renderProjectTasksOnClick = (event) => {
  /* console.log("Event listener is working!"); */
  const tasksHolder = document.querySelector(".tasks");
  tasksHolder.innerHTML = "";
  const projectObjects = getAllProjects();
  projectObjects.forEach((projObject, index) => {
    if (index === +event.target.dataset.index) {
      setCurrentProject(projObject);
      const projTasks = getProjectTasks(projObject);
      // return if there is no proj tasks. Probably means you will want to query task header
      // and change it's title to match current proj that way.
      if (projTasks) {
        projTasks.forEach((taskObj, index) => {
          createTaskElement(taskObj, index, tasksHolder);
        })

      }
    }
  })
  // listens for user click of task delete button
  deleteTaskListener();
}


// renders project tasks for cases when user doesn't first click on the project
// e.g., after a user deletes a task
const renderProjectTasks = () => {
  const tasksHolder = document.querySelector(".tasks");
  tasksHolder.innerHTML = "";
  const projectObjects = getAllProjects();
  projectObjects.forEach((projObject, index) => {
    const projTasks = getProjectTasks(projObject);
    // return if there is no proj tasks. Probably means you will want to query task header
    // and change it's title to match current proj that way.
    if (projTasks) {
      projTasks.forEach((taskObj, index) => {
        createTaskElement(taskObj, index, tasksHolder);
      })
    }
  })
  deleteTaskListener();
}


// Creates task element using DOM
const createTaskElement = (taskObj, index, tasksHolder) => {
  // Will likely use to set indexes on task controls
  const taskKeys = Object.keys(taskObj);
  const taskValues = Object.values(taskObj);
  const taskElement = document.createElement('div');
  setAttributes(taskElement, { "class": `task-${index}`, "data-index": `${index}` })
  tasksHolder.appendChild(taskElement);
  const taskTitle = document.createElement('div');
  setAttributes(taskTitle, { "class": "taskTitle", "data-index": `${index}` });
  taskElement.appendChild(taskTitle);
  const taskTitlePara = document.createElement("p");
  taskTitlePara.textContent = `${taskValues[0]}`;
  taskTitle.appendChild(taskTitlePara);

  const taskControls = document.createElement("div");
  taskControls.classList.add("taskControls");
  taskElement.appendChild(taskControls);
  const datePara = document.createElement("p");
  datePara.textContent = `${taskValues[2]}`;
  const editButton = document.createElement("button");
  editButton.textContent = "Edit"
  const infoButton = document.createElement("button");
  infoButton.textContent = "Info";
  const deleteButton = document.createElement("button");
  setAttributes(deleteButton, { "data-index": `${index}`, "class": "deleteButton" })
  deleteButton.setAttribute("data-index", `${index}`)
  deleteButton.textContent = "X";

  taskControls.append(datePara, editButton, infoButton, deleteButton);
}

const deleteTaskListener = () => {
  const deleteButtons = document.querySelectorAll(".deleteButton");
  deleteButtons.forEach(deleteBtn => deleteBtn.addEventListener("click", deleteTask));
}

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

  })
}

export {
  addProjectToDOM,
  renderProjectsToDOM,
  projInputFormListener,
  closeProjInputEventListener,
  showProjInputEventListener,
  renderProjTasksListener,
  renderProjectTasksOnClick,
  deleteTaskListener
};
