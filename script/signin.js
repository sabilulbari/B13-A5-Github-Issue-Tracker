document.getElementById("btn-login").addEventListener("click", function (event) {
  const userName = document.getElementById("username");
  const username = userName.value;

  const pinNumber = document.getElementById("password");
  const pin = pinNumber.value;

  if (username === "admin" && pin === "admin123") {
    alert("Log in Success");
    window.location.assign("issue_dashboard.html");
  } else {
    alert("Signin failed");
    event.number = "";
    event.pin = "";
    return;
  }
});
