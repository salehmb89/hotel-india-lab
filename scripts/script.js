// doctype,, putting $ before function, jq
// using jq to get button to change and show when something else is selected
// checkbox 
function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("submitButton");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }


  // function myFunction() {
  //   // Get the checkbox
  //   var checkBox = document.getElementById("shirtCheck");
  //   // Get the output text
  //   var text = document.getElementById("shirts");
  
  //   // If the checkbox is checked, display the output text
  //   if (checkBox.checked == true) {
  //     text.style.display = "block";
  //   } else {
  //     text.style.display = "none";
  //   }
  // }

  


  /*
  get a button taking it to somewhere
  ex. select state, takes you to counties in that state
  */
  
// input value from submit bar
  var el = document.getElementById("submitButton");

// click event on that element, run named f/n
el.addEventListener("click", displayuserEmail);

function displayuserEmail() {
  // grab the value of the user input
  var elName = document.getElementById("userEmail");
  //do something with it
// need to put info somewhere??
}
