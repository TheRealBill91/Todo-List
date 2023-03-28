// Creates the header for the project and the tasks currently
// rendered

const renderProjectHeader = (projProperty) => {
  const projectTitle = determineHeaderTitle(projProperty);

  const taskContainer = document.querySelector(".taskContainer");
  taskContainer.innerHTML = `
  <div class="taskHeaderContainer">
    <h3>${projectTitle} Task's</h3>
  </div>
  <div class="tasks"></div>`;

  // taskContainer.appendChild(taskHeaderContainer);

  // const h3Header = document.createElement("h3");
  // h3Header.textContent = "Task Header";
  // taskHeaderContainer.appendChild(h3Header);
};

const determineHeaderTitle = (projProperty) => {
  let projTitle;
  switch (projProperty) {
    case "default":
      projTitle = "Inbox";
      break;
    case "day":
      projTitle = "Daily";
      break;
    case "week":
      projTitle = "Weekly";
      break;
    default:
      projTitle = projProperty.projectTitle;
      break;
  }

  return projTitle;
};

export { renderProjectHeader };
