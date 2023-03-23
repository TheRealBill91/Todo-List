import { btnPrioritySelector } from "../DOMElements/createTask";
import { getAllProjects } from "../projectManager/projectManager";

// contains the different factory patterns and functions for
// creating and modifying to do tasks

const tasks = [];

const projects = getAllProjects();

// factory pattern for creating a toDoTask
const createToDoTask = (
  title,
  description,
  dueDate,
  priority,
  notes,
  isComplete
) => {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    isComplete,
  };
};

// adds to do list task to tasks array;
const addToDoTaskArr = (task) => {
  return tasks.push(task);
};

// deletes all tasks in task array
const deleteAllTasks = () => {
  tasks.forEach((task) => task.pop);
};

// deletes single task
const deleteTask = (index) => {
  let deletedTask;
  for (let i = 0; i < tasks.length; i++) {
    if (index === i) {
      deletedTask = tasks.splice(i, 1);
    }
  }

  return deletedTask;
};

const modifyTask = (projTasks, j, getNewTaskValues) => {
  const newTaskValues = getNewTaskValues;
  changeTaskTitle(projTasks, j, newTaskValues[0]);
  changeTaskDescription(projTasks, j, newTaskValues[1]);
  changeTaskDueDate(projTasks, j, newTaskValues[2]);
  changeTaskPriority(projTasks, j, newTaskValues[3]);
  changeTaskNotes(projTasks, j, newTaskValues[4]);
};

const changeTaskTitle = (projTasks, j, newTitle) => {
  const currentTask = projTasks[j];

  currentTask.title = newTitle;
};

const changeTaskDescription = (projTasks, j, newDescription) => {
  const currentTask = projTasks[j];
  currentTask.description = newDescription;
};

const changeTaskDueDate = (projTasks, j, newTaskDueDate) => {
  const currentTask = projTasks[j];
  currentTask.dueDate = newTaskDueDate;
};

const changeTaskPriority = (projTasks, j, newPriority) => {
  const currentTask = projTasks[j];
  currentTask.priority = btnPrioritySelector();
};

const changeTaskNotes = (projTasks, j, newTaskNotes) => {
  const currentTask = projTasks[j];
  currentTask.notes = newTaskNotes;
};

const toggleTaskCompletion = (
  currentProj,
  projTasks,
  targetCheckBoxProjectIndex,
  targetCheckboxTaskIndex,
  viewType
) => {
  const tasks = document.querySelectorAll(".tasks > div");

  // Check if there are tasks in the project
  if (projTasks) {
    // Loop through all the tasks in the project
    for (let i = 0; i < projTasks.length; i++) {
      // Check if the viewType is "week" and the current loop index matches the target project index
      if (viewType === "week" && i === targetCheckBoxProjectIndex) {
        // Get the task object from projTasks using targetCheckBoxProjectIndex
        const currentTask = projTasks[targetCheckBoxProjectIndex];

        // Toggle the completion status of the task
        if (currentTask.isComplete) {
          currentTask.isComplete = false;
          // Update the DOM element using targetCheckboxTaskIndex (weekly view order)
          tasks[targetCheckboxTaskIndex].classList.remove("complete");
        } else {
          currentTask.isComplete = true;
          // Update the DOM element using targetCheckboxTaskIndex (weekly view order)
          tasks[targetCheckboxTaskIndex].classList.add("complete");
        }
      }
      // Check if the viewType is "project" and the current loop index
      // matches the target task index
      else if (viewType === "project" && i === targetCheckboxTaskIndex) {
        // Get the task object from projTasks using targetCheckboxTaskIndex (same project tasks)
        const currentTask = projTasks[targetCheckBoxProjectIndex];

        // Toggle the completion status of the task
        if (currentTask.isComplete) {
          currentTask.isComplete = false;
          // Update the DOM element using targetCheckBoxProjectIndex (same project tasks order)
          tasks[targetCheckBoxProjectIndex].classList.remove("complete");
        } else {
          currentTask.isComplete = true;
          // Update the DOM element using targetCheckBoxProjectIndex (same project tasks order)
          tasks[targetCheckBoxProjectIndex].classList.add("complete");
        }
      }
    }
  }
};

export {
  createToDoTask,
  addToDoTaskArr,
  deleteAllTasks,
  deleteTask,
  changeTaskPriority,
  changeTaskTitle,
  changeTaskDescription,
  changeTaskDueDate,
  changeTaskNotes,
  toggleTaskCompletion,
  modifyTask,
};
