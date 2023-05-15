function showCardDetails() {
  let cardDetails = document.getElementById("card-det");
  let selectedMOP = document.querySelector('input[name="optradio"]:checked').value;

  if (selectedMOP === "cash") {
    cardDetails.style.display = "none";
  } else if (selectedMOP === "credit") {
    cardDetails.style.display = "";
  } else {
    cardDetails.style.display = "none";
  }
}

$(document).ready(function() {
  $('#terms').modal('show');
});