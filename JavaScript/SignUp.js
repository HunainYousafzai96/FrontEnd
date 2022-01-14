function validateForm() {
  var Email = document.forms["SignUp"]["Email"].value;
  var Name = document.forms["SignUp"]["Name"].value;
  var Password = document.forms["SignUp"]["Password"].value;
  var Name_regex = /^[a-zA-Z\s]+$/;

  var Password_regex = /^[a-zA-Z0-9]+$/;

  var EmailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (Name_regex.test(Name)) {
    document.getElementById("NameError").innerHTML = "";
    Name = true;
  } else {
    document.getElementById("NameError").style.color = "Red";
    document.getElementById("NameError").innerHTML = "Please Enter Valid Name";
    Name = false;
  }

  if (EmailReg.test(Email)) {
    document.getElementById("EmailError").innerHTML = "";
    Email = true;
  } else {
    document.getElementById("EmailError").style.color = "Red";
    document.getElementById("EmailError").innerHTML =
      "Please Enter Valid Email";
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

  if (Email && Name && Password) {
    return true;
  } else {
    return false;
  }
}
function Clear() {
  document.getElementById("NameError").innerHTML = "";
  document.getElementById("PasswordError").innerHTML = "";
  document.getElementById("EmailError").innerHTML = "";
}
