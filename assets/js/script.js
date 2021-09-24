// shows current date at top of page
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var container = document.querySelector(".container");


var currentHour = moment().format("H");

//for loop for changing colors of time-blocks
for (var i = 9; i < 18; i++) {
  if (i < currentHour) {
    document.getElementById(eval(i)).classList.add("past");
  } else if (i === currentHour) {
    document.getElementById(eval(i)).classList.remove("past");
    document.getElementById(eval(i)).classList.add("present");
  } else {
    document.getElementById(eval(i)).classList.remove("present");
    document.getElementById(eval(i)).classList.add("future");
  }
}

container.addEventListener("click", function (event) {});