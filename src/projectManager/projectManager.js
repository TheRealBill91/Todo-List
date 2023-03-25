/* import toDoManager from "../toDoManager/toDoManager"; */
import { setAttributes } from "../setAttributes";

const projects = [];

let currentProject;
let currentProjectIndex;

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

// Sets the current project to whatever project the user last clicked on
const setCurrentProject = (project) => {
  currentProject = project;
};

const setCurrentProjectIndex = (i) => {
  currentProjectIndex = i;
};

const getCurrentProjectIndex = () => {
  return currentProjectIndex;
};

// Gets the current project the user last clicked on
const getCurrentProject = () => currentProject;

const getProjectTasks = (project) => {
  return project.tasksArr;
};

export {
  createProject,
  getAllProjects,
  addProjectToProjectsArray,
  setCurrentProjectIndex,
  addTaskToProjectObj,
  getCurrentProjectIndex,
  setCurrentProject,
  getCurrentProject,
  getProjectTasks,
};
