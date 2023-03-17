import { createProject, addProjectToProjectsArray, getAllProjects } from "../projectManager/projectManager"

const addProjectToDOM = () => {
    const addProjectButton = document.querySelector(".projSubmitBtn");
    const projectInputForm = document.querySelector(".projectInputForm");


    projectInputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const projectTitleInput = document.querySelector(".projTitleInput");
        const projectTitleInputValue = projectTitleInput.textContent;
        const project = createProject(projectTitleInputValue);
        addProjectToProjectsArray(project);
    })

}


const renderProjectsToDOM = () => {
    const projectObjects = getAllProjects();
    // element that holds the project objects
    const projectsHolder = document.querySelector(".projects");
    if (projectObjects) {
        projectObjects.forEach(projectObj => {
            const projectButton = document.createElement("button");
            projectButton.textContent = projectObj.projectTitle;
            projectsHolder.appendChild(projectButton);
        })
    }


}

export { addProjectToDOM, renderProjectsToDOM }