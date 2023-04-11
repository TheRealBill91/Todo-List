import { setAttributes } from "../setAttributes";

// Creates task element using DOM
const createTaskElement = (...args) => {
  const [i, j, tasksHolder, taskObj, viewType, tasks] = args;
  // Will likely use to set indexes on task controls
  const taskValues = Object.values(taskObj);
  const taskElement = document.createElement("div");
  const taskUUID = taskObj.UUID;
  setAttributes(taskElement, {
    class: `task-${j}`,
    "data-UUID": taskUUID,
    "data-view": `${viewType}`,
    "data-project": `${i}`,
    "data-index": `${j}`,
  });

  // If there is atleast one task elm in the tasksHolder,
  // then insert the new task elm at the top of the taskHolder
  if (!tasks) {
    tasksHolder.appendChild(taskElement);
  } else {
    tasksHolder.insertBefore(taskElement, tasks[0]);
  }

  createLeftContainer(taskElement, i, j, taskValues, taskUUID);
  createTaskControls(taskElement, taskValues, i, j, viewType, taskUUID);
  return taskElement;
};

// Puts the task checkbox toggle and task title in the same div on the left side
const createLeftContainer = (taskElement, i, j, taskValues, taskUUID) => {
  const leftSideContainer = document.createElement("div");
  leftSideContainer.classList.add("leftSideContainer");
  taskElement.appendChild(leftSideContainer);
  leftSideContainer.append(
    createTaskCheckbox(taskElement, i, j, leftSideContainer, taskUUID),
    createTaskTitle(taskValues, i, j, leftSideContainer)
  );
};

// Creates checkbox for user to toggle task completion status
const createTaskCheckbox = (taskElement, i, j, leftSideContainer, taskUUID) => {
  // Will hold the checkbox input and span
  const checkBoxDiv = document.createElement("div");
  checkBoxDiv.classList.add("checkBoxDiv");
  /* leftSideContainer.appendChild(checkBoxDiv) */

  const taskCheckbox = document.createElement("input");
  setAttributes(taskCheckbox, {
    class: `toggleTaskStatus`,
    "data-uuid": taskUUID,
    "data-project": `${i}`,
    type: "checkbox",
  });
  checkBoxDiv.appendChild(taskCheckbox);

  const checkBoxBackground = document.createElement("span");
  checkBoxBackground.classList.add("checkBoxBackground");
  checkBoxDiv.appendChild(checkBoxBackground);
  return checkBoxDiv;
};

// Creates the task title using the DOM
const createTaskTitle = (taskValues, i, j, leftSideContainer) => {
  const taskTitle = document.createElement("div");
  setAttributes(taskTitle, {
    class: "taskTitle",
    "data-project": `${i}`,
    "data-task": `${j}`,
  });
  const taskTitlePara = document.createElement("p");
  taskTitlePara.textContent = `${taskValues[1]}`;
  taskTitle.appendChild(taskTitlePara);
  return taskTitle;
};

const createTaskControls = (
  taskElement,
  taskValues,
  i,
  j,
  viewType,
  taskUUID
) => {
  const taskControls = document.createElement("div");
  taskControls.classList.add("taskControls");
  taskElement.appendChild(taskControls);
  const datePara = document.createElement("p");
  datePara.textContent = `${taskValues[3]}`;
  const editButton = document.createElement("button");
  setAttributes(editButton, {
    "data-UUID": taskUUID,
    "data-view": `${viewType}`,
    "data-project": `${i}`,
    class: "editButton",
  });
  editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>`;
  /* const infoButton = document.createElement("button");
  setAttributes(infoButton, {
    "data-UUID": taskUUID,
    "data-project": `${i}`,
    class: "infoButton",
  });
  infoButton.textContent = "Info"; */
  const deleteButton = document.createElement("button");
  setAttributes(deleteButton, {
    "data-UUID": taskUUID,
    "data-view": `${viewType}`,
    "data-project": `${i}`,
    class: "deleteButton",
  });
  deleteButton.setAttribute("data-index", `${j}`);
  deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>`;

  taskControls.append(datePara, editButton /* , infoButton */, deleteButton);
};

export { createTaskElement };
