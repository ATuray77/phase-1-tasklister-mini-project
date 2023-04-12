document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //console.log('js loading...')
  let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
     e.preventDefault()
     buildTaskList(e.target['new-task-description'].value)
     form.reset()
  }) 
});


//function to build to Task Lister elements
function buildTaskList(todo){
let li = document.createElement('li')
let btn = document.createElement('button')
btn.textContent = 'X'
btn.addEventListener('click', handleDelete)
li.textContent = `${todo} `
li.appendChild(btn)
document.querySelector('#tasks').appendChild(li)


}

function handleDelete(e) {
  e.target.parentNode.remove()
}
