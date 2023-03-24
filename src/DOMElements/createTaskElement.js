import { setAttributes } from "../setAttributes";

// Creates task element using DOM
const createTaskElement = (...args) => {
  const [i, j, tasksHolder, taskObj, viewType] = args;
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
  tasksHolder.appendChild(taskElement);
  createLeftContainer(taskElement, i, j, taskValues, taskUUID);
  createTaskControls(taskElement, taskValues, i, j, viewType, taskUUID);
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
  editButton.textContent = "Edit";
  const infoButton = document.createElement("button");
  setAttributes(infoButton, {
    "data-UUID": taskUUID,
    "data-project": `${i}`,
    class: "infoButton",
  });
  infoButton.textContent = "Info";
  const deleteButton = document.createElement("button");
  setAttributes(deleteButton, {
    "data-UUID": taskUUID,
    "data-view": `${viewType}`,
    "data-project": `${i}`,
    class: "deleteButton",
  });
  deleteButton.setAttribute("data-index", `${j}`);
  deleteButton.textContent = "X";

  taskControls.append(datePara, editButton, infoButton, deleteButton);
};

export { createTaskElement };
