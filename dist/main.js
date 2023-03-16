/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getAllTasks.js":
/*!****************************!*\
  !*** ./src/getAllTasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllTasks": () => (/* binding */ getAllTasks),
/* harmony export */   "projectHolder": () => (/* binding */ projectHolder)
/* harmony export */ });
/* harmony import */ var _projectManager_projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager/projectManager */ "./src/projectManager/projectManager.js");


const projectHolder = () => (0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_0__.getAllProjects)();

const projects = projectHolder();

// Retrieves all tasks from every project, will be used to display
// tasks in the home/inbox view, as well as the today and this
// week views
const getAllTasks = () => {
  const tasks = [];
  projects.forEach((project) => {
    const currentTasks = project.tasksArr;
    /*  console.log("Current task object key values:", Object.keys(currentTasks)) */
    tasks.push(...currentTasks);
  });
  return tasks;
};




/***/ }),

/***/ "./src/projectManager/projectManager.js":
/*!**********************************************!*\
  !*** ./src/projectManager/projectManager.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectToProjectsArray": () => (/* binding */ addProjectToProjectsArray),
/* harmony export */   "addTaskToProjectObj": () => (/* binding */ addTaskToProjectObj),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "deleteProjectTask": () => (/* binding */ deleteProjectTask),
/* harmony export */   "getAllProjects": () => (/* binding */ getAllProjects),
/* harmony export */   "getCurrentProject": () => (/* binding */ getCurrentProject),
/* harmony export */   "setCurrentProject": () => (/* binding */ setCurrentProject)
/* harmony export */ });
/* import toDoManager from "../toDoManager/toDoManager"; */

const projects = [];

let currentProject;

const createProject = (projectTitle, tasksArr) => {
  return { projectTitle, tasksArr };
};

const addProjectToProjectsArray = (project) => {
  projects.push(project);
};

const getAllProjects = () => {
  return projects;
};

const addTaskToProjectObj = (project, task) => {
  project.tasksArr.push(task);
};

const deleteProjectTask = (projectIndex, taskIndex) => {
  projects.forEach((project, index) => {
    if (projectIndex === index) {
      const projectTasks = project.tasksArr;
      return projectTasks.splice(taskIndex, 1);
    }
  })
};

// Sets the current project to whatever project the user last clicked on
const setCurrentProject = (project) => {
  currentProject = project;
}


// Gets the current project the user last clicked on
const getCurrentProject = () => currentProject;






/***/ }),

/***/ "./src/toDoManager/toDoManager.js":
/*!****************************************!*\
  !*** ./src/toDoManager/toDoManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDoTaskArr": () => (/* binding */ addToDoTaskArr),
/* harmony export */   "changeTaskDescription": () => (/* binding */ changeTaskDescription),
/* harmony export */   "changeTaskDueDate": () => (/* binding */ changeTaskDueDate),
/* harmony export */   "changeTaskNotes": () => (/* binding */ changeTaskNotes),
/* harmony export */   "changeTaskPriority": () => (/* binding */ changeTaskPriority),
/* harmony export */   "changeTaskTitle": () => (/* binding */ changeTaskTitle),
/* harmony export */   "createToDoTask": () => (/* binding */ createToDoTask),
/* harmony export */   "deleteAllTasks": () => (/* binding */ deleteAllTasks),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask)
/* harmony export */ });
/* harmony import */ var _projectManager_projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectManager/projectManager */ "./src/projectManager/projectManager.js");


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
  const projects = (0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_0__.getAllProjects)();
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
  const projects = (0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_0__.getAllProjects)();
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
  const projects = (0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_0__.getAllProjects)();
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
  const projects = (0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_0__.getAllProjects)();
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
  const projects = (0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_0__.getAllProjects)();
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





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toDoManager_toDoManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoManager/toDoManager */ "./src/toDoManager/toDoManager.js");
/* harmony import */ var _projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManager/projectManager */ "./src/projectManager/projectManager.js");
/* harmony import */ var _getAllTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getAllTasks */ "./src/getAllTasks.js");





/* toDoManager(); */

