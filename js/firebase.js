import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";
import { firebaseConfig } from "../js/firebase-config.js";
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const submitData = document.getElementById("submitData");

submitData.addEventListener("click", (e) => {
  const service = document.getElementById("service").value;
  const username = document.getElementById("uname").value;
  const telephone = document.getElementById("telephone").value;
  const dataToday = document.getElementById("dataToday").value;
  const timeToday = document.getElementById("timeToday").value;
  const timeTodayC = document.getElementById("timeTodayC").value;
  set(ref(database, "users/" + username), {
    service: service,
    username: username,
    telephone: telephone,
    dataToday: dataToday,
    timeToday: timeToday,
    timeTodayC: timeTodayC,
  })
    .then(() => {
      alert("Вы успешно записаны!");
    })
    .catch((error) => {
      alert(error);
    });
});