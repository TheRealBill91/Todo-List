import { createToDoTask } from "./toDoManager/toDoManager";

import { renderWeekTasksListener } from "./views/weeklyView";

import {
  addTaskToProjectObj,
  createProject,
  addProjectToProjectsArray,
} from "./projectManager/projectManager";

import {
  renderProjectsToDOM,
  removeProjectFromDOM,
  projInputFormListener,
  closeProjInputEventListener,
  showProjInputEventListener,
  renderProjTasksListener,
  editProjectTitleOnDOMListener,
  toggleMobileMenu,
} from "./controllers/displayController";

import { renderDailyTasksListener } from "./views/dailyView";

import "./css/normalize.css";
import "./css/styles.css";

import { v4 as uuidv4 } from "uuid";
import {
  addProjArrLocalStorage,
  loadProjectsFromLocalStorage,
} from "./controllers/localStorageController";

import {
  createDefaultProject,
  renderDefaultViewListener,
  setIndexForDefaultTab,
  renderDefaultTasks,
} from "./views/defaultView";

const createSampleTasks = () => {
  const sampleTask = createToDoTask(
    uuidv4(),
    "Wash the car",
    "Go to drive through car wash",
    "2023-03-15",
    "medium",
    "",
    true
  );
  const sampleTaskTwo = createToDoTask(
    uuidv4(),
    "Do laundry",
    "Clean towels and sheets",
    "2023-03-21",
    "medium",
    "",
    false
  );
  const sampleTaskThree = createToDoTask(
    uuidv4(),
    "Load the dishwasher",
    "Put dirty dishes in the dishwasher",
    "2023-03-24",
    "high",
    "",
    true
  );

  const taskForProjTwo = createToDoTask(
    uuidv4(),
    "Learn testing",
    "Learn how to write tests for your code",
    "2023-03-13",
    "medium",
    "notes",
    false
  );

  return { sampleTask, sampleTaskTwo, sampleTaskThree, taskForProjTwo };
};

const createSampleProjects = () => {
  const sampleProject = createProject("Chores", []);
  const projectTwo = createProject("Web Development", []);
  addTaskToProjectObj(projectTwo, createSampleTasks().taskForProjTwo);

  addTaskToProjectObj(sampleProject, createSampleTasks().sampleTask);
  addTaskToProjectObj(sampleProject, createSampleTasks().sampleTaskTwo);
  addTaskToProjectObj(sampleProject, createSampleTasks().sampleTaskThree);
  createDefaultProject();
  addProjectToProjectsArray(sampleProject);
  addProjectToProjectsArray(projectTwo);
};

const initialSetup = () => {
  createSampleProjects();

  showProjInputEventListener();
  // closeProjInputEventListener();
  addProjArrLocalStorage();
  loadProjectsFromLocalStorage();
  renderProjectsToDOM();
  removeProjectFromDOM();
  renderProjTasksListener();
  setIndexForDefaultTab();

  // projInputFormListener();
  renderWeekTasksListener();
  editProjectTitleOnDOMListener();
  renderDailyTasksListener();
  renderDefaultViewListener();
  renderDefaultTasks();

  toggleMobileMenu();
};

initialSetup();

/* console.table(getAllProjects()); */

