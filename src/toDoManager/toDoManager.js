import { getAllProjects } from "../projectManager/projectManager";

// contains the different factory patterns and functions for
// creating and modifying to do tasks

const tasks = [];

const projects = getAllProjects();

// factory pattern for creating a toDoTask
const createToDoTask = (title, description, dueDate, priority, notes, isComplete) => {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    isComplete
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



const changeTaskTitle = (projectIndex, taskIndex, newTitle) => {
  projects.forEach((project, index) => {
    if (projectIndex === index) {
      const projectTasks = project.tasksArr;
      projectTasks.forEach((task, index) => {
        if (taskIndex === index) {
          task.title = newTitle
        }
      })
    }
  })
}

const changeTaskDescription = (projectIndex, taskIndex, newDescription) => {
  projects.forEach((project, index) => {
    if (projectIndex === index) {
      const projectTasks = project.tasksArr;
      projectTasks.forEach((task, index) => {
        if (taskIndex === index) {
          task.description = newDescription
        }
      })
    }
  })
}

const changeTaskDueDate = (projectIndex, taskIndex, newDueDate) => {
  projects.forEach((project, index) => {
    if (projectIndex === index) {
      const projectTasks = project.tasksArr;
      projectTasks.forEach((task, index) => {
        if (taskIndex === index) {
          task.dueDate = newDueDate
        }
      })
    }
  })
}

const changeTaskPriority = (projectIndex, taskIndex, newPriority) => {
  projects.forEach((project, index) => {
    if (projectIndex === index) {
      const projectTasks = project.tasksArr;
      projectTasks.forEach((task, index) => {
        if (taskIndex === index) {
          task.priority = newPriority
        }
      })
    }
  })
}

const changeTaskNotes = (projectIndex, taskIndex, updatedNotes) => {
  projects.forEach((project, index) => {
    if (projectIndex === index) {
      const projectTasks = project.tasksArr;
      projectTasks.forEach((task, index) => {
        if (taskIndex === index) {
          task.notes = updatedNotes
        }
      })
    }
  })
}

const toggleTaskCompletion = (projectIndex, taskIndex) => {
  projects.forEach((project, index) => {
    if (projectIndex === index) {
      const projectTasks = project.tasksArr;
      projectTasks.forEach((task, index) => {
        if (taskIndex === index) {
          task.isComplete ? task.isComplete = false : task.isComplete = true;
        }
      })
    }
  })
}


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
  toggleTaskCompletion
};
