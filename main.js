const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");
const newSubmit = document.querySelector("#new-task-submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let task = input.value;
  if (task) {
    createEL(task);

    input.value = "";
    localStorage.setItem("data", JSON.stringify(task));
  } else {
    alert("must somthing writing");
  }
});


( function() {
    input.value = JSON.parse(localStorage.getItem(""));
})()

function createEL(task) {
  const taskEl = document.createElement("div");
  taskEl.classList.add("task");

  const contantEl = document.createElement("div");
  contantEl.classList.add("contant");
  taskEl.appendChild(contantEl);

  const input_task = document.createElement("input");
  input_task.type = "text";
  input_task.classList.add("text");
  input_task.value = task;
  input_task.setAttribute("readonly", "readonly");

  contantEl.appendChild(input_task);

  const actions_el = document.createElement("div");
  actions_el.classList.add("actions");

  taskEl.appendChild(actions_el);

  const edit_el = document.createElement("button");
  edit_el.innerText = "Edit";
  edit_el.classList.add("edit");

  const delete_el = document.createElement("button");
  delete_el.innerText = "Delete";
  delete_el.classList.add("delete");

  actions_el.appendChild(edit_el);
  actions_el.appendChild(delete_el);

  list_el.appendChild(taskEl);

  edit_el.addEventListener("click", () => {
    if (edit_el.innerText.toUpperCase() === "EDIT") {
      edit_el.innerText = "save";
      input_task.removeAttribute("readonly");
    } else {
      input_task.setAttribute("readonly", "readonly");
      edit_el.innerText = "Edit";
    }
  });

  delete_el.addEventListener("click", () => {
    list_el.removeChild(taskEl);
  });
}
