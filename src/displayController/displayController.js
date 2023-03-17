import {
  createProject,
  addProjectToProjectsArray,
  getAllProjects,
} from "../projectManager/projectManager";

const addProjectButton = document.querySelector(".projSubmitBtn");
const showProjInputBtn = document.querySelector(".showProjInputBtn");
const projectInputForm = document.querySelector(".projectInputForm");
const projectTitleInput = document.querySelector(".projTitleInput");
const closeProjInputBtn = document.querySelector(".closeProjectInputBtn");

const addProjectToDOM = (event) => {
  event.preventDefault();
  const projectTitleInput = document.querySelector(".projTitleInput");
  const projectTitleInputValue = projectTitleInput.value;
  const project = createProject(projectTitleInputValue);
  addProjectToProjectsArray(project);
  renderProjectsToDOM();
  projectInputForm.reset();
};

const projInputFormListener = () =>
  projectInputForm.addEventListener("submit", addProjectToDOM);

const renderProjectsToDOM = () => {
  // element that holds the project objects
  const projectsHolder = document.querySelector(".projects");
  projectsHolder.innerHTML = "";
  const projectObjects = getAllProjects();
  projectObjects.forEach((projectObj) => {
    const projectDiv = document.createElement("div");
    projectDiv.textContent = projectObj.projectTitle;
    projectsHolder.appendChild(projectDiv);
  });
};

const showProjInputEventListener = () =>
  showProjInputBtn.addEventListener("click", showProjInput);

const showProjInput = () => {
  projectInputForm.style.display = "block";
  closeProjInputBtn.style.display = "block";
};

const closeProjInputEventListener = () =>
  closeProjInputBtn.addEventListener("click", closeProjectInput);

const closeProjectInput = () => {
  projectInputForm.style.display = "none";
  closeProjInputBtn.style.display = "none";
};

export {
  addProjectToDOM,
  renderProjectsToDOM,
  projInputFormListener,
  closeProjInputEventListener,
  showProjInputEventListener,
};
