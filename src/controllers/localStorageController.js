import {
  getProjArr,
  getCurrentProject,
  addTaskToProjectObj,
  setProjArr,
} from "../projectManager/projectManager";

import {
  changeTaskTitle,
  changeTaskDescription,
  changeTaskDueDate,
  changeTaskPriority,
  changeTaskNotes,
} from "../toDoManager/toDoManager";

const loadProjectsFromLocalStorage = () => {
  const localStorageProjArr = JSON.parse(localStorage.getItem("projectsArr"));
  /*   console.log(localStorageProjArr); */
  setProjArr(localStorageProjArr);
};

// Adds project array to local storage
const addProjArrLocalStorage = () => {
  const localStorageProjArr = JSON.parse(localStorage.getItem("projectsArr"));
  if (!localStorageProjArr) {
    const projArr = getProjArr();
    localStorage.setItem("projectsArr", JSON.stringify(projArr));
  }
};

const addProjLocalStorageArr = (project) => {
  const localStorageProjArr = JSON.parse(localStorage.getItem("projectsArr"));
  localStorageProjArr.push(project);
  localStorage.setItem("projectsArr", JSON.stringify(localStorageProjArr));
  /*  console.log(JSON.parse(localStorage.getItem("projectsArr"))); */
};

const editProjTitleLocalStorage = (targetEditProjIndex, newProjTitle) => {
  const localStorageProjArr = JSON.parse(localStorage.getItem("projectsArr"));
  const targetProj = localStorageProjArr[targetEditProjIndex];
  targetProj.projectTitle = newProjTitle;
  localStorage.setItem("projectsArr", JSON.stringify(localStorageProjArr));
  /* console.log(JSON.parse(localStorage.getItem("projectsArr"))); */
};

const removeProjLocalStorageArr = (targetProjIndex) => {
  const localStorageProjArr = JSON.parse(localStorage.getItem("projectsArr"));
  const removedProj = localStorageProjArr.splice(targetProjIndex, 1);
  /* console.log(removedProj); */
  localStorage.setItem("projectsArr", JSON.stringify(localStorageProjArr));
};

const addTaskToLocalStorage = (currentProj, task) => {
  const localStorageProjArr = JSON.parse(localStorage.getItem("projectsArr"));
  const targetlocalStorageProj = localStorageProjArr.find(
    (proj) => proj.projectTitle === currentProj.projectTitle
  );

  addTaskToProjectObj(targetlocalStorageProj, task);
  localStorage.setItem("projectsArr", JSON.stringify(localStorageProjArr));
  /*   console.log(JSON.parse(localStorage.getItem("projectsArr"))); */
};

const removeTaskFromLocalStorage = (
  targetDeleteProjectIndex,
  targetTaskIndex
) => {
  const localStorageProjArr = JSON.parse(localStorage.getItem("projectsArr"));
  const projTaskObjects =
    localStorageProjArr[targetDeleteProjectIndex].tasksArr;
  projTaskObjects.splice(targetTaskIndex, 1);
  localStorage.setItem("projectsArr", JSON.stringify(localStorageProjArr));
  /* console.log(
    "Shows new proj array after deleted task",
    JSON.parse(localStorage.getItem("projectsArr"))
  ); */
};

const modifyTaskInLocalStorage = (
  targetEditProjIndex,
  targetEditTaskID,
  getNewTaskValues
) => {
  const localStorageProjArr = JSON.parse(localStorage.getItem("projectsArr"));
  const projTaskObjects = localStorageProjArr[targetEditProjIndex].tasksArr;
  const targetTaskObject = projTaskObjects.find(
    (taskObj) => taskObj.UUID === targetEditTaskID
  );

  const newTaskValues = getNewTaskValues;
  changeTaskTitle(targetTaskObject, newTaskValues[0]);
  changeTaskDescription(targetTaskObject, newTaskValues[1]);
  changeTaskDueDate(targetTaskObject, newTaskValues[2]);
  changeTaskPriority(targetTaskObject, newTaskValues[3]);
  changeTaskNotes(targetTaskObject, newTaskValues[4]);

  localStorage.setItem("projectsArr", JSON.stringify(localStorageProjArr));
  /*  console.log(
     "Shows new proj array after edited task",
     JSON.parse(localStorage.getItem("projectsArr"))
   ); */
};

const updateTaskStatusInLocalStorage = (
  targetCheckBoxProjectIndex,
  targetCheckboxTaskID
) => {
  const localStorageProjArr = JSON.parse(localStorage.getItem("projectsArr"));
  const currentProjObj = localStorageProjArr[targetCheckBoxProjectIndex];

  /*  const currentProj = getCurrentProject(); */
  const projTasks = currentProjObj.tasksArr;
  const targetProjectObj = projTasks.find(
    (task) => task.UUID === targetCheckboxTaskID
  );

  targetProjectObj.isComplete
    ? (targetProjectObj.isComplete = false)
    : (targetProjectObj.isComplete = true);

  localStorage.setItem("projectsArr", JSON.stringify(localStorageProjArr));
  /* console.log(
    "Shows new proj array after updating task status",
    JSON.parse(localStorage.getItem("projectsArr"))
  ); */
};

export {
  addProjArrLocalStorage,
  addProjLocalStorageArr,
  addTaskToLocalStorage,
  removeTaskFromLocalStorage,
  modifyTaskInLocalStorage,
  updateTaskStatusInLocalStorage,
  loadProjectsFromLocalStorage,
  removeProjLocalStorageArr,
  editProjTitleLocalStorage,
};
