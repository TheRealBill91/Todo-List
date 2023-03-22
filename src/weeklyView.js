import { createTaskElement } from "./DOMElements/createTaskElement";
import { renderProjectHeader } from "./DOMElements/createTaskHeader";
import { getAllProjects } from "./projectManager/projectManager";
import { getWeek, parseISO } from "date-fns";

const renderWeekTasksListener = () => {
    const weekTab = document.querySelector(".weekTab");
    weekTab.addEventListener("click", renderWeekTasks);
};

const renderWeekTasks = () => {
    const taskContainer = document.querySelector(".taskContainer");
    taskContainer.innerHTML = "";
    const tasksHolder = document.createElement("div");
    tasksHolder.classList.add("tasks");
    renderProjectHeader();
    taskContainer.appendChild(tasksHolder);

    const currentWeekIndex = getWeek(new Date(), { weekStartsOn: 1 });
    const projects = getAllProjects();

    for (let i = 0; i < projects.length; i++) {
        const projectTasks = projects[i].tasksArr;
        for (let j = 0; j < projectTasks.length; j++) {
            const task = projectTasks[j];
            const taskDateString = task.dueDate;
            const taskDateObject = parseISO(taskDateString);
            const taskDateWeekIndex = getWeek(taskDateObject, { weekStartsOn: 1 });
            if (currentWeekIndex === taskDateWeekIndex) {
                createTaskElement(i, j, tasksHolder, task);
            }
        }
    }
};


export { renderWeekTasksListener };
