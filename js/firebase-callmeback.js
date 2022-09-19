import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";
import { firebaseConfig } from "../js/firebase-config.js";
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const submitCall = document.getElementById("submitCall");
 
submitCall.addEventListener("click", (e) => {
  const username = document.getElementById("callname").value;
  const telephone = document.getElementById("calltelephone").value;
  const email = document.getElementById("callemail").value;
  set(ref(database, "callusers/" + username), {
    username: username,
    telephone: telephone,
    email: email,
  })
    .then(() => {
      alert("Успешная отправка. В ближайшее время мы с вами свяжемся!");
    })
    .catch((error) => {
      alert(error);
    });
});
