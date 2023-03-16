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
/* harmony export */   "getAllProjects": () => (/* binding */ getAllProjects)
/* harmony export */ });
/* import toDoManager from "../toDoManager/toDoManager"; */

const projects = [];

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




/***/ }),

/***/ "./src/toDoManager/toDoManager.js":
/*!****************************************!*\
  !*** ./src/toDoManager/toDoManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDoTaskArr": () => (/* binding */ addToDoTaskArr),
/* harmony export */   "createToDoTask": () => (/* binding */ createToDoTask),
/* harmony export */   "deleteAllTasks": () => (/* binding */ deleteAllTasks),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask)
/* harmony export */ });
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
  "notes"
);
const secondProject = (0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.createProject)("Project Two", []);
(0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.addTaskToProjectObj)(secondProject, secondProjTask);
(0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.addTaskToProjectObj)(secondProject, secondProjTaskTwo);
(0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.addProjectToProjectsArray)(secondProject);
const deletedTask = (0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.deleteProjectTask)(1, 1);
console.log("Some info about deleted task:", deletedTask);
/* sampleProject.sampleTask = sampleTask;
sampleProject.sampleTaskTwo = sampleTaskTwo;
sampleProject.sampleTaskThree = sampleTaskThree; */

console.log((0,_getAllTasks__WEBPACK_IMPORTED_MODULE_2__.getAllTasks)());

