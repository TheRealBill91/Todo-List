import { createTaskElement } from "../DOMElements/createTaskElement";
import { renderProjectHeader } from "../DOMElements/createTaskHeader";
import {
  getAllProjects,
  createProject,
  addProjectToProjectsArray,
  getCurrentProject,
} from "../projectManager/projectManager";
import { getDate, parseISO , format } from "date-fns";
import {
  loadTaskStatusForProjects,
  changeTaskStatusListener,
  deleteTaskListener,
  editTaskListener,
  loadTaskPriorityColor,
  closeMobileMenuOnClick,
} from "../controllers/displayController";

import { toggleDueDateStatus } from "../toDoManager/toDoManager";



const renderDailyTasksListener = () => {
  const dayTab = document.querySelector(".dayTab");
  dayTab.addEventListener("click", renderDayTasksOnClick);
};

const renderDayTasksOnClick = () => {
  const taskContainer = document.querySelector(".taskContainer");
  taskContainer.innerHTML = "";

  // Holds the task objects for the weekly tasks
  // So they can be used to load the task status for the weekly tasks
  const dayViewTasksArr = [];
  // This will be deleted later
  const viewType = "day";

  const currentDate = format(new Date(), "LLL do");
  const projects = getAllProjects();
  renderProjectHeader(viewType);
  const tasksHolder = document.querySelector(".tasks");
  for (let i = 0; i < projects.length; i++) {
    const projectTasks = projects[i].tasksArr;
    for (let j = 0; j < projectTasks.length; j++) {
      const task = projectTasks[j];
      const taskDateString = task.dueDate;
      const taskDateObject = parseISO(taskDateString);
      const taskDate = format(taskDateObject, "LLL do");
      if (currentDate === taskDate) {
        const taskElement = createTaskElement(
          i,
          j,
          tasksHolder,
          task,
          viewType
        );
        toggleDueDateStatus(task, taskElement);
        dayViewTasksArr.push(task);
      }
    }
  }

  /* console.table(dayViewTasksArr); */
  loadTaskPriorityColor(dayViewTasksArr);
  loadTaskStatusForProjects(dayViewTasksArr);
  changeTaskStatusListener();
  deleteTaskListener();
  editTaskListener();
  closeMobileMenuOnClick();
};

export { renderDailyTasksListener };
