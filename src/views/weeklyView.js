import { createTaskElement } from "../DOMElements/createTaskElement";
import { renderProjectHeader } from "../DOMElements/createTaskHeader";
import { getAllProjects } from "../projectManager/projectManager";
import { getWeek, parseISO } from "date-fns";
import {
  loadTaskStatusForProjects,
  changeTaskStatusListener,
  deleteTaskListener,
  editTaskListener,
  loadTaskPriorityColor,
  closeMobileMenuOnClick
} from "../controllers/displayController";

import { toggleDueDateStatus } from "../toDoManager/toDoManager";

const renderWeekTasksListener = () => {
  const weekTab = document.querySelector(".weekTab");
  weekTab.addEventListener("click", renderWeekTasksOnClick);
};

const renderWeekTasksOnClick = () => {
  const taskContainer = document.querySelector(".taskContainer");
  taskContainer.innerHTML = "";

  // Holds the task objects for the weekly tasks
  // So they can be used to load the task status for the weekly tasks
  const weekViewTasksArr = [];
  const viewType = "week";

  const currentWeekIndex = getWeek(new Date(), { weekStartsOn: 1 });
  const projects = getAllProjects();
  renderProjectHeader(viewType);
  const tasksHolder = document.querySelector(".tasks");
  for (let i = 0; i < projects.length; i++) {
    const projectTasks = projects[i].tasksArr;
    for (let j = 0; j < projectTasks.length; j++) {
      const task = projectTasks[j];
      const taskDateString = task.dueDate;
      const taskDateObject = parseISO(taskDateString);
      const taskDateWeekIndex = getWeek(taskDateObject, { weekStartsOn: 1 });
      if (currentWeekIndex === taskDateWeekIndex) {
        const taskElement = createTaskElement(
          i,
          j,
          tasksHolder,
          task,
          viewType
        );
        toggleDueDateStatus(task, taskElement);
        weekViewTasksArr.push(task);
      }
    }
  }

  // console.table(weekViewTasksArr);
  loadTaskPriorityColor(weekViewTasksArr);
  loadTaskStatusForProjects(weekViewTasksArr);
  changeTaskStatusListener();
  deleteTaskListener();
  editTaskListener();
  closeMobileMenuOnClick()
};

const getWeeklyTaskObjects = () => {
  const weeklyTaskObjectsArr = [];
  const projObjects = getAllProjects();
  const taskElms = document.querySelectorAll(".tasks > div");
  for (let i = 0; i < taskElms.length; i++) {
    const currentTaskElm = taskElms[i];
    const targetProjectIndex = +currentTaskElm.dataset.project;
    // make sure to change the name of the dataset to task
    const targetTaskIndex = +currentTaskElm.dataset.index;
    const projObject = projObjects[targetProjectIndex];
    const taskObj = projObject.tasksArr[targetTaskIndex];
    weeklyTaskObjectsArr.push(taskObj);
  }

  return weeklyTaskObjectsArr;
};

export { renderWeekTasksListener, getWeeklyTaskObjects };