console.table((0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.getAllProjects)());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ2pFO0FBQ0EsNEJBQTRCLDhFQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ3NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ0Qyx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBT0U7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNRTs7Ozs7OztVQzVDRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNEbUM7QUFDaUM7QUFDVDtBQUMzRDtBQU15QztBQUN6QztBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsbUJBQW1CLHdFQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3RUFBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0VBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZFQUFhO0FBQ25DLG1GQUFtQjtBQUNuQixtRkFBbUI7QUFDbkIsbUZBQW1CO0FBQ25CLHlGQUF5QjtBQUN6QjtBQUNBLHVCQUF1Qix3RUFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix3RUFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkVBQWE7QUFDbkMsbUZBQW1CO0FBQ25CLG1GQUFtQjtBQUNuQix5RkFBeUI7QUFDekIsb0JBQW9CLGlGQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSxZQUFZLHlEQUFXO0FBQ3ZCO0FBQ0EsY0FBYyw4RUFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9nZXRBbGxUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdE1hbmFnZXIvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9NYW5hZ2VyL3RvRG9NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyL3Byb2plY3RNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCBwcm9qZWN0SG9sZGVyID0gKCkgPT4gZ2V0QWxsUHJvamVjdHMoKTtcclxuXHJcbmNvbnN0IHByb2plY3RzID0gcHJvamVjdEhvbGRlcigpO1xyXG5cclxuLy8gUmV0cmlldmVzIGFsbCB0YXNrcyBmcm9tIGV2ZXJ5IHByb2plY3QsIHdpbGwgYmUgdXNlZCB0byBkaXNwbGF5XHJcbi8vIHRhc2tzIGluIHRoZSBob21lL2luYm94IHZpZXcsIGFzIHdlbGwgYXMgdGhlIHRvZGF5IGFuZCB0aGlzXHJcbi8vIHdlZWsgdmlld3NcclxuY29uc3QgZ2V0QWxsVGFza3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGFza3MgPSBbXTtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50VGFza3MgPSBwcm9qZWN0LnRhc2tzQXJyO1xyXG4gICAgdGFza3MucHVzaCguLi5jdXJyZW50VGFza3MpO1xyXG4gIH0pO1xyXG4gIHJldHVybiB0YXNrcztcclxufTtcclxuXHJcbmV4cG9ydCB7IHByb2plY3RIb2xkZXIsIGdldEFsbFRhc2tzIH07XHJcbiIsIi8qIGltcG9ydCB0b0RvTWFuYWdlciBmcm9tIFwiLi4vdG9Eb01hbmFnZXIvdG9Eb01hbmFnZXJcIjsgKi9cclxuXHJcbmNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3RUaXRsZSwgdGFza3NBcnIpID0+IHtcclxuICByZXR1cm4geyBwcm9qZWN0VGl0bGUsIHRhc2tzQXJyIH07XHJcbn07XHJcblxyXG5jb25zdCBhZGRQcm9qZWN0VG9Qcm9qZWN0c0FycmF5ID0gKHByb2plY3QpID0+IHtcclxuICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QWxsUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHByb2plY3RzO1xyXG59O1xyXG5cclxuY29uc3QgYWRkVGFza1RvUHJvamVjdE9iaiA9IChwcm9qZWN0LCB0YXNrKSA9PiB7XHJcbiAgcHJvamVjdC50YXNrc0Fyci5wdXNoKHRhc2spO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlUHJvamVjdFRhc2sgPSAocHJvamVjdEluZGV4LCB0YXNrSW5kZXgpID0+IHtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKHByb2plY3RJbmRleCA9PT0gaW5kZXgpIHtcclxuICAgICAgY29uc3QgcHJvamVjdFRhc2tzID0gcHJvamVjdC50YXNrc0FycjtcclxuICAgICAgcmV0dXJuIHByb2plY3RUYXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcclxuICAgIH1cclxuICB9KVxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVQcm9qZWN0LFxyXG4gIGdldEFsbFByb2plY3RzLFxyXG4gIGFkZFByb2plY3RUb1Byb2plY3RzQXJyYXksXHJcbiAgYWRkVGFza1RvUHJvamVjdE9iaixcclxuICBkZWxldGVQcm9qZWN0VGFzayxcclxufTtcclxuIiwiLy8gY29udGFpbnMgdGhlIGRpZmZlcmVudCBmYWN0b3J5IHBhdHRlcm5zIGFuZCBmdW5jdGlvbnMgZm9yXHJcbi8vIGNyZWF0aW5nIGFuZCBtb2RpZnlpbmcgdG8gZG8gdGFza3NcclxuXHJcbmNvbnN0IHRhc2tzID0gW107XHJcblxyXG4vLyBmYWN0b3J5IHBhdHRlcm4gZm9yIGNyZWF0aW5nIGEgdG9Eb1Rhc2tcclxuY29uc3QgY3JlYXRlVG9Eb1Rhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGR1ZURhdGUsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIG5vdGVzLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyBhZGRzIHRvIGRvIGxpc3QgdGFzayB0byB0YXNrcyBhcnJheTtcclxuY29uc3QgYWRkVG9Eb1Rhc2tBcnIgPSAodGFzaykgPT4ge1xyXG4gIHJldHVybiB0YXNrcy5wdXNoKHRhc2spO1xyXG59O1xyXG5cclxuXHJcbi8vIGRlbGV0ZXMgYWxsIHRhc2tzIGluIHRhc2sgYXJyYXlcclxuY29uc3QgZGVsZXRlQWxsVGFza3MgPSAoKSA9PiB7XHJcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4gdGFzay5wb3ApO1xyXG59O1xyXG5cclxuLy8gZGVsZXRlcyBzaW5nbGUgdGFza1xyXG5jb25zdCBkZWxldGVUYXNrID0gKGluZGV4KSA9PiB7XHJcbiAgbGV0IGRlbGV0ZWRUYXNrO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChpbmRleCA9PT0gaSkge1xyXG4gICAgICBkZWxldGVkVGFzayA9IHRhc2tzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBkZWxldGVkVGFzaztcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlVG9Eb1Rhc2ssXHJcbiAgYWRkVG9Eb1Rhc2tBcnIsXHJcbiAgZGVsZXRlQWxsVGFza3MsXHJcbiAgZGVsZXRlVGFzayxcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xyXG4gIGNyZWF0ZVRvRG9UYXNrLFxyXG4gIGFkZFRvRG9UYXNrQXJyLFxyXG4gIGRlbGV0ZUFsbFRhc2tzLFxyXG4gIGRlbGV0ZVRhc2ssXHJcbn0gZnJvbSBcIi4vdG9Eb01hbmFnZXIvdG9Eb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgZGVsZXRlUHJvamVjdFRhc2sgfSBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlci9wcm9qZWN0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBwcm9qZWN0SG9sZGVyLCBnZXRBbGxUYXNrcyB9IGZyb20gXCIuL2dldEFsbFRhc2tzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGFkZFRhc2tUb1Byb2plY3RPYmosXHJcbiAgY3JlYXRlUHJvamVjdCxcclxuICBhZGRQcm9qZWN0VG9Qcm9qZWN0c0FycmF5LFxyXG4gIGdldEFsbFByb2plY3RzLFxyXG59IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyL3Byb2plY3RNYW5hZ2VyXCI7XHJcblxyXG4vKiB0b0RvTWFuYWdlcigpOyAqL1xyXG5cclxuLyogY29uc3Qgc2FtcGxlVGFzayA9IHRvRG9NYW5hZ2VyKCkuY3JlYXRlVG9Eb1Rhc2soJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJzAzLzE1LzIwMjMnLCAnbG93JywgJ25vdGVzJyk7XHJcbnRvRG9NYW5hZ2VyKCkuYWRkVG9Eb1Rhc2tBcnIoc2FtcGxlVGFzayk7XHJcbmNvbnNvbGUudGFibGUodG9Eb01hbmFnZXIoKS5nZXRBbGxUYXNrcygpKTtcclxuY29uc3QgZGVsZXRlVGFzayA9IHRvRG9NYW5hZ2VyKCkuZGVsZXRlVGFzaygwKTtcclxuY29uc29sZS5sb2coXCJUYXNrcyBoYXZlIGJlZW4gZGVsZXRlZDpcIiwgZGVsZXRlVGFzayk7XHJcbmNvbnNvbGUubG9nKHRvRG9NYW5hZ2VyKCkuZ2V0QWxsVGFza3MoKSk7XHJcblxyXG5jb25zdCB0ZXN0ID0gWzEsIDIsIDNdO1xyXG5cclxuY29uc3QgcmVtb3ZlID0gdGVzdC5zcGxpY2UoMCwgMSk7XHJcbmNvbnNvbGUubG9nKHJlbW92ZSk7ICovXHJcblxyXG5jb25zdCBzYW1wbGVUYXNrID0gY3JlYXRlVG9Eb1Rhc2soXHJcbiAgXCJ0aXRsZVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIixcclxuICBcIjAzLzE1LzIwMjNcIixcclxuICBcImxvd1wiLFxyXG4gIFwibm90ZXNcIlxyXG4pO1xyXG5jb25zdCBzYW1wbGVUYXNrVHdvID0gY3JlYXRlVG9Eb1Rhc2soXHJcbiAgXCJ0YXNrVHdvXCIsXHJcbiAgXCJkZXNjcmlwdGlvblR3b1wiLFxyXG4gIFwiMDMvMTUvMjAyM1wiLFxyXG4gIFwibWVkaXVtXCIsXHJcbiAgXCJub3Rlc1wiXHJcbik7XHJcbmNvbnN0IHNhbXBsZVRhc2tUaHJlZSA9IGNyZWF0ZVRvRG9UYXNrKFxyXG4gIFwidGFza1RocmVlXCIsXHJcbiAgXCJkZXNjcmlwdGlvblRocmVlXCIsXHJcbiAgXCIwMy8xNS8yMDIzXCIsXHJcbiAgXCJtZWRpdW1cIixcclxuICBcIm5vdGVzXCJcclxuKTtcclxuY29uc3Qgc2FtcGxlUHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJ0ZXN0UHJvamVjdE9iamVjdFwiLCBbXSk7XHJcbmFkZFRhc2tUb1Byb2plY3RPYmooc2FtcGxlUHJvamVjdCwgc2FtcGxlVGFzayk7XHJcbmFkZFRhc2tUb1Byb2plY3RPYmooc2FtcGxlUHJvamVjdCwgc2FtcGxlVGFza1R3byk7XHJcbmFkZFRhc2tUb1Byb2plY3RPYmooc2FtcGxlUHJvamVjdCwgc2FtcGxlVGFza1RocmVlKTtcclxuYWRkUHJvamVjdFRvUHJvamVjdHNBcnJheShzYW1wbGVQcm9qZWN0KTtcclxuXHJcbmNvbnN0IHNlY29uZFByb2pUYXNrID0gY3JlYXRlVG9Eb1Rhc2soXHJcbiAgXCJ0aXRsZVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIixcclxuICBcIjAzLzE1LzIwMjNcIixcclxuICBcImxvd1wiLFxyXG4gIFwibm90ZXNcIlxyXG4pO1xyXG5cclxuY29uc3Qgc2Vjb25kUHJvalRhc2tUd28gPSBjcmVhdGVUb0RvVGFzayhcclxuICBcInRpdGxlXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiLFxyXG4gIFwiMDMvMTUvMjAyM1wiLFxyXG4gIFwibG93XCIsXHJcbiAgXCJub3Rlc1wiXHJcbik7XHJcbmNvbnN0IHNlY29uZFByb2plY3QgPSBjcmVhdGVQcm9qZWN0KFwiUHJvamVjdCBUd29cIiwgW10pO1xyXG5hZGRUYXNrVG9Qcm9qZWN0T2JqKHNlY29uZFByb2plY3QsIHNlY29uZFByb2pUYXNrKTtcclxuYWRkVGFza1RvUHJvamVjdE9iaihzZWNvbmRQcm9qZWN0LCBzZWNvbmRQcm9qVGFza1R3byk7XHJcbmFkZFByb2plY3RUb1Byb2plY3RzQXJyYXkoc2Vjb25kUHJvamVjdCk7XHJcbmNvbnN0IGRlbGV0ZWRUYXNrID0gZGVsZXRlUHJvamVjdFRhc2soMSwgMSk7XHJcbmNvbnNvbGUubG9nKFwiU29tZSBpbmZvIGFib3V0IGRlbGV0ZWQgdGFzazpcIiwgZGVsZXRlZFRhc2spO1xyXG4vKiBzYW1wbGVQcm9qZWN0LnNhbXBsZVRhc2sgPSBzYW1wbGVUYXNrO1xyXG5zYW1wbGVQcm9qZWN0LnNhbXBsZVRhc2tUd28gPSBzYW1wbGVUYXNrVHdvO1xyXG5zYW1wbGVQcm9qZWN0LnNhbXBsZVRhc2tUaHJlZSA9IHNhbXBsZVRhc2tUaHJlZTsgKi9cclxuXHJcbmNvbnNvbGUubG9nKGdldEFsbFRhc2tzKCkpO1xyXG5cclxuY29uc29sZS50YWJsZShnZXRBbGxQcm9qZWN0cygpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9