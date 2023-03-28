// Creates the header for the project and the tasks currently
// rendered

const renderProjectHeader = (...args) => {
  // const taskHeaderContainer = document.createElement("div");
  // taskHeaderContainer.classList.add("taskHeaderContainer");
  const [currentProj, ]
  let projectTitle = currentProj.projectTitle;
  if (viewType === "default") {
    projectTitle = "Home";
  } else if (viewType === "day") {
    projectTitle = "Daily";
  } else if (viewType === "week") {
    projectTitle = "Weekly";
  }

  const taskContainer = document.querySelector(".taskContainer");

  taskContainer.innerHTML = `
  <div class="taskHeaderContainer">
    <h3>${currentProj.projectTitle} Header</h3>
  </div>
  <div class="tasks"></div>`;

  // taskContainer.appendChild(taskHeaderContainer);

  // const h3Header = document.createElement("h3");
  // h3Header.textContent = "Task Header";
  // taskHeaderContainer.appendChild(h3Header);
};

export { renderProjectHeader };
