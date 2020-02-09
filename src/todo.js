const form = document.querySelector(".js-toDos"),
  tInput = form.querySelector(".js-todoInput"),
  ul = document.querySelector(".js-toDoList");

const TODOS = "TODO";
let toDosArray = [];

function paintToList(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  const newId = toDosArray.length + 1;

  span.innerText = text;
  btn.innerText = "X";
  btn.addEventListener("click", btnFn);

  li.appendChild(span);
  li.appendChild(btn);
  li.id = newId;
  ul.appendChild(li);

  const toDosObj = {
    id: newId,
    list: text
  };

  toDosArray.push(toDosObj); // [{id, list}]

  // console.log("toDOs:", toDosObj);
  saveToDos();
}

function btnFn(e) {
  // console.log("b", e.target);
  const btn = e.target;
  const li = btn.parentNode;
  ul.removeChild(li);
  const clearList = toDosArray.filter(function(val) {
    return val.id !== parseInt(li.id);
  });
  toDosArray = clearList;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS, JSON.stringify(toDosArray));
  //console.log("safe", localStorage.getItem(TODOS));
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS);

  //console.log("load L:", toDos);
  if (toDos !== null) {
    const parseToDos = JSON.parse(toDos);
    //console.log("parse", parseToDos);
    parseToDos.forEach(function(val) {
      paintToList(val.list); // paint what you want. id or list? or text?
    });
  }
}

function toDosFn(event) {
  //console.log("toDosFn: ", tInput.value);
  event.preventDefault(); //-> if you do not this one, you always get reload
  const text = tInput.value;
  tInput.value = "";

  paintToList(text);
  saveToDos(text);
}

function init() {
  loadToDos();
  form.addEventListener("submit", toDosFn);
}

init();
