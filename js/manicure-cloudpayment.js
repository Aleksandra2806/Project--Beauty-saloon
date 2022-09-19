let payButton = document.getElementById("cloudpayment");
let language = "ru-RU";
function pay() {
  const widget = new cp.CloudPayments({
    language: language,
  });
  widget.pay("auth", {
    publicId: "test_api_00000000000000000000002",
    description: "Оплата услуг",
    amount: 20,
    currency: "USD",
    accountId: "user@example.com",
    invoiceId: "1234567",
    skin: "classic",
    autoClose: 5,
  });
}
payButton.addEventListener("click", pay);