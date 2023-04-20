document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners();
});

let taskObjArr = []  //an empty array


//get the form and add an event listener
function addingEventListeners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit); //chasining select and adding listener
    document.getElementById("sort-tasks").addEventListener("change", sortTasks)

}

function handleFormSubmit(e) {
  e.preventDefault()
  const task = e.target[0].value //accessing the user input. Many ways to do this

  const priorityLevel =parseInt( e.target.priority.value) //selecting the priority level value

 //creating an object for tasks. Every task created should appear here
    const taskObj = {task, priorityLevel} 
    taskObjArr.push(taskObj)
    
    sortTasks()

  displayTasksValues()
}

//function to display the tasks
function displayTasksValues() {
 const taskUl =  document.getElementById("tasks") //selecting ul
 taskUl.innerHTML = ""

 taskObjArr.forEach((taskValue) => {

  const taskli = document.createElement("li") //creates the li
  const deleteTaskBtn = document.createElement("button") //create the delete button

  deleteTaskBtn.textContent =  "X" //adds text content to the delete button
  deleteTaskBtn.addEventListener("click", (e) => handleDeleteTask(e, taskValue)) //adds a click event to delete button

  taskli.textContent = taskValue.task + " " //adds a text to the delete button
  taskli.style.color = getPriorityColor(taskValue.priorityLevel)
  taskli.appendChild(deleteTaskBtn) //adds delete button to the task list's li
  taskUl.appendChild(taskli)  //adds task list's li to the taskUl
 })
}

function handleDeleteTask(e, task) {  //delete function
  taskObjArr.filter((element) => element.task !== task.task)
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

//sort function from external source: Monica's blog
function sortTasks() {
  const sortTasksSelect = document.getElementById("sort-tasks")
  if (sortTasksSelect.value === "h-l") {
    taskObjArr.sort((a, b) => a.priorityLevel - b.priorityLevel)
  } else {
    taskObjArr.sort((a, b) => b.priorityLevel - a.priorityLevel)
  }
  console.log(taskObjArr)
  //displayTaskValue()
}