// shows current date at top of page
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var container = document.querySelector(".container");
var currentHour = moment().format("H");
var saveConfirm = document.querySelector("#saveConfirm");

//for loop for changing colors of time-blocks
for (var i = 9; i < 18; i++) {
  if (i < currentHour) {
    document.getElementById(i).classList.add("past");
  } else if (i == currentHour) {
    document.getElementById(i).classList.remove("past");
    document.getElementById(i).classList.add("present");
  } else {
    document.getElementById(i).classList.remove("present");
    document.getElementById(i).classList.add("future");
  }
  document.getElementById(i).value = localStorage.getItem(i)
}

container.addEventListener("click", function (event) {
    var targetString = JSON.stringify(event.target.id)
    if(targetString.includes('but')){

    var blankSave = JSON.parse(targetString.replace('but', ''))
    var inputTodo = document.getElementById(blankSave)
    
    localStorage.setItem(blankSave, inputTodo.value)

    }
    document.getElementById("saveConfirm").innerHTML = "Your item has been saved!";
});