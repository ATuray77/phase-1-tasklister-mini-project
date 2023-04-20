document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners();
});
//get the form and add an event listener
function addingEventListeners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit); //chsining select and listener
}

function handleFormSubmit(e) {
  e.preventDefault()
  const task = e.target[0].value //accessing the user input. Many ways to do this


  displayTaskValue(task)
}

//function to display the task
function displayTaskValue(taskValue) {
 const taskUl =  document.getElementById("tasks") //selecting ul
 
 //creates the li
 const taskli = document.createElement("li")
 taskli.textContent = taskValue
 //attach the li to the provided ul
 taskUl.appendChild(taskli)
}