// модалка
let cancelbtnopl = document.querySelector('.cancel-btn');

function modalOpen() {
  document.getElementById('modal-id').style.display="block";
}
function modalClose() {
  document.getElementById('modal-id').style.display="none";
}
cancelbtnopl.addEventListener('click', modalClose);

// календарь
document.getElementById('dataToday').valueAsDate = new Date();
document.getElementById('timeToday').value = new Date().toLocaleTimeString().slice(0,-3);
document.getElementById('timeTodayC').value = new Date().toLocaleTimeString().slice(0,-3);

//  к оплате
function koplate() {
  document.querySelector(".koplate").style.display="block";
}
document.querySelector(".online-btn-opl").addEventListener('click', koplate);

export {modalOpen};

