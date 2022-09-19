let buttonMob = document.getElementById("nav__mobile");
let navMenu = document.querySelector(".navbar");
buttonMob.onclick = function (e) {
  e.preventDefault();
  buttonMob.classList.toggle("active");
  navMenu.classList.toggle("active");
};

// поиск
let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

// счетчик
let number = document.querySelector(".number"),
  numberTop = number.getBoundingClientRect().top,
  start = +number.innerHTML,
  end = +number.dataset.max;

window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset > numberTop - window.innerHeight / 2) {
    this.removeEventListener("scroll", onScroll);
    let interval = setInterval(function () {
      number.innerHTML = ++start;
      if (start == end) {
        clearInterval(interval);
      }
    }, 10);
  }
});

let number1 = document.querySelector(".number1"),
  number1Top = number1.getBoundingClientRect().top,
  start1 = +number1.innerHTML,
  end1 = +number1.dataset.max;

window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset > number1Top - window.innerHeight / 2) {
    this.removeEventListener("scroll", onScroll);
    let interval1 = setInterval(function () {
      number1.innerHTML = ++start1;
      if (start1 == end1) {
        clearInterval(interval1);
      }
    }, 10);
  }
});

let number2 = document.querySelector(".number2"),
  number2Top = number2.getBoundingClientRect().top,
  start2 = +number2.innerHTML,
  end2 = +number2.dataset.max;

window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset > number2Top - window.innerHeight / 2) {
    this.removeEventListener("scroll", onScroll);
    let interval2 = setInterval(function () {
      number2.innerHTML = ++start2;
      if (start2 == end2) {
        clearInterval(interval2);
      }
    }, 10);
  }
});

let number3 = document.querySelector(".number3"),
  number3Top = number3.getBoundingClientRect().top,
  start3 = +number3.innerHTML,
  end3 = +number3.dataset.max;

window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset > number3Top - window.innerHeight / 2) {
    this.removeEventListener("scroll", onScroll);
    let interval3 = setInterval(function () {
      number3.innerHTML = ++start3;
      if (start3 == end3) {
        clearInterval(interval3);
      }
    }, 10);
  }
});

let number4 = document.querySelector(".number4"),
  number4Top = number4.getBoundingClientRect().top,
  start4 = +number4.innerHTML,
  end4 = +number4.dataset.max;

window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset > number4Top - window.innerHeight / 2) {
    this.removeEventListener("scroll", onScroll);
    let interval4 = setInterval(function () {
      number4.innerHTML = ++start4;
      if (start4 == end4) {
        clearInterval(interval4);
      }
    }, 10);
  }
});

let number5 = document.querySelector(".number5"),
  number5Top = number5.getBoundingClientRect().top,
  start5 = +number4.innerHTML,
  end5 = +number5.dataset.max;

window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset > number5Top - window.innerHeight / 2) {
    this.removeEventListener("scroll", onScroll);
    let interval5 = setInterval(function () {
      number5.innerHTML = ++start5;
      if (start5 == end5) {
        clearInterval(interval5);
      }
    }, 10);
  }
});

// обратный отсчет
const countdownElement = document.querySelector(".countdown");
const items = document.querySelectorAll(".countdown-item > h4");
let countdownDate = new Date(2022, 11, 18, 10, 0, 0).getTime();

function getCountTime() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(distance / oneDay);
  let hours = Math.floor((distance % oneDay) / oneHour);
  let minutes = Math.floor((distance % oneHour) / oneMinute);
  let seconds = Math.floor((distance % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  items.forEach(function (item, index) {
    item.textContent = values[index];
  });

  if (distance < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = "<h4 class='expired'>Время вышло!</h4>";
  }
}
let countdown = setInterval(getCountTime, 1000);
getCountTime();