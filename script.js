//Define Variables
var date = moment();
var nowDateID = date.format("YYYY-MM-DD");
var headerDate = date.format("dddd MMM DD YYYY");

//Current Date

document.getElementById("currentDay").innerHTML = headerDate;


//Time blocks
hourUpdater();

function hourUpdater() {
  var currentHour = moment().hours();

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[0]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour == currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }

    var childText = $(this).children("textarea");
    var childTextID = childText.attr("id");
    var keyID = nowDateID + "_" + childTextID;
    var childValue = localStorage.getItem(keyID);

    if (childValue) {
      childText.val(childValue);
    }
  });
}


//Save Task
$(document).ready(function () {
  $("body").on("click", ".saveBtn", function (e) {
    e.stopImmediatePropagation();
    e.preventDefault();

    var textInput = $(this).siblings("textarea");
    var textID = textInput.attr("id");
    var keyID = nowDateID + "_" + textID;
    var textValue = textInput.val();

    localStorage.setItem(keyID, textValue);
  });
});
