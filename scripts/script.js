$(document).ready(function () {
  console.log("doc is ready");

  // Define user data
  let userJSON = {
    email: "salehmb13@gmail.com",
    phoneNumber: "(256)322-8629",
    userName: "Saleh Basalim",
    birthdaydate: "10/10/1989",
    username: "Salehb89",
    password: "123456"
};

// Function to load user data into form fields
$("#loadData").click(() => {
  console.log("in button click event");
  $("#userName").val(userJSON.userName);
  $("#email").val(userJSON.email);
  $("#phoneNumber").val(userJSON.phoneNumber);

  // Convert the date format to "MM/DD/YYYY"
  let birthdayDateParts = userJSON.birthdaydate.split("-");
  let formattedBirthdayDate = birthdayDateParts[1] + "/" + birthdayDateParts[2] + "/" + birthdayDateParts[0];
  $("#birthdaydate").val(formattedBirthdayDate);

  $("#username").val(userJSON.username);
  $("#password").val(userJSON.password);

  alert("User profile data loaded successfully!");
});

  // Submit form
  $("#registrationForm").submit(function (event) {
    event.preventDefault(); // Prevent default form submission

    // Check if email and phone number fields are filled out
    if ($("#email").val() === "" || $("#phoneNumber").val() === "") {
      // Display error message
      $("#errorMessage").text("Email and phone number are required fields.");
    } else {
      // Hide error message if present
      $("#errorMessage").text("");
      // Display confirmation message
      $("#confirmationMessage").text("Form is being submitted...");
      // Simulate form submission
      setTimeout(function () {
        displayThankYouMessage();
      }, 2000);
    }
  });

  // Function to display "thank you" message
  function displayThankYouMessage() {
    $("#confirmationMessage").text(""); // Hide confirmation message
    $("#thankYou").show(); // Show the "thank you" message
    setTimeout(function () {
      $("#thankYou").hide(); // Hide the "thank you" message after 2 seconds
    }, 2000);
  }
// grab the element
var el = document.getElementById("submitButton");

// click event on that element, run named f/n
el.addEventListener("click", displayUserName);

function displayUserName() {
    // grab the value of the user input
    var elName = document.getElementById("userName");
    //do something with it
    document.getElementById("thankYou").style.display = "block";
    setTimeout(function () {
        document.getElementById("thankYou").style.display = "none";
    }, 2000);
}
});
