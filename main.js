/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony export */   "getAllProjects": () => (/* binding */ getAllProjects)
/* harmony export */ });
/* harmony import */ var _toDoManager_toDoManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDoManager/toDoManager */ "./src/toDoManager/toDoManager.js");


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





/* export default projectManager */

/***/ }),

/***/ "./src/toDoManager/toDoManager.js":
/*!****************************************!*\
  !*** ./src/toDoManager/toDoManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// contains the different factory patterns and functions for 
// creating and modifying to do tasks

const tasks = [];

const toDoManager = () => {


    // factory pattern for creating a toDoTask
    const createToDoTask = (title, description, dueDate, priority, notes) => {


        return {
            title,
            description,
            dueDate,
            priority,
            notes
        }
    }

    // adds to do list task to tasks array;
    const addToDoTaskArr = (task) => {
        return tasks.push(task);
    }

    // returns all tasks inside tasks array;
    const getAllTasks = () => {
        return tasks;
    }

    // deletes all tasks in task array
    const deleteAllTasks = () => {
        tasks.forEach(task => task.pop);
    }

    // deletes single task
    const deleteTask = (index) => {
        let deletedTask;
        for (let i = 0; i < tasks.length; i++) {
            if (index === i) {
                deletedTask = tasks.splice(i, 1);

            }
        }

        return deletedTask;
    }

    return { createToDoTask, addToDoTaskArr, getAllTasks, deleteAllTasks, deleteTask }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoManager);

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

/* import projectManager from "./projectManager/projectManager"; */


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

const sampleTask = (0,_toDoManager_toDoManager__WEBPACK_IMPORTED_MODULE_0__["default"])().createToDoTask('title', 'description', '03/15/2023', 'low', 'notes');
const sampleTaskTwo = (0,_toDoManager_toDoManager__WEBPACK_IMPORTED_MODULE_0__["default"])().createToDoTask('taskTwo', 'descriptionTwo', '03/15/2023', 'medium', 'notes');
const sampleTaskThree = (0,_toDoManager_toDoManager__WEBPACK_IMPORTED_MODULE_0__["default"])().createToDoTask('taskThree', 'descriptionThree', '03/15/2023', 'medium', 'notes');
const sampleProject = (0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.createProject)('testProjectObject', []);

