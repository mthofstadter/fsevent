document.addEventListener("DOMContentLoaded", function(event) {
  init();
});

/*
function init() {
  mobileCheck()
}

function mobileCheck() {
  if (screen.width <= 699) {
      document.location = "thanks.html";
  }
}
*/

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validate() {
  var fname = document.getElementById("first-name");
  var lname = document.getElementById("last-name");
  var emailAddress = document.getElementById("e-mail");
  var valid = true;

  if(fname.value == "") {
    fname.setCustomValidity("Field Required");
    document.getElementById('fn-error').innerHTML="Field Required";
    valid = false;
  }

  if(lname.value == "") {
    lname.setCustomValidity("Field Required");
    document.getElementById('ln-error').innerHTML="Field Required";
    valid = false;
  }

  if(emailAddress.value == "") {
    emailAddress.setCustomValidity("Field Required");
    document.getElementById('em-error').innerHTML="Field Required";
    valid = false;
  }

  else if(validateEmail(emailAddress.value) == false) {
    emailAddress.setCustomValidity("Invalid E-mail");
    document.getElementById('em-error').innerHTML="Invalid E-mail";
    valid = false;
  }

  if(valid) {
    setTimeout("location.href = 'thanks.html';",100);
  }
  return valid;
}

function resetStyle(element) {
  element.setCustomValidity("");
  if(element.id == "first-name") {
    document.getElementById('fn-error').innerHTML="";
  }
  else if(element.id == "last-name") {
    document.getElementById('ln-error').innerHTML="";
  }
  else if(element.id == "e-mail") {
    document.getElementById('em-error').innerHTML="";
  }
}
