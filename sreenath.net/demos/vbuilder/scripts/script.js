window.addEventListener("load", function(event){
	//Bind event handlers to various form elements here
	
	// Inside event handlers, fetch the selected values in the form elements,
	// Use the JSON singleton - featureCosts - to map the cost to the selected value,
	// Update the cost column and the Grand Total.
	
	var ddlEngine = document.getElementById("ddlEngine");
	ddlEngine.addEventListener("change", function(event){
		document.getElementById("lblEngine").innerHTML = featureCosts[ddlEngine.value];
		featureCosts.grandTotal = featureCosts.basePrice + featureCosts[ddlEngine.value];
		document.getElementById("lblGrandTotal").innerHTML = featureCosts.grandTotal;
	});
	
	
});

//Use a singleton JSON object to store costs of various add-ons of selected car
var featureCosts = {
	i4:0,
	v6:2300,
	leather:600,
	basePrice:23230,
	grandTotal:23230
}