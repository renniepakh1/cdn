function makeRazorpayPayment(index) {
  var razorpayButtons = document.getElementsByClassName(
    "PaymentButton--rzp-light-standard"
  );
  razorpayButtons[index].click();
}

function attachPaymentListener() {
  const button1 = $(".razor-payment-1");
  const button2 = $(".razor-payment-2");

  const buttons = [button1, button2];
  buttons.forEach(function (button, index) {
    button.on("click", function () {
      makeRazorpayPayment(index);
    });
  });
}
$(document).ready(function () {
  attachPaymentListener();
});