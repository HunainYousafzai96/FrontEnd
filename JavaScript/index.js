function validateForm() {
  var Email = document.forms["index"]["Email"].value;
  var Password = document.forms["index"]["Password"].value;

  var Password_regex = /^[a-zA-Z0-9]+$/;

  var EmailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (EmailReg.test(Email)) {
    document.getElementById("EmailError").innerHTML = "";
    Email = true;
  } else {
    document.getElementById("EmailError").style.color = "Red";
    document.getElementById("EmailError").innerHTML =
      "Please Enter Valid Email Address";
    Email = false;
  }

  if (Password_regex.test(Password)) {
    document.getElementById("PasswordError").innerHTML = "";
    Password = true;
  } else {
    document.getElementById("PasswordError").style.color = "Red";
    document.getElementById("PasswordError").innerHTML =
      "Please Enter Valid Password";
    Password = false;
  }

  if (Email && Password) {
    return true;
  } else {
    return false;
  }
}
function Clear() {
  document.getElementById("PasswordError").innerHTML = "";
  document.getElementById("EmailError").innerHTML = "";
}
