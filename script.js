//zomato
$("#search-zomato").on("click", function(event) {  
    event.preventDefault();  
    var zip = $("#zomato-input").val();  
    var apikey = "cbebddbf0acfc9c6aba9cc2dee4235b2" 
    var queryURL = https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village + cbebddbf0acfc9c6aba9cc2dee4235b2 + "/.name.json/" + zip + "/.location";  
   
     
    $.ajax({  
    url: queryURL,  
    method: "GET" 
    }).then(function(response) {  
    $("#zomato-data").text(JSON.stringify(response));  
    $("#zomato-data").text(response.zip_code);
    $("#zomato-data").text(response.distance);
    $("#zomato-data").text(response.city);  
    $("#zomato-data").text(response.state);  
   
    console.log(queryURL);  
    console.log(response);  
    })