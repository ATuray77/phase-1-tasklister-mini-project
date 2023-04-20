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
 const taskli = document.createElement("li") //creates the li

 const deleteTaskBtn = document.createElement("button") //create the delete button
 deleteTaskBtn.textContent =  "X" //adds text content to the delete button
 deleteTaskBtn.addEventListener("click", handleDeleteTask) //adds a click event to delete button
 
 
 taskli.textContent = taskValue + " " //adds a text to the delete button
 taskli.appendChild(deleteTaskBtn) //adds delete button to the task list's li
 taskUl.appendChild(taskli)  //adds task list's li to the taskUl

}

function handleDeleteTask(e) {  //delete function
  e.target.parentNode.remove()
  
}