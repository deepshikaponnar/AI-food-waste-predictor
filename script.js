document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to FlowSenses!");
});

function registerUser(event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("fullname", fullname);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration Successful!");

    window.location.href = "login.html";
}

function showPrediction() {
    alert("AI Food Waste Prediction feature will be added soon!");
}
