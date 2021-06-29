document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form")
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const description = document.getElementById("new-task-description").value 
    const eTask = document.getElementById("tasks")
    const list = document.createElement("li")
    list.innerText = description 
    eTask.append(list)
  } )
});




