import {
  createProject,
  addProjectToProjectsArray,
} from "./projectManager/projectManager";

import { renderProjectHeader } from "./DOMElements/createTaskHeader";
import { getAllTasks } from "./getAllTasks";

const renderDefaultViewListener = () => {
  const defaultTab = document.querySelector(".defaultTab");
  defaultTab.addEventListener("click", renderDefaultTasksOnClick);
}

const renderDefaultTasksOnClick = (event) => {
  const taskContainer = document.querySelector(".taskContainer");
  taskContainer.innerHTML = "";
  const tasksHolder = document.createElement("div");
  tasksHolder.classList.add("tasks");
  renderProjectHeader();
  taskContainer.appendChild(tasksHolder);
  // Holds the task objects for the weekly tasks
  // So they can be used to load the task status for the weekly tasks
  const defaultViewTasksArr = [];
  // This will be deleted later
  const viewType = "default";

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

}

const createDefaultProject = () => {
  const defaultProject = createProject("DefaultProj", []);
  addProjectToProjectsArray(defaultProject);
};


