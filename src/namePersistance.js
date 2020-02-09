const input = document.querySelector(".js-input"),
  greeting = document.querySelector(".js-display"),
  USERNAME = "Name",
  DISPLAY = "showing";

function saveNameHandle(event) {
  event.preventDefault();
  const currentName = input.value;
  saveName(currentName);
  paintName(currentName);
}

function saveName(currentName) {
  // console.log("loadName", input.value);
  localStorage.setItem("Name", input.value);
}

function paintName(currentName) {
  input.classList.remove(DISPLAY);
  greeting.classList.add(DISPLAY);
  greeting.innerText = `Hi!,${currentName}`;
  clearFn();
}

function clearFn() {
  const stag = document.createElement("span"),
    btn = document.createElement("button");
  btn.innerHTML = "clear and push F5";
  btn.addEventListener("click", function(e) {
    // console.log("t");
    localStorage.clear();
  });
  stag.appendChild(btn);
  greeting.appendChild(stag);
}

function loadName() {
  const loadName = localStorage.getItem(USERNAME);
  if (loadName === null) {
    askName();
  } else {
    paintName(loadName);
  }
}

function askName() {
  input.classList.add(DISPLAY);
  greeting.classList.remove(DISPLAY);
}

function init() {
  loadName();
  input.addEventListener("change", saveNameHandle);
}
init();
