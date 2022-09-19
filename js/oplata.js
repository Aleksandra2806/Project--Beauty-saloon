let btnbepaid = document.getElementById('btnbepaid');
  function bepaidOpen() {
    document.getElementById('modal-id').style.display="block";
  }
btnbepaid.addEventListener('click', bepaidOpen);

document.getElementById("btnBePaidClose").addEventListener('click', function bePaidClose() {
  document.getElementById('modal-id').style.display="none";
})

let btncloudpayment = document.getElementById('btncloudpayment');
function cloudpaymentOpen() {
  document.getElementById('modal-cloudpayment').style.display="block";
}
btncloudpayment.addEventListener('click', cloudpaymentOpen);

document.getElementById("btncloudpaymentClose").addEventListener('click', function cloudpaymentClose() {
  document.getElementById('modal-cloudpayment').style.display="none";
})