/* const sampleTask = toDoManager().createToDoTask('title', 'description', '03/15/2023', 'low', 'notes');
toDoManager().addToDoTaskArr(sampleTask);
console.table(toDoManager().getAllTasks());
const deleteTask = toDoManager().deleteTask(0);
console.log("Tasks have been deleted:", deleteTask);
console.log(toDoManager().getAllTasks());

const test = [1, 2, 3];

const remove = test.splice(0, 1);
console.log(remove); */

const sampleTask = (0,_toDoManager_toDoManager__WEBPACK_IMPORTED_MODULE_0__.createToDoTask)(
  "title",
  "description",
  "03/15/2023",
  "low",
  "notes"
);
const sampleTaskTwo = (0,_toDoManager_toDoManager__WEBPACK_IMPORTED_MODULE_0__.createToDoTask)(
  "taskTwo",
  "descriptionTwo",
  "03/15/2023",
  "medium",
  "notes"
);
const sampleTaskThree = (0,_toDoManager_toDoManager__WEBPACK_IMPORTED_MODULE_0__.createToDoTask)(
  "taskThree",
  "descriptionThree",
  "03/15/2023",
  "medium",
  "notes"
);
const sampleProject = (0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.createProject)("testProjectObject", []);
(0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.addTaskToProjectObj)(sampleProject, sampleTask);
(0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.addTaskToProjectObj)(sampleProject, sampleTaskTwo);
(0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.addTaskToProjectObj)(sampleProject, sampleTaskThree);
(0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.addProjectToProjectsArray)(sampleProject);

const secondProjTask = (0,_toDoManager_toDoManager__WEBPACK_IMPORTED_MODULE_0__.createToDoTask)(
  "title",
  "description",
  "03/15/2023",
  "low",
  "notes"
);

const secondProjTaskTwo = (0,_toDoManager_toDoManager__WEBPACK_IMPORTED_MODULE_0__.createToDoTask)(
  "title",
  "description",
  "03/15/2023",
  "low",
  "notes",

);
const secondProject = (0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.createProject)("Project Two", []);
(0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.addTaskToProjectObj)(secondProject, secondProjTask);
(0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.addTaskToProjectObj)(secondProject, secondProjTaskTwo);
(0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.addProjectToProjectsArray)(secondProject);
/* deleteProjectTask(1, 1); */