(0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.addTaskToProjectObj)(sampleProject, sampleTask);
(0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.addTaskToProjectObj)(sampleProject, sampleTaskTwo);
(0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.addTaskToProjectObj)(sampleProject, sampleTaskThree);
/* sampleProject.sampleTask = sampleTask;
sampleProject.sampleTaskTwo = sampleTaskTwo;
sampleProject.sampleTaskThree = sampleTaskThree; */
(0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.addProjectToProjectsArray)(sampleProject);
console.table((0,_projectManager_projectManager__WEBPACK_IMPORTED_MODULE_1__.getAllProjects)());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7O0FBRXJEOzs7O0FBSUE7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUV3Rjs7OztBQUl4Rjs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7OztBQUlBLGlFQUFlLFdBQVc7Ozs7OztVQ3REMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOb0Q7QUFDcEQsaUVBQWlFO0FBQytEOztBQUVoSSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjs7QUFFckIsbUJBQW1CLG9FQUFXO0FBQzlCLHNCQUFzQixvRUFBVztBQUNqQyx3QkFBd0Isb0VBQVc7QUFDbkMsc0JBQXNCLDZFQUFhOztBQUVuQyxtRkFBbUI7QUFDbkIsbUZBQW1CO0FBQ25CLG1GQUFtQjtBQUNuQjtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pELHlGQUF5QjtBQUN6QixjQUFjLDhFQUFjLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdE1hbmFnZXIvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9NYW5hZ2VyL3RvRG9NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9Eb01hbmFnZXIgZnJvbSBcIi4uL3RvRG9NYW5hZ2VyL3RvRG9NYW5hZ2VyXCI7XG5cbmNvbnN0IHByb2plY3RzID0gW107XG5cblxuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3RUaXRsZSwgdGFza3NBcnIpID0+IHtcblxuICAgIHJldHVybiB7IHByb2plY3RUaXRsZSwgdGFza3NBcnIgfTtcbn1cblxuY29uc3QgYWRkUHJvamVjdFRvUHJvamVjdHNBcnJheSA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbn1cblxuY29uc3QgZ2V0QWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5jb25zdCBhZGRUYXNrVG9Qcm9qZWN0T2JqID0gKHByb2plY3QsIHRhc2spID0+IHtcbiAgICBwcm9qZWN0LnRhc2tzQXJyLnB1c2godGFzaylcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgZ2V0QWxsUHJvamVjdHMsIGFkZFByb2plY3RUb1Byb2plY3RzQXJyYXksIGFkZFRhc2tUb1Byb2plY3RPYmogfVxuXG5cblxuLyogZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1hbmFnZXIgKi8iLCIvLyBjb250YWlucyB0aGUgZGlmZmVyZW50IGZhY3RvcnkgcGF0dGVybnMgYW5kIGZ1bmN0aW9ucyBmb3IgXG4vLyBjcmVhdGluZyBhbmQgbW9kaWZ5aW5nIHRvIGRvIHRhc2tzXG5cbmNvbnN0IHRhc2tzID0gW107XG5cbmNvbnN0IHRvRG9NYW5hZ2VyID0gKCkgPT4ge1xuXG5cbiAgICAvLyBmYWN0b3J5IHBhdHRlcm4gZm9yIGNyZWF0aW5nIGEgdG9Eb1Rhc2tcbiAgICBjb25zdCBjcmVhdGVUb0RvVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkdWVEYXRlLFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBub3Rlc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkcyB0byBkbyBsaXN0IHRhc2sgdG8gdGFza3MgYXJyYXk7XG4gICAgY29uc3QgYWRkVG9Eb1Rhc2tBcnIgPSAodGFzaykgPT4ge1xuICAgICAgICByZXR1cm4gdGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIGFsbCB0YXNrcyBpbnNpZGUgdGFza3MgYXJyYXk7XG4gICAgY29uc3QgZ2V0QWxsVGFza3MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0YXNrcztcbiAgICB9XG5cbiAgICAvLyBkZWxldGVzIGFsbCB0YXNrcyBpbiB0YXNrIGFycmF5XG4gICAgY29uc3QgZGVsZXRlQWxsVGFza3MgPSAoKSA9PiB7XG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB0YXNrLnBvcCk7XG4gICAgfVxuXG4gICAgLy8gZGVsZXRlcyBzaW5nbGUgdGFza1xuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGRlbGV0ZWRUYXNrO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcbiAgICAgICAgICAgICAgICBkZWxldGVkVGFzayA9IHRhc2tzLnNwbGljZShpLCAxKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlbGV0ZWRUYXNrO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZVRvRG9UYXNrLCBhZGRUb0RvVGFza0FyciwgZ2V0QWxsVGFza3MsIGRlbGV0ZUFsbFRhc2tzLCBkZWxldGVUYXNrIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHRvRG9NYW5hZ2VyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRvRG9NYW5hZ2VyIGZyb20gXCIuL3RvRG9NYW5hZ2VyL3RvRG9NYW5hZ2VyXCI7XG4vKiBpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdE1hbmFnZXIvcHJvamVjdE1hbmFnZXJcIjsgKi9cbmltcG9ydCB7IGFkZFRhc2tUb1Byb2plY3RPYmosIGNyZWF0ZVByb2plY3QsIGFkZFByb2plY3RUb1Byb2plY3RzQXJyYXksIGdldEFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZXIvcHJvamVjdE1hbmFnZXJcIjtcblxuLyogdG9Eb01hbmFnZXIoKTsgKi9cblxuLyogY29uc3Qgc2FtcGxlVGFzayA9IHRvRG9NYW5hZ2VyKCkuY3JlYXRlVG9Eb1Rhc2soJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJzAzLzE1LzIwMjMnLCAnbG93JywgJ25vdGVzJyk7XG50b0RvTWFuYWdlcigpLmFkZFRvRG9UYXNrQXJyKHNhbXBsZVRhc2spO1xuY29uc29sZS50YWJsZSh0b0RvTWFuYWdlcigpLmdldEFsbFRhc2tzKCkpO1xuY29uc3QgZGVsZXRlVGFzayA9IHRvRG9NYW5hZ2VyKCkuZGVsZXRlVGFzaygwKTtcbmNvbnNvbGUubG9nKFwiVGFza3MgaGF2ZSBiZWVuIGRlbGV0ZWQ6XCIsIGRlbGV0ZVRhc2spO1xuY29uc29sZS5sb2codG9Eb01hbmFnZXIoKS5nZXRBbGxUYXNrcygpKTtcblxuY29uc3QgdGVzdCA9IFsxLCAyLCAzXTtcblxuY29uc3QgcmVtb3ZlID0gdGVzdC5zcGxpY2UoMCwgMSk7XG5jb25zb2xlLmxvZyhyZW1vdmUpOyAqL1xuXG5jb25zdCBzYW1wbGVUYXNrID0gdG9Eb01hbmFnZXIoKS5jcmVhdGVUb0RvVGFzaygndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnMDMvMTUvMjAyMycsICdsb3cnLCAnbm90ZXMnKTtcbmNvbnN0IHNhbXBsZVRhc2tUd28gPSB0b0RvTWFuYWdlcigpLmNyZWF0ZVRvRG9UYXNrKCd0YXNrVHdvJywgJ2Rlc2NyaXB0aW9uVHdvJywgJzAzLzE1LzIwMjMnLCAnbWVkaXVtJywgJ25vdGVzJyk7XG5jb25zdCBzYW1wbGVUYXNrVGhyZWUgPSB0b0RvTWFuYWdlcigpLmNyZWF0ZVRvRG9UYXNrKCd0YXNrVGhyZWUnLCAnZGVzY3JpcHRpb25UaHJlZScsICcwMy8xNS8yMDIzJywgJ21lZGl1bScsICdub3RlcycpO1xuY29uc3Qgc2FtcGxlUHJvamVjdCA9IGNyZWF0ZVByb2plY3QoJ3Rlc3RQcm9qZWN0T2JqZWN0JywgW10pO1xuXG5hZGRUYXNrVG9Qcm9qZWN0T2JqKHNhbXBsZVByb2plY3QsIHNhbXBsZVRhc2spO1xuYWRkVGFza1RvUHJvamVjdE9iaihzYW1wbGVQcm9qZWN0LCBzYW1wbGVUYXNrVHdvKTtcbmFkZFRhc2tUb1Byb2plY3RPYmooc2FtcGxlUHJvamVjdCwgc2FtcGxlVGFza1RocmVlKTtcbi8qIHNhbXBsZVByb2plY3Quc2FtcGxlVGFzayA9IHNhbXBsZVRhc2s7XG5zYW1wbGVQcm9qZWN0LnNhbXBsZVRhc2tUd28gPSBzYW1wbGVUYXNrVHdvO1xuc2FtcGxlUHJvamVjdC5zYW1wbGVUYXNrVGhyZWUgPSBzYW1wbGVUYXNrVGhyZWU7ICovXG5hZGRQcm9qZWN0VG9Qcm9qZWN0c0FycmF5KHNhbXBsZVByb2plY3QpO1xuY29uc29sZS50YWJsZShnZXRBbGxQcm9qZWN0cygpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=