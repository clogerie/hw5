// Moment.js to diplay current day/time
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

// variable to hold hours
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#1pm");
var twoPm = $("#2pm");
var threePm = $("#3pm");
var fourPm = $("#4pm");
var fivePm = $("#5pm");


var hour = moment().hours();
var userInput;
var hourSpan;

// function to diplay current date and time
var interval = setInterval(function () {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
        + momentNow.format('dddd')
            .substring(0, 3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

function initPage() {
    var init9 = JSON.parse(localStorage.getItem("9:00 am"))
    nineAm.val(init9);

    var init10 = JSON.parse(localStorage.getItem("10:00 am"))
    tenAm.val(init10);

    var init11 = JSON.parse(localStorage.getItem("11:00 am"))
    elevenAm.val(init11);

    var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
    twelvePm.val(init12);

    var init1 = JSON.parse(localStorage.getItem("1:00 pm"))
    onePm.val(init1);

    var init2 = JSON.parse(localStorage.getItem("2:00 pm"))
    twoPm.val(init2);

    var init3 = JSON.parse(localStorage.getItem("3:00 pm"))
    threePm.val(init3);

    var init4 = JSON.parse(localStorage.getItem("4:00 pm"))
    fourPm.val(init4);

    var init5 = JSON.parse(localStorage.getItem("5:00 pm"))
    fivePm.val(init5);
}

function background() {

    $(".form-control").each(function () {
        var time = parseInt($(this).attr("id"));
        hour = parseInt(hour);

        if (hour > time) {
            $(this).addClass("past");
        } else if (hour < time) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

$(document).ready(function(){
    initPage()
    background()
  
    // buttons to save user input
    $(".btn").on("click", function(){
      userInput = $(this).siblings(".form-control").val().trim();

      hourSpan = $(this).siblings(".input-group-prepend").text().trim();

      localStorage.setItem(hourSpan, JSON.stringify(userInput));
    }) 
  
  });