(0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.setCurrentProject)(sampleProject);
console.log("The current project is set to:", (0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().projectTitle);
(0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.setCurrentProject)(secondProject);
console.log("The current project is now set to:", (0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().projectTitle);

(0,_toDoManager_toDoManager__WEBPACK_IMPORTED_MODULE_0__.changeTaskPriority)(0, 0, "med");
(0,_toDoManager_toDoManager__WEBPACK_IMPORTED_MODULE_0__.changeTaskTitle)(0, 0, "Changed, now first task")
;(0,_toDoManager_toDoManager__WEBPACK_IMPORTED_MODULE_0__.changeTaskNotes)(0, 0, "Updated Notes!")

console.log((0,_getAllTasks__WEBPACK_IMPORTED_MODULE_2__.getAllTasks)());

console.table((0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.getAllProjects)());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUZBQWlCO0FBQy9ELGlGQUFpQjtBQUNqQixrREFBa0QsaUZBQWlCOztBQUVuRSw0RUFBa0I7QUFDbEIseUVBQWU7QUFDZiwwRUFBZTs7QUFFZixZQUFZLHlEQUFXOztBQUV2QixjQUFjLDhFQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2dldEFsbFRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0TWFuYWdlci9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9Eb01hbmFnZXIvdG9Eb01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZXIvcHJvamVjdE1hbmFnZXJcIjtcblxuY29uc3QgcHJvamVjdEhvbGRlciA9ICgpID0+IGdldEFsbFByb2plY3RzKCk7XG5cbmNvbnN0IHByb2plY3RzID0gcHJvamVjdEhvbGRlcigpO1xuXG4vLyBSZXRyaWV2ZXMgYWxsIHRhc2tzIGZyb20gZXZlcnkgcHJvamVjdCwgd2lsbCBiZSB1c2VkIHRvIGRpc3BsYXlcbi8vIHRhc2tzIGluIHRoZSBob21lL2luYm94IHZpZXcsIGFzIHdlbGwgYXMgdGhlIHRvZGF5IGFuZCB0aGlzXG4vLyB3ZWVrIHZpZXdzXG5jb25zdCBnZXRBbGxUYXNrcyA9ICgpID0+IHtcbiAgY29uc3QgdGFza3MgPSBbXTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUYXNrcyA9IHByb2plY3QudGFza3NBcnI7XG4gICAgLyogIGNvbnNvbGUubG9nKFwiQ3VycmVudCB0YXNrIG9iamVjdCBrZXkgdmFsdWVzOlwiLCBPYmplY3Qua2V5cyhjdXJyZW50VGFza3MpKSAqL1xuICAgIHRhc2tzLnB1c2goLi4uY3VycmVudFRhc2tzKTtcbiAgfSk7XG4gIHJldHVybiB0YXNrcztcbn07XG5cbmV4cG9ydCB7IHByb2plY3RIb2xkZXIsIGdldEFsbFRhc2tzIH07XG4iLCIvKiBpbXBvcnQgdG9Eb01hbmFnZXIgZnJvbSBcIi4uL3RvRG9NYW5hZ2VyL3RvRG9NYW5hZ2VyXCI7ICovXG5cbmNvbnN0IHByb2plY3RzID0gW107XG5cbmxldCBjdXJyZW50UHJvamVjdDtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9IChwcm9qZWN0VGl0bGUsIHRhc2tzQXJyKSA9PiB7XG4gIHJldHVybiB7IHByb2plY3RUaXRsZSwgdGFza3NBcnIgfTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RUb1Byb2plY3RzQXJyYXkgPSAocHJvamVjdCkgPT4ge1xuICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xufTtcblxuY29uc3QgZ2V0QWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gIHJldHVybiBwcm9qZWN0cztcbn07XG5cbmNvbnN0IGFkZFRhc2tUb1Byb2plY3RPYmogPSAocHJvamVjdCwgdGFzaykgPT4ge1xuICBwcm9qZWN0LnRhc2tzQXJyLnB1c2godGFzayk7XG59O1xuXG5jb25zdCBkZWxldGVQcm9qZWN0VGFzayA9IChwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCkgPT4ge1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGlmIChwcm9qZWN0SW5kZXggPT09IGluZGV4KSB7XG4gICAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBwcm9qZWN0LnRhc2tzQXJyO1xuICAgICAgcmV0dXJuIHByb2plY3RUYXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICB9XG4gIH0pXG59O1xuXG4vLyBTZXRzIHRoZSBjdXJyZW50IHByb2plY3QgdG8gd2hhdGV2ZXIgcHJvamVjdCB0aGUgdXNlciBsYXN0IGNsaWNrZWQgb25cbmNvbnN0IHNldEN1cnJlbnRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xufVxuXG5cbi8vIEdldHMgdGhlIGN1cnJlbnQgcHJvamVjdCB0aGUgdXNlciBsYXN0IGNsaWNrZWQgb25cbmNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gKCkgPT4gY3VycmVudFByb2plY3Q7XG5cblxuXG5leHBvcnQge1xuICBjcmVhdGVQcm9qZWN0LFxuICBnZXRBbGxQcm9qZWN0cyxcbiAgYWRkUHJvamVjdFRvUHJvamVjdHNBcnJheSxcbiAgYWRkVGFza1RvUHJvamVjdE9iaixcbiAgZGVsZXRlUHJvamVjdFRhc2ssXG4gIHNldEN1cnJlbnRQcm9qZWN0LFxuICBnZXRDdXJyZW50UHJvamVjdFxufTtcbiIsImltcG9ydCB7IGdldEFsbFByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2plY3RNYW5hZ2VyL3Byb2plY3RNYW5hZ2VyXCI7XG5cbi8vIGNvbnRhaW5zIHRoZSBkaWZmZXJlbnQgZmFjdG9yeSBwYXR0ZXJucyBhbmQgZnVuY3Rpb25zIGZvclxuLy8gY3JlYXRpbmcgYW5kIG1vZGlmeWluZyB0byBkbyB0YXNrc1xuXG5jb25zdCB0YXNrcyA9IFtdO1xuXG4vLyBmYWN0b3J5IHBhdHRlcm4gZm9yIGNyZWF0aW5nIGEgdG9Eb1Rhc2tcbmNvbnN0IGNyZWF0ZVRvRG9UYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgfTtcbn07XG5cbi8vIGFkZHMgdG8gZG8gbGlzdCB0YXNrIHRvIHRhc2tzIGFycmF5O1xuY29uc3QgYWRkVG9Eb1Rhc2tBcnIgPSAodGFzaykgPT4ge1xuICByZXR1cm4gdGFza3MucHVzaCh0YXNrKTtcbn07XG5cblxuLy8gZGVsZXRlcyBhbGwgdGFza3MgaW4gdGFzayBhcnJheVxuY29uc3QgZGVsZXRlQWxsVGFza3MgPSAoKSA9PiB7XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHRhc2sucG9wKTtcbn07XG5cbi8vIGRlbGV0ZXMgc2luZ2xlIHRhc2tcbmNvbnN0IGRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgbGV0IGRlbGV0ZWRUYXNrO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGluZGV4ID09PSBpKSB7XG4gICAgICBkZWxldGVkVGFzayA9IHRhc2tzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVsZXRlZFRhc2s7XG59O1xuXG5cblxuY29uc3QgY2hhbmdlVGFza1RpdGxlID0gKHByb2plY3RJbmRleCwgdGFza0luZGV4LCBuZXdUaXRsZSkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IGdldEFsbFByb2plY3RzKCk7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgaWYgKHByb2plY3RJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IHByb2plY3QudGFza3NBcnI7XG4gICAgICBwcm9qZWN0VGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHRhc2tJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICB0YXNrLnRpdGxlID0gbmV3VGl0bGVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGNoYW5nZVRhc2tEZXNjcmlwdGlvbiA9IChwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCwgbmV3RGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBnZXRBbGxQcm9qZWN0cygpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGlmIChwcm9qZWN0SW5kZXggPT09IGluZGV4KSB7XG4gICAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBwcm9qZWN0LnRhc2tzQXJyO1xuICAgICAgcHJvamVjdFRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICh0YXNrSW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBjaGFuZ2VUYXNrRHVlRGF0ZSA9IChwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCwgbmV3RHVlRGF0ZSkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IGdldEFsbFByb2plY3RzKCk7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgaWYgKHByb2plY3RJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IHByb2plY3QudGFza3NBcnI7XG4gICAgICBwcm9qZWN0VGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHRhc2tJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICB0YXNrLmR1ZURhdGUgPSBuZXdEdWVEYXRlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBjaGFuZ2VUYXNrUHJpb3JpdHkgPSAocHJvamVjdEluZGV4LCB0YXNrSW5kZXgsIG5ld1ByaW9yaXR5KSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gZ2V0QWxsUHJvamVjdHMoKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBpZiAocHJvamVjdEluZGV4ID09PSBpbmRleCkge1xuICAgICAgY29uc3QgcHJvamVjdFRhc2tzID0gcHJvamVjdC50YXNrc0FycjtcbiAgICAgIHByb2plY3RUYXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAodGFza0luZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgIHRhc2sucHJpb3JpdHkgPSBuZXdQcmlvcml0eVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgY2hhbmdlVGFza05vdGVzID0gKHByb2plY3RJbmRleCwgdGFza0luZGV4LCB1cGRhdGVkTm90ZXMpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBnZXRBbGxQcm9qZWN0cygpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGlmIChwcm9qZWN0SW5kZXggPT09IGluZGV4KSB7XG4gICAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBwcm9qZWN0LnRhc2tzQXJyO1xuICAgICAgcHJvamVjdFRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICh0YXNrSW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgdGFzay5ub3RlcyA9IHVwZGF0ZWROb3Rlc1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn1cblxuXG5leHBvcnQge1xuICBjcmVhdGVUb0RvVGFzayxcbiAgYWRkVG9Eb1Rhc2tBcnIsXG4gIGRlbGV0ZUFsbFRhc2tzLFxuICBkZWxldGVUYXNrLFxuICBjaGFuZ2VUYXNrUHJpb3JpdHksXG4gIGNoYW5nZVRhc2tUaXRsZSxcbiAgY2hhbmdlVGFza0Rlc2NyaXB0aW9uLFxuICBjaGFuZ2VUYXNrRHVlRGF0ZSxcbiAgY2hhbmdlVGFza05vdGVzXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBjcmVhdGVUb0RvVGFzayxcbiAgYWRkVG9Eb1Rhc2tBcnIsXG4gIGRlbGV0ZUFsbFRhc2tzLFxuICBkZWxldGVUYXNrLFxuICBjaGFuZ2VUYXNrUHJpb3JpdHksXG4gIGNoYW5nZVRhc2tUaXRsZSxcbiAgY2hhbmdlVGFza05vdGVzLFxufSBmcm9tIFwiLi90b0RvTWFuYWdlci90b0RvTWFuYWdlclwiO1xuaW1wb3J0IHtcbiAgZGVsZXRlUHJvamVjdFRhc2ssIGdldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdCxcbiAgYWRkVGFza1RvUHJvamVjdE9iaixcbiAgY3JlYXRlUHJvamVjdCxcbiAgYWRkUHJvamVjdFRvUHJvamVjdHNBcnJheSxcbiAgZ2V0QWxsUHJvamVjdHMsXG59IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyL3Byb2plY3RNYW5hZ2VyXCI7XG5pbXBvcnQgeyBwcm9qZWN0SG9sZGVyLCBnZXRBbGxUYXNrcyB9IGZyb20gXCIuL2dldEFsbFRhc2tzXCI7XG5cblxuLyogdG9Eb01hbmFnZXIoKTsgKi9cblxuLyogY29uc3Qgc2FtcGxlVGFzayA9IHRvRG9NYW5hZ2VyKCkuY3JlYXRlVG9Eb1Rhc2soJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJzAzLzE1LzIwMjMnLCAnbG93JywgJ25vdGVzJyk7XG50b0RvTWFuYWdlcigpLmFkZFRvRG9UYXNrQXJyKHNhbXBsZVRhc2spO1xuY29uc29sZS50YWJsZSh0b0RvTWFuYWdlcigpLmdldEFsbFRhc2tzKCkpO1xuY29uc3QgZGVsZXRlVGFzayA9IHRvRG9NYW5hZ2VyKCkuZGVsZXRlVGFzaygwKTtcbmNvbnNvbGUubG9nKFwiVGFza3MgaGF2ZSBiZWVuIGRlbGV0ZWQ6XCIsIGRlbGV0ZVRhc2spO1xuY29uc29sZS5sb2codG9Eb01hbmFnZXIoKS5nZXRBbGxUYXNrcygpKTtcblxuY29uc3QgdGVzdCA9IFsxLCAyLCAzXTtcblxuY29uc3QgcmVtb3ZlID0gdGVzdC5zcGxpY2UoMCwgMSk7XG5jb25zb2xlLmxvZyhyZW1vdmUpOyAqL1xuXG5jb25zdCBzYW1wbGVUYXNrID0gY3JlYXRlVG9Eb1Rhc2soXG4gIFwidGl0bGVcIixcbiAgXCJkZXNjcmlwdGlvblwiLFxuICBcIjAzLzE1LzIwMjNcIixcbiAgXCJsb3dcIixcbiAgXCJub3Rlc1wiXG4pO1xuY29uc3Qgc2FtcGxlVGFza1R3byA9IGNyZWF0ZVRvRG9UYXNrKFxuICBcInRhc2tUd29cIixcbiAgXCJkZXNjcmlwdGlvblR3b1wiLFxuICBcIjAzLzE1LzIwMjNcIixcbiAgXCJtZWRpdW1cIixcbiAgXCJub3Rlc1wiXG4pO1xuY29uc3Qgc2FtcGxlVGFza1RocmVlID0gY3JlYXRlVG9Eb1Rhc2soXG4gIFwidGFza1RocmVlXCIsXG4gIFwiZGVzY3JpcHRpb25UaHJlZVwiLFxuICBcIjAzLzE1LzIwMjNcIixcbiAgXCJtZWRpdW1cIixcbiAgXCJub3Rlc1wiXG4pO1xuY29uc3Qgc2FtcGxlUHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJ0ZXN0UHJvamVjdE9iamVjdFwiLCBbXSk7XG5hZGRUYXNrVG9Qcm9qZWN0T2JqKHNhbXBsZVByb2plY3QsIHNhbXBsZVRhc2spO1xuYWRkVGFza1RvUHJvamVjdE9iaihzYW1wbGVQcm9qZWN0LCBzYW1wbGVUYXNrVHdvKTtcbmFkZFRhc2tUb1Byb2plY3RPYmooc2FtcGxlUHJvamVjdCwgc2FtcGxlVGFza1RocmVlKTtcbmFkZFByb2plY3RUb1Byb2plY3RzQXJyYXkoc2FtcGxlUHJvamVjdCk7XG5cbmNvbnN0IHNlY29uZFByb2pUYXNrID0gY3JlYXRlVG9Eb1Rhc2soXG4gIFwidGl0bGVcIixcbiAgXCJkZXNjcmlwdGlvblwiLFxuICBcIjAzLzE1LzIwMjNcIixcbiAgXCJsb3dcIixcbiAgXCJub3Rlc1wiXG4pO1xuXG5jb25zdCBzZWNvbmRQcm9qVGFza1R3byA9IGNyZWF0ZVRvRG9UYXNrKFxuICBcInRpdGxlXCIsXG4gIFwiZGVzY3JpcHRpb25cIixcbiAgXCIwMy8xNS8yMDIzXCIsXG4gIFwibG93XCIsXG4gIFwibm90ZXNcIixcblxuKTtcbmNvbnN0IHNlY29uZFByb2plY3QgPSBjcmVhdGVQcm9qZWN0KFwiUHJvamVjdCBUd29cIiwgW10pO1xuYWRkVGFza1RvUHJvamVjdE9iaihzZWNvbmRQcm9qZWN0LCBzZWNvbmRQcm9qVGFzayk7XG5hZGRUYXNrVG9Qcm9qZWN0T2JqKHNlY29uZFByb2plY3QsIHNlY29uZFByb2pUYXNrVHdvKTtcbmFkZFByb2plY3RUb1Byb2plY3RzQXJyYXkoc2Vjb25kUHJvamVjdCk7XG4vKiBkZWxldGVQcm9qZWN0VGFzaygxLCAxKTsgKi9cblxuc2V0Q3VycmVudFByb2plY3Qoc2FtcGxlUHJvamVjdCk7XG5jb25zb2xlLmxvZyhcIlRoZSBjdXJyZW50IHByb2plY3QgaXMgc2V0IHRvOlwiLCBnZXRDdXJyZW50UHJvamVjdCgpLnByb2plY3RUaXRsZSk7XG5zZXRDdXJyZW50UHJvamVjdChzZWNvbmRQcm9qZWN0KTtcbmNvbnNvbGUubG9nKFwiVGhlIGN1cnJlbnQgcHJvamVjdCBpcyBub3cgc2V0IHRvOlwiLCBnZXRDdXJyZW50UHJvamVjdCgpLnByb2plY3RUaXRsZSk7XG5cbmNoYW5nZVRhc2tQcmlvcml0eSgwLCAwLCBcIm1lZFwiKTtcbmNoYW5nZVRhc2tUaXRsZSgwLCAwLCBcIkNoYW5nZWQsIG5vdyBmaXJzdCB0YXNrXCIpXG5jaGFuZ2VUYXNrTm90ZXMoMCwgMCwgXCJVcGRhdGVkIE5vdGVzIVwiKVxuXG5jb25zb2xlLmxvZyhnZXRBbGxUYXNrcygpKTtcblxuY29uc29sZS50YWJsZShnZXRBbGxQcm9qZWN0cygpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==