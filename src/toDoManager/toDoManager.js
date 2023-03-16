import { getAllProjects } from "../projectManager/projectManager";

// contains the different factory patterns and functions for
// creating and modifying to do tasks

const tasks = [];

// factory pattern for creating a toDoTask
const createToDoTask = (title, description, dueDate, priority, notes) => {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
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
  const projects = getAllProjects();
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
  const projects = getAllProjects();
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
  const projects = getAllProjects();
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
  const projects = getAllProjects();
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
  const projects = getAllProjects();
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


export {
  createToDoTask,
  addToDoTaskArr,
  deleteAllTasks,
  deleteTask,
  changeTaskPriority,
  changeTaskTitle,
  changeTaskDescription,
  changeTaskDueDate,
  changeTaskNotes
};
