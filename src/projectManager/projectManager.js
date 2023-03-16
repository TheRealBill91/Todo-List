/* import toDoManager from "../toDoManager/toDoManager"; */

const projects = [];



const createProject = (projectTitle, tasksArr) => {

    return { projectTitle, tasksArr };
}

const addProjectToProjectsArray = (project) => {
    projects.push(project);
}

const getAllProjects = () => {
    return projects;
}

const addTaskToProjectObj = (project, task) => {
    project.tasksArr.push(task)
}

export { createProject, getAllProjects, addProjectToProjectsArray, addTaskToProjectObj }



/* export default projectManager */