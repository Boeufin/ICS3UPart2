var clickRate = 0;
var myArray = [1,2,3,4,5];
var mySecondArray = [6,7,8,9,10]
var sum = myArray.reduce(function(a, b) { return a + b; }, 0);
$("#jqueryp").html("The total is " + sum + ".")

var sum2 = mySecondArray.reduce(function(c, d) { return c + d; }, 0);
$("#jqueryp2").html("The total is " + sum2 + ".")


function myFirstFunction() {	
	var isDisplayed = document.getElementById("myID");
			    if (isDisplayed.style.display === "none") {
			        isDisplayed.style.display = "block";
			    } else {
			        isDisplayed.style.display = "none";
			    }
	}

$("#jqueryButton").click(function() {
	clickRate = clickRate + 1
	if(clickRate <= 10)
{
	$("#jqueryButton").html(clickRate);
}
});

$("#jquerButton").ready(function() {
	$("#jqueryButton").html(clickRate);
});
