import { setAttributes } from "../setAttributes";

// Creates task element using DOM
const createTaskElement = (taskObj, index, tasks) => {
  // Will likely use to set indexes on task controls
  const taskKeys = Object.keys(taskObj);
  const taskValues = Object.values(taskObj);
  const taskElement = document.createElement("div");
  setAttributes(taskElement, {
    class: `task-${index}`,
    "data-index": `${index}`,
  });
  tasks.appendChild(taskElement);
  createLeftContainer(taskElement, index, taskValues)
  createTaskControls(taskElement, taskValues, index);

};

// Puts the task checkbox toggle and task title in the same div on the left side
const createLeftContainer = (taskElement, index, taskValues) => {
  const leftSideContainer = document.createElement("div");
  leftSideContainer.classList.add("leftSideContainer");
  taskElement.appendChild(leftSideContainer)
  leftSideContainer.append(createTaskCheckbox(leftSideContainer, index),
    createTaskTitle(taskValues, index, leftSideContainer));


}

// Creates checkbox for user to toggle task completion status
const createTaskCheckbox = (taskElement, index, leftSideContainer) => {
  // Will hold the checkbox input and span
  const checkBoxDiv = document.createElement("div");
  checkBoxDiv.classList.add("checkBoxDiv");
  /* leftSideContainer.appendChild(checkBoxDiv) */

  const taskCheckbox = document.createElement("input");
  setAttributes(taskCheckbox, { class: `toggleTaskStatus`, "data-index": `${index}`, "type": "checkbox" })
  checkBoxDiv.appendChild(taskCheckbox);

  const checkBoxBackground = document.createElement("span");
  checkBoxBackground.classList.add("checkBoxBackground");
  checkBoxDiv.appendChild(checkBoxBackground);
  return checkBoxDiv


}

// Creates the task title using the DOM
const createTaskTitle = (taskValues, index, leftSideContainer) => {
  const taskTitle = document.createElement("div");
  setAttributes(taskTitle, { class: "taskTitle", "data-index": `${index}` });
  const taskTitlePara = document.createElement("p");
  taskTitlePara.textContent = `${taskValues[0]}`;
  taskTitle.appendChild(taskTitlePara);
  return taskTitle
};

const createTaskControls = (taskElement, taskValues, index) => {
  const taskControls = document.createElement("div");
  taskControls.classList.add("taskControls");
  taskElement.appendChild(taskControls);
  const datePara = document.createElement("p");
  datePara.textContent = `${taskValues[2]}`;
  const editButton = document.createElement("button");
  setAttributes(editButton, { "data-index": `${index}`, class: "editButton" });
  editButton.textContent = "Edit";
  const infoButton = document.createElement("button");
  infoButton.textContent = "Info";
  const deleteButton = document.createElement("button");
  setAttributes(deleteButton, {
    "data-index": `${index}`,
    class: "deleteButton",
  });
  deleteButton.setAttribute("data-index", `${index}`);
  deleteButton.textContent = "X";

  taskControls.append(datePara, editButton, infoButton, deleteButton);
};

export { createTaskElement };
