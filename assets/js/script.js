 var today = moment();
 $('#currentDay').text(today.format("dddd, MMMM Do"));

var container = document.querySelector(".container");


// for loop that sorts through all time blocks on load
var  timeBlocks = $("#9, #10, #11, #12, #13, #14, #15, #16, #17")
// var  timeBlocks = $("#9", "#10", "#11", "#12", "#13", "#14", "#15", "#16", "#17")
var currentHour = moment().format("H");

 console.log(currentHour);
 console.log(timeBlocks);


for (i = 0; i < timeBlocks.length; i++) {
    if ( [i] == currentHour) {
        $(timeBlocks[i]).addClass("present");
    } else if ( i < currentHour) {
        $(timeBlocks[i]).addClass("past");
    } else {
        $(timeBlocks[i]).addClass("future");
    }
}
  container.addEventListener("click", function(event) {

  })

 