const taskInp = document.querySelector("#task");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const task = taskInp.value;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${task}</span>
    <div class="btns">
      <button id="done">Done</button>
      <button id="edit">Edit</button>
      <button id="delete">Delete</button>
    </div>
  `;

  list.appendChild(li);
  taskInp.value = "";

  // done function
  const doneBtn = li.querySelector("#done");
  doneBtn.onclick = () => {
    li.querySelector("span").style.color = "aqua";
    li.querySelector("span").style.fontFamily = "monospace";
    li.querySelector("span").style.textDecoration = "line-through";
  };

  // delete function
  const deleteBtn = li.querySelector("#delete");
  deleteBtn.onclick = () => {
    list.removeChild(li);
    // li.remove();
  };

  // edit function
  const editBtn = li.querySelector("#edit");
  editBtn.onclick = () => {
    const span = li.querySelector("span");
    const newTask = prompt("Update your task", span.textContent);
    span.textContent = newTask;
  };
});
