// define Ui elements
const total_bill = document.getElementById("totalBil");
const tipAmount = document.getElementById("tipAmount");
const calculate_btn = document.getElementById("calculate");
const error = document.querySelector(".error");

const hideError = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 3000);
};

// calculate function
calculate_btn.addEventListener("click", function (e) {
  e.preventDefault();
  const bill = document.getElementsByName("bill")[0].value;
  const rate_service = document.getElementsByName("rate-service")[0].value;

  console.log(bill, rate_service);

  if (bill == "" || rate_service == "") {
    error.innerHTML = "please fill bill and rate-service.";
    error.style.color = "#ff0000";
    error.style.display = "block";

    hideError();
  } else if (isNaN(bill)) {
    error.innerHTML = "Please enter a number.";
    error.style.color = "#ff0000";
    error.style.display = "block";

    hideError();
  } else {
    let tip = Number(bill) * rate_service;
    console.log(tip);
    tip = Math.round(tip);

    tipAmount.innerHTML = `Tip Amount: ${tip}`;
    total_bill.innerHTML = `Total Bill: ${tip + Number(bill)}`;

    error.innerHTML = "Tip Calculator Successfully";
    error.style.color = "#ff6689";
    document.getElementsByName("bill")[0].value = "";
    document.getElementsByName("rate-service")[0].value = "";
  }
});
