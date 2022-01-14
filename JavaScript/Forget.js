function validateForm() {
  var Email = document.forms["Forget"]["Email"].value;

  var email = false;

  var EmailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (EmailReg.test(Email)) {
    document.getElementById("EmailError").innerHTML = "";
    email = true;
  } else {
    document.getElementById("EmailError").style.color = "Red";
    document.getElementById("EmailError").innerHTML =
      "Please Enter Valid Email Address";
  }

  if (email) {
    return true;
  } else {
    return false;
  }
}
function Clear() {
  document.getElementById("EmailError").innerHTML = "";
}
