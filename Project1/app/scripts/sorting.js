var arrayToSort = [];
var threshold = 10;
var maximumSize = 100;

//the number of elements to place in the array
var numElements = Math.floor(Math.random() * threshold);


//display the array when the document loads
$(document).ready(function() {

	loop("myList");

});

//execute the bubble sort algorithm
$("#bubbleSort").click(function() {

	//current time on start
	$("#currentTime1").html(new Date());

	//bubble sort
	function bubbleSort(arrayToSort) //This Calls the function to happen when the button is clicked.
		{//This opens the function
		    var swapped; //This introduces the swapped variable
		    do { //This allows the loop to be run even if the condition is false, then it will repeat if it is true.
		        swapped = false;//If the numbers already in order it will not switch them, and it will start do do the next numbers.
		        
		        for (var i = 0; i < arrayToSort.length-1; i++) {//Starts Loop:Sets the initial value of i(index) to 0. This asks if the index is smaller than one less of the length
		        	//If it is false it will not trigger below, but will add one to the index. 
		            if (arrayToSort[i] > arrayToSort[i+1]) {//This asks whether or not the number at the current index is larger than the value in the next index.
		                var temp = arrayToSort[i];//If the current index value is larger than the next, it stores the value at a specific index in the temporary variable.
		                arrayToSort[i] = arrayToSort[i+1];//This sets the values of the adjacent indexes to the same number so it can switch the order later on.
		                arrayToSort[i+1] = temp;//This sets the temporary variable to the next index other number, switching the two.
		                swapped = true;//Once it runs, it will say that the numbers have been switched. 
		            }

		            //If the array is [2,1], it checks if index 0 is larger than index one. If it is true it will set
		            //the temporary variable to the current index value(2). It will then set both of the adjacent values to
		            //1 which is the next index value, so the array is now [1,1]. Then it will set the next index value to 2
		            //because it was stored in the variable temporary before.
		        }

		    } while (swapped);//Breaks the do/while loop if the conditions are not met.
		}
 
bubbleSort(arrayToSort); //this is where the code gets executed
console.log(arrayToSort); //shows the result in the console


	$("#bubbleSortResult").html(loop("bubbleSortResult"));

	//current time once complete
	$("#endTime1").html(new Date());

});

//execute the insertion sort algorithm
$("#insertionSort").click(function() {

	//current time on start
	$("#currentTime2").html(new Date());

	//write insertion sort here
	function insertionSort(arrayToSort) {
	  for (var i = 0; i < arrayToSort.length; i++) {
		    let value = arrayToSort[i]
		    for (var j = i - 1; j > -1 && arrayToSort[j] > value; j--) {
		      arrayToSort[j + 1] = arrayToSort[j]
		    }
		    arrayToSort[j + 1] = value

		}
	}

		insertionSort(arrayToSort);

		$("#insertionSortResult").html(loop("insertionSortResult"));

		//current time once complete
		$("#endTime2").html(new Date());
});

//execute the selection sort algorithm
$("#selectionSort").click(function() {

	//current time on start
	$("#currentTime3").html(new Date());
	
	//write selection sort here
	function swap(arrayToSort, i, j) {
	  var temp = arrayToSort[i];
	  arrayToSort[i] = arrayToSort[j];
	  arrayToSort[j] = temp;
	}

	function selectionSort(arrayToSort) {
	  for(var i = 0; i < arrayToSort.length; i++) {
	    var min = i;
	    for(var j = i + 1; j < arrayToSort.length; j++) {
	      if(arrayToSort[j] < arrayToSort[min]) {
	        min = j;
	      }
	    }
	    if(i !== min) {
	      swap(arrayToSort, i, min);
	    }
	  }
	  return arrayToSort;
	}

		selectionSort(arrayToSort);

		$("#selectionSortResult").html(loop("selectionSortResult"));

		//current time once complete
		$("#endTime3").html(new Date()); 

});

