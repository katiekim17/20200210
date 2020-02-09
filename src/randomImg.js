const body = document.querySelector("body");

const IMG_NUM = 3;

function paintImage(num) {
  const img = new Image();
  img.src = `src/img/img${num + 1}.jpg`;
  console.log(img.src);
  img.classList.add("bgImg");
  body.prepend(img);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUM);
  return number;
}

function init() {
  const randomNum = getRandom();
  paintImage(randomNum);
}

init();
