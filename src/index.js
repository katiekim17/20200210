import "./styles.css";

const clockBox = document.querySelector(".js-clock"),
  time = clockBox.querySelector("p");

function clockFn() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const second = date.getSeconds();

  time.innerHTML = `${hour < 10 ? `AM 0${hour}` : `PM ${hour}`}
  : ${min < 10 ? `0${min}` : min}
  : ${second < 10 ? `0${second}` : second}`;
  //console.log("clock", time);
}

function init() {
  clockFn();
  setInterval(clockFn, 1000);
}
init();
