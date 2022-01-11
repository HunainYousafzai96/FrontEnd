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
  } else if (Name.length == 0) {
    document.getElementById("NameError").innerHTML = "Please Enter Name";
    Name = false;
  } else {
    document.getElementById("NameError").innerHTML =
      "Please Enter Valid Name [xyz@example.com]";
    Name = false;
  }

  if (EmailReg.test(Email)) {
    document.getElementById("EmailError").innerHTML = "";
    Email = true;
  } else if (Email.length == 0) {
    document.getElementById("EmailError").innerHTML =
      "Please Enter Email Address";
    Email = false;
  } else {
    document.getElementById("EmailError").innerHTML =
      "Please Enter Valid Email Address";
    Email = false;
  }

  if (Password.length == 0) {
    document.getElementById("PasswordError").innerHTML =
      "Please Enter Password [a-zA-Z0-9]";
    Password = false;
  } else if (Password_regex.test(Password)) {
    document.getElementById("PasswordError").innerHTML = "";
    Password = true;
  } else {
    document.getElementById("PasswordError").innerHTML =
      "Please Enter Valid Password [a-zA-Z0-9] ";
    Password = false;
  }

  if (Email && Name && Password) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function () {
  $("#open").click(function () {
    $("#open").hide();
    $("#closed").show();
    $("#password").attr("type", "text");
  });

  $("#closed").click(function () {
    $("#closed").hide();
    $("#open").show();
    $("#password").attr("type", "password");
  });
});
