function validateForm() {
  var Email = document.forms["Forget"]["Email"].value;

  var EmailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (EmailReg.test(Email)) {
    document.getElementById("EmailError").innerHTML = "";
    Email = true;
  } else {
    document.getElementById("EmailError").style.color = "Red";
    document.getElementById("EmailError").innerHTML =
      "Please Enter Valid Email Address";
  }

  if (Email) {
    return true;
  } else {
    return false;
  }
}