$("#mergeSort").click(function(){

	$("#currentTime4").html(new Date());

	//merge sort goes here.
	// Split the array into halves and merge them recursively 
		function mergeSort (arrayToSort) {
		  if (arrayToSort.length === 1) {
		    // return once we hit an array with a single item
		    return arrayToSort
		  }

		  const middle = Math.floor(arrayToSort.length / 2) // get the middle item of the array rounded down
		  const left = arrayToSort.slice(0, middle) // items on the left side
		  const right = arrayToSort.slice(middle) // items on the right side

		  return merge(
		    mergeSort(left),
		    mergeSort(right)
		  )
		}

		// compare the arrays item by item and return the concatenated result
		function merge (left, right) {
		  let result = []
		  let indexLeft = 0
		  let indexRight = 0

		  while (indexLeft < left.length && indexRight < right.length) {
		    if (left[indexLeft] < right[indexRight]) {
		      result.push(left[indexLeft])
		      indexLeft++
		    } else {
		      result.push(right[indexRight])
		      indexRight++
		    }
		  }

		  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
		}


	mergeSort(arrayToSort);

	$("#mergeSortResult").html(loop("mergeSortResult"));

});


//This does not have to be sorted to run the function
$("#bruteForce").click(function(){

	var valueToSearch = $("#bruteForceValue").val(); //sets the variable to the value you want to search for.
	var test = false; //initially sets the test to false

	//Brute force search algorithm
	for (var i = 0; i < arrayToSort.length; i++) {// sets i to 0. Keeos the loop inside the data, and adds one to the index.
		if (arrayToSort[i] == valueToSearch) { //asks if the value searched for is the value.
			test = true; //if the value is the same, it will set the test to true.  
			break; //It breaks out of the loop once it is found.
		}
	}

	$("#bruteForceResult").html("The result is " + test);
	//Display the result of the algorithm true/false

});

// This algorithm requires the list to be sorted in order for the list to work properly.
$("#binarySearch").click(function(){

	//Binary search algorithm
	var valueToSearch = $("#binarySearchValue").val();
	var left = 0;//Sets the lowest value index to 0 in left.
	var right = arrayToSort.length - 1;//Sets the index of the highest value to the variable 'right'
	var found = false;//Initially sets the found variable to false, in case found is not true.

	while (left <= right) 
	{ //Testing whether or not the array is in order, in theory, left should always be smaller than right.
	    const mid = left + Math.floor((right - left) / 2);//Sets the middle value index by dividing the index of the highest and lowest value.
	    
	    if (arrayToSort[mid] == valueToSearch) {//asks if the middle number is the target number
	       found = true;//If this condition is met, it will reutrn found as true.
	    }

	    if (arrayToSort[mid] < valueToSearch) {//Asks if the middle value is less than the requested value.
	        left = mid + 1;//If it is smaller,it will set the left(least value) to the number greater than middle: it will eliminate everything greater than mid.
	    } else {
	        right = mid - 1;//If it is larger,it will set the right(greatest value) to the number less than middle.it will eliminate everything smaller than mid
	    }
	}

	$("#binarySearchResult").html("The Result is " + found);//Display the result of the algorithm true/false

});

function loop(myId) {
	$("#" + myId).append("[");

	if(arrayToSort.length == 0)
	{
		//populate the array with random numbers
		for(var i = 0; i < numElements; i = i + 1)
		{
			var num = Math.floor(Math.random() * maximumSize);
			arrayToSort.push(num);

			if(i == numElements - 1)
				$("#" + myId).append(num);
			else
				$("#" + myId).append(num + ", ");
		}
	}
	else
	{
		for(var i = 0; i < numElements; i = i + 1)
		{
			if(i == numElements - 1)
				$("#" + myId).append(arrayToSort[i]);
			else
				$("#" + myId).append(arrayToSort[i] + ", ");
		}
	}
	$("#" + myId).append("]");
	
}