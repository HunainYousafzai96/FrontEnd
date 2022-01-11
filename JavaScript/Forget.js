function validateForm() {
  var Email = document.forms["Forget"]["Email"].value;

  var email = false;

  var EmailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (EmailReg.test(Email)) {
    document.getElementById("EmailError").innerHTML = "";
    email = true;
  } else if (Email.length == 0) {
    document.getElementById("EmailError").innerHTML =
      "Please Enter Email Address";
  } else {
    document.getElementById("EmailError").innerHTML =
      "Please Enter Valid Email Address";
  }

  if (email) {
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
