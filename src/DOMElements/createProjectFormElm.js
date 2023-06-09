export const createProjInputFormElm = () => {
  const projInputForm = document.createElement("form");
  projInputForm.classList.add("projectInputForm");
  projInputForm.innerHTML = `
    <label class="projectTitle" for="projectTitle">
  Project Title
  <div>
    <input class="projTitleInput" type="text" name="projectTitle" id="projectTitle" required="">
    <button class="projSubmitBtn" type="submit">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg></button>
   
    <button class="closeProjectInputBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg></button>
   
  </div>
</label>


`;

  return projInputForm;
};
