const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#btn-check");
const message = document.querySelector("#message-box");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const notes = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      let cashToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(cashToBeReturned);
    } else {
      showMessage("Cash amount is less than 'Bill Amount'.");
    }
  } else {
    showMessage("Invalid 'Bill Amount', please check again.");
  }
});

//Helper functions -

function calculateChange(cashToBeReturned) {
  for (let i = 0; i < notes.length; i++) {
    let numberOfNotes = Math.trunc(cashToBeReturned / notes[i]);
    cashToBeReturned %= notes[i];
    noOfNotes[i].textContent = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(text) {
  message.style.display = "block";
  message.textContent = text;
  message.style.color = "red";
}
