


var topics = ["cat", "dog", "hamster", "dog", "lizard", "bear", "snake", "fish", "fox", "mouse", "horse"];

function displayAnimal(){

var APIKey = "KsuVcNZf7SryGc7o9xIKRBMr9ifHlpup"



//function display animal


var animal = $(this).attr("data-name");

console.log(this);

//construct the Jquery
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key="+ APIKey + "&limit=10";
	


//var animalDiv = $("<div>");

$.ajax({
	url: queryURL,
	method:"GET"
//after data comeback from the requeest
}).done(function(response) {
	//div to hold the animal
	console.log(queryURL);
	console.log(response);
		var animalDiv = $("<div>");
		var imgURL; 
				
	
	for (var i = 0; i < 10; i++){
	
//	var photo = response.
		
		
		var imgURL = response.data[i].images.downsized_large.url;
		
//		var still = response.data[i].images.fixed_height_still.url;
	
		
		console.log(imgURL)
		var image = $("<img>");
		image.addClass("gif");
		var imagepic = image.attr("src", imgURL);
		imagepic.text(imgURL)
		animalDiv.append(image);
		$("#animal").prepend(animalDiv);
	}
	
//	$(".gif").on("click", function() {
//	
//		var state = $(this).attr("data-state");
//		var still = response.data[i].images.downsized_large.url;
//		var moving = response.data[i].images.downsized_large.url;
//		
//		if (state === )
//		
//	});
	
});


}//function AnimalDisplay
//}

function renderButton() {
	$("#button-view").empty();
	for (var i = 0; i < topics.length; i++){
		var a = $("<button>");
		a.addClass("animals");   
		a.attr("data-name", topics[i]);
		a.text(topics[i])
		$("#button-view").append(a);
		
	}
}
		

//functinle event when animal button is clicked
$("#add-animal").on("click", function(event) { 				   							
	event.preventDefault();
	var pet = $("#animal-input").val().trim();
//Adding gif to the texbox array
	topics.push(pet);
	console.log(topics);
	renderButton();

	
});

$(document).on("click", ".animals", displayAnimal);
renderButton();

//
//var still = response.data[i].images.fixed_height_still.url
//var move = response.data[i].images.downsized_large.url;
//
//
////   $(".gif").on("click", function() {
////	   
//if(state==="still"){
//        $(this).attr("src", still);
//}
//  else {
//        $(this).attr("src", move);
//}
//    });  







//
//		
//	var still = response.data[i].images.fixed_height_still.url
//	var move = response.data[i].images.downsized_large.url;
//	
//      var state = $(this).attr("");
//      
//	
//      if (state === "still") {
//        $(this).attr("src", $(this).attr("data-animate"));
//        $(this).attr("data-state", "animate");
//      } else {
//        $(this).attr("src", $(this).attr("data-still"));
//        $(this).attr("data-state", "still");
//      }
//    });
//



