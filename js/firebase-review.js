import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";
import { firebaseConfig } from "../js/firebase-config.js";
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const submitReview = document.getElementById("submitreview");

submitReview.addEventListener("click", (e) => {
  const username = document.getElementById("reviewname").value;
  const telephone = document.getElementById("reviewtelephone").value;
  const email = document.getElementById("reviewemail").value;
  const service = document.getElementById("reviewservice").value;
  const review = document.getElementById("reviewRev").value;
  set(ref(database, "review/" + username), {
    username: username,
    telephone: telephone,
    email: email,
    service: service,
    review: review,
  })
    .then(() => {
      alert("Спасибо за ваш отзыв!");
    })
    .catch((error) => {
      alert(error);
    });
});