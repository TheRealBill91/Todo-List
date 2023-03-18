/* import toDoManager from "../toDoManager/toDoManager"; */
import { setAttributes } from "../setAttributes";

const projects = [];

let currentProject;

const createProject = (projectTitle, tasksArr) => {
  return { projectTitle, tasksArr };
};

const addProjectToProjectsArray = (project) => {
  projects.push(project);
};

const getAllProjects = () => {
  return projects;
};

const addTaskToProjectObj = (project, task) => {
  project.tasksArr.push(task);
};

const deleteProjectTask = (projectIndex, taskIndex) => {
  projects.forEach((project, index) => {
    if (projectIndex === index) {
      const projectTasks = project.tasksArr;
      return projectTasks.splice(taskIndex, 1);
    }
  })
};

// Sets the current project to whatever project the user last clicked on
const setCurrentProject = (project) => {
  currentProject = project;
}

// Gets the current project the user last clicked on
const getCurrentProject = () => currentProject;

const getProjectTasks = (project) => {
  return project.tasksArr;

}





export {
  createProject,
  getAllProjects,
  addProjectToProjectsArray,
  addTaskToProjectObj,
  deleteProjectTask,
  setCurrentProject,
  getCurrentProject,
  getProjectTasks
};
