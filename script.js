/* Trigger the news function */

getnews();

/* Get the gate */

now = new Date();
today = now.getDate() + "/" + now.getMonth();
document.getElementById("date").innerHTML = today;

/* Get the time */

time = now.getHours() + ":" + now.getMinutes();
if (parseInt(now.getMinutes()) < 10) {
   time = now.getHours() + ": 0" + now.getMinutes();
}
hour = parseInt(now.getHours());
document.getElementById("flavour").innerHTML = gettext(hour);

document.getElementById("time").innerHTML = time;

/* Weather function */

var apiKey = "620ec6bc6d6cdd7f65192137963d7ae9";
Weather.setApiKey(apiKey);

Weather.getCurrent("Paris", function (current) {
   document.getElementById("weatherTemp").innerHTML =
      Math.round(Weather.kelvinToCelsius(current.temperature())) + "°C";
   document.getElementById("weatherMore").innerHTML = current.conditions();
});

function getnews() {
   fetch(
      "http://newsapi.org/v2/top-headlines?country=fr&apikey=9f464cab1db442838dbb03ff9b42acda"
   )
      .then((a) => a.json())
      .then((response) => {
         for (var i = 0; i < 3; i++) {
            document.getElementById("headlines").innerHTML +=
               "<h5>" + response.articles[i].title + "</h5>";
         }
      });
}

function gettext(hour) {
   if (hour >= 22 && hour <= 5) {
      return "Good night.";
   } else if (hour >= 6 && hour <= 11) {
      return "Good morning.";
   } else if (hour >= 12 && hour <= 13) {
      return "Time to eat :).";
   } else if (hour >= 14 && hour <= 17) {
      return "Good afternoon.";
   } else if (hour >= 18 && hour <= 21) {
      return "Good evening.";
   }
}
