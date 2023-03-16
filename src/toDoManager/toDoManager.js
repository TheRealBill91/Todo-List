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

export {
  createToDoTask,
  addToDoTaskArr,
  deleteAllTasks,
  deleteTask,
};
