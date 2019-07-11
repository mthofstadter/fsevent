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
  window.alert("hello");
  return true
}
