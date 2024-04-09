$(document).ready(function () {
  console.log("doc is ready");

});

let userData = ["alec", "somethinglese"];
let userJSON = {
  email: "alecmo@gmail.com", phoneNumber: "(256)989-3847", userName: "Alec Moore"
};

$("#loadData").click(() => {
  console.log("in button click event");

  $("#userName").val(userJSON.userName);
  $("#email").val(userJSON.email);
  $("#phoneNumber").val(userJSON.phoneNumber);
});

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

var el = document.getElementById("submitButton");

// click event on that element, run named f/n
el.addEventListener("click", displayUserName);

function displayUserName() {
  // grab the value of the user input
  var elName = document.getElementById("userName");
  //do something with it

  //don't use an alert
  alert(elName.value);
}

//nsole.log(elName.value);

$("#btn").on("click", () => {
  console.log("here");
  let selectedSize;
  console.log("val" + selectedSize);
  if ($("input:radio[name='size']").is(":checked")) {
    selectedSize = $("input[name='size']:checked").val();
    // show the output:
  }
  output.innerText = selectedSize
    ? `You selected ${selectedSize}`
    : `You haven't selected any size`;
});

let instrumentNames = [
  ["guitar", ["Plays Guitar Hero", "Beginner", "Intermediate", "Pro"]],
  ["drums", ["Beginner", "Intermediate", "Pro"]],
  ["piano", ["Beginner", "Intermediate", "Pro", "Beethoven"]],
  ["bass", ["Beginner", "Intermediate", "Pro"]],
  ["tamberine", ["Beginner", "Intermediate", "Pro"]],
  ["singer", ["Sings alone in shower", "Can Sing infront of a crowd", "Would sing in a stadium full of adoring fans"]]
];

  //when user selects species of pet...load in names from array
  $("#instrumentKind").on("change", function (e) {
    //enables the pet name dropdown
    $("#instrumentName").prop("disabled", false);

    let inputVal = this.value;

    // console.log(inputVal);

    //loop though array of pet names
    $.each(instrumentNames, function (key, value) {
      //match pet name to user selected
      if (inputVal === value[0]) {
        // console.log(value[0] + key + value);
        $.each(value, function (nestKey, nestValue) {
          // console.log(nestKey);

          switch (nestKey) {
            case 0:
              $("label[for=instrumentName]").text(nestValue);
              $("#instrumentName").empty();
              $("#instrumentName").append(
                $("<option>").text(`select a ${nestValue} `)
              );
              break;
            case 1:
              $.each(nestValue, function (nameKey, nameValue) {
                console.log(nameKey, nameValue);

                $("#instrumentName").append(
                  $("<option>").val(nameValue).text(nameValue)
                );
              });
              break;
          }
        });
      }
    });
  });

  console.log("user name: " + $("#noSpaces").val());
