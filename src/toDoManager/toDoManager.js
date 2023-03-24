import { btnPrioritySelector } from "../DOMElements/createTask";
import { getAllProjects } from "../projectManager/projectManager";
import { getWeeklyTaskObjects } from "../weeklyView";

// contains the different factory patterns and functions for
// creating and modifying to do tasks

const tasks = [];

const projects = getAllProjects();

// factory pattern for creating a toDoTask
const createToDoTask = (
  UUID,
  title,
  description,
  dueDate,
  priority,
  notes,
  isComplete
) => {
  return {
    UUID,
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

const modifyTask = (targetTaskObject, getNewTaskValues) => {
  const newTaskValues = getNewTaskValues;
  changeTaskTitle(targetTaskObject, newTaskValues[0]);
  changeTaskDescription(targetTaskObject, newTaskValues[1]);
  changeTaskDueDate(targetTaskObject, newTaskValues[2]);
  changeTaskPriority(targetTaskObject, newTaskValues[3]);
  changeTaskNotes(targetTaskObject, newTaskValues[4]);
};

const changeTaskTitle = (targetTaskObject, newTitle) => {
  const currentTaskObj = targetTaskObject;
  currentTaskObj.title = newTitle;
};

const changeTaskDescription = (targetTaskObject, newDescription) => {
  const currentTaskObj = targetTaskObject;
  currentTaskObj.description = newDescription;
};

const changeTaskDueDate = (targetTaskObject, newTaskDueDate) => {
  const currentTaskObj = targetTaskObject;
  currentTaskObj.dueDate = newTaskDueDate;
};

const changeTaskPriority = (targetTaskObject, newPriority) => {
  const currentTaskObj = targetTaskObject;
  currentTaskObj.priority = btnPrioritySelector();
};

const changeTaskNotes = (targetTaskObject, newTaskNotes) => {
  const currentTaskObj = targetTaskObject;
  currentTaskObj.notes = newTaskNotes;
};

const toggleTaskCompletion = (
  currentProjObj,
  targetProjectObj,
  targetCheckBoxProjectIndex
) => {
  const taskElms = document.querySelectorAll(".tasks > div");
  const taskElmsArr = [...taskElms];

  const targetTaskElm = taskElmsArr.find(
    (taskElm) => taskElm.dataset.uuid === targetProjectObj.UUID
  );

  const changeTask = targetProjectObj.isComplete
    ? ((targetProjectObj.isComplete = false),
      targetTaskElm.classList.remove("complete"))
    : ((targetProjectObj.isComplete = true),
      targetTaskElm.classList.add("complete"));
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
