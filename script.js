var buttonEl = document.getElementById("the-button");


function getNewActivity () { 

    var url = "https://www.boredapi.com/api/activity/";

    var displayEl = document.getElementById("display-data");

    fetch(url)
        .then(function(response) {
            // Convert to JSON object
            return response.json();
        })
        .then(function(data) {
            var activity = data.activity;
            displayEl.textContent=activity;
        })
}
buttonEl.addEventListener("click", getNewActivity);

// Thanks to the Bored API! http://www.boredapi.com/