$(document).ready(function () {
  function searchUnsplash(searchWord) {
    var accessKey = "b1W5pXpGOuFqfBJJ14knI39Pa1u0UR9AJbqaZUcFJsA";
    var unsplashUrl = `https://api.unsplash.com/search/photos/?query=${searchWord}&client_id=${accessKey}`;

    $.ajax({
      url: unsplashUrl,
      method: "GET",
    }).then(function (response) {
        console.log(response);
      //map returns array of image elements
      var images = response.results.map(function (result) {
        var resultsUrl = result.urls.small;
        return `<img src='${resultsUrl}'>`;
      });
      //re
      $("#carousel").html(images);
      
    });
  }

    // API for TheAudioDB
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://theaudiodb.p.rapidapi.com/discography.php?s=coldplay",
      method: "GET",
      headers: {
        "x-rapidapi-key": "164d50a740msh07c5f9842e61e21p12b55ajsn9f08d461916f",
        "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
      },
    };
  
    $.ajax(settings).done(function (response) {
      console.log(response);
    });

  //get value of any parameter from the url (regex, regular expressions, on w3School)
  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  var id = getParameterByName("id");

  $("#category").text(id);
  searchUnsplash(id);
});
