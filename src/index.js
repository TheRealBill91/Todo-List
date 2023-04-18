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
    "title",
    "description",
    "2023-03-15",
    "low",
    "notes",
    true
  );
  const sampleTaskTwo = createToDoTask(
    uuidv4(),
    "taskTwo",
    "descriptionTwo",
    "2023-03-21",
    "medium",
    "notes",
    false
  );
  const sampleTaskThree = createToDoTask(
    uuidv4(),
    "taskThree",
    "descriptionThree",
    "2023-03-24",
    "medium",
    "notes",
    true
  );

  const taskForProjTwo = createToDoTask(
    uuidv4(),
    "ProjTwoTask",
    "descriptionTwo",
    "2023-03-13",
    "medium",
    "notes",
    true
  );

  return { sampleTask, sampleTaskTwo, sampleTaskThree, taskForProjTwo };
};

const createSampleProjects = () => {
  const sampleProject = createProject("testProjectObject", []);
  const projectTwo = createProject("ProjTwoTest", []);
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

