function validateForm() {
  var Email = document.forms["index"]["Email"].value;
  var Password = document.forms["index"]["Password"].value;

  var Password_regex = /^[a-zA-Z0-9]+$/;

  var EmailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

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

  if (Email && Password) {
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
