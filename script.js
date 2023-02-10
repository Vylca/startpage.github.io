getnews();
var apiKey = "620ec6bc6d6cdd7f65192137963d7ae9";
Weather.setApiKey(apiKey);
weather = document.getElementById("weatherTemp");

Weather.getCurrent("Paris", function (current) {
   weather.innerHTML = current.temperature();
});

function getnews() {
   fetch(
      "http://newsapi.org/v2/top-headlines?country=fr&apikey=9f464cab1db442838dbb03ff9b42acda"
   )
      .then((a) => a.json())
      .then((response) => {
         for (var i = 0; i < 4; i++) {
            document.getElementById("headlines").innerHTML +=
               "<h5>" + response.articles[i].title + "</h5>";
         }
      });
}
