document.addEventListener("DOMContentLoaded", function(event) {
  init();
});

function init() {
  mobileCheck()
}

function mobileCheck() {
  if (screen.width <= 699) {
      document.location = "thanks.html";
  }
}

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
    fname.style.border = "3px solid #E74C3C";
    fname.style.background = "#F5B7B1";
    valid = false;
  }

  if(lname.value == "") {
    lname.style.border = "3px solid #E74C3C";
    lname.style.background = "#F5B7B1";
    valid = false;
  }

  if(validateEmail(emailAddress.value) == false) {
    valid = false;
  }

  return valid;
}

function resetStyle(element) {
  element.style.background = "white";
  element.style.border = "3px solid white";
}

function invalidText() {
  var errorMsg = "";
  if (document.getElementById("id1").validity.rangeUnderflow) {
    errorMsg = "Value too small";
  } else {
    txt = "Input OK";
  }
  document.getElementById("demo").innerHTML = txt;
}
