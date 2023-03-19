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
  createTaskTitle(taskElement, taskValues, index);
  createTaskControls(taskElement, taskValues, index);
};

// Creates the task title using the DOM
const createTaskTitle = (taskElement, taskValues, index) => {
  const taskTitle = document.createElement("div");
  setAttributes(taskTitle, { class: "taskTitle", "data-index": `${index}` });
  taskElement.appendChild(taskTitle);
  const taskTitlePara = document.createElement("p");
  taskTitlePara.textContent = `${taskValues[0]}`;
  taskTitle.appendChild(taskTitlePara);
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
