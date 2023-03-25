import { getProjArr } from "./projectManager/projectManager";

const addProjArrLocalStorage = () => {
  const projArr = getProjArr();
  localStorage.setItem("projectsArr", JSON.stringify(projArr));
};

const addProjLocalStorageArr = (project) => {
  const localStorageProjArr = localStorage.getItem(
    JSON.parse(localStorage.getItem("projectsArr"))
  );

  
};

export { addProjArrLocalStorage };
