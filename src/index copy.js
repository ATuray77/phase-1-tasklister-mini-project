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

  const priorityLevel =parseInt( e.target.priority.value) //selecting the priority level value


  displayTaskValue(task, priorityLevel)
}

//function to display the task
function displayTaskValue(taskValue, priorityLevel) {
 const taskUl =  document.getElementById("tasks") //selecting ul
 const taskli = document.createElement("li") //creates the li

 const deleteTaskBtn = document.createElement("button") //create the delete button
 deleteTaskBtn.textContent =  "X" //adds text content to the delete button
 deleteTaskBtn.addEventListener("click", handleDeleteTask) //adds a click event to delete button
 
 
 taskli.textContent = taskValue + " " //adds a text to the delete button
 taskli.style.color = getPriorityColor(priorityLevel)
 taskli.appendChild(deleteTaskBtn) //adds delete button to the task list's li
 taskUl.appendChild(taskli)  //adds task list's li to the taskUl

}

function handleDeleteTask(e) {  //delete function
  console.log(e)
  e.target.parentNode.remove() 
}

function getPriorityColor(priorityLevel){
  if (priorityLevel === 1) {
      return "red"
  } else if (priorityLevel === 2) {
    return "blue"
  } else {
    return "green"
  }

}