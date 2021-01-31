$(document).ready(function () {
  // Unsplash API
  //Access Key = b1W5pXpGOuFqfBJJ14knI39Pa1u0UR9AJbqaZUcFJsA
  //Secret Key = 2X-XRfSskhsvflUpztL9LzRn4YjHQta3q3T9aOUeI-w
  // end point = /search/photos
  // Location = https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
  // query=

  function searchUnsplash(searchWord) {
    var accessKey = "b1W5pXpGOuFqfBJJ14knI39Pa1u0UR9AJbqaZUcFJsA";
    var unsplashUrl = `https://api.unsplash.com/search/photos/?query=${searchWord}&client_id=${accessKey}`;

    $.ajax({
      url: unsplashUrl,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    });
  }
  // loop through the category buttons and adding on-click events to them.
  $(".categoryBtn").each(attachCatBtnEvents);
  function attachCatBtnEvents(index, element) {
    let id = $(element).attr("id");
    $(`#${id}`).on("click", function () {
      window.location.href = `recs.html?id=${id}`;
      // searchUnsplash(id);
    });
  }
  //make the random button make a random selection of category that will open in another page.
  //choose a random category
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  $("#random").on("click", function () {
    let allIds = [];
    //get all the categories -iterate
    $(".categoryBtn").each(function (index, element) {
      let id = $(element).attr("id");
      allIds.push(id);
    });
    console.log(allIds);
    let randomIndex = getRandomNumber(0, allIds.length - 1);
    //redirect to third screen
    window.location.href = `recs.html?id=${allIds[randomIndex]}`;

    audioElement.setAttribute("src", audioArrays[randomIndex].song);

    function searchAudioDB() {
      var audioDBUrl = `https://theaudiodb.p.rapidapi.com/discography.php?s=${audioArrays[randomIndex].artist}`;

      const settings = {
        async: true,
        crossDomain: true,
        url: audioDBUrl,
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "164d50a740msh07c5f9842e61e21p12b55ajsn9f08d461916f",
          "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
        },
      };
      $.ajax(settings).done(function (response) {
        console.log("Discography:", response);
        console.log("Artist:", choice);
        console.log(response.album[0]);
        // loop through discog div
        response.album.forEach(function (element) {
          // create div for album info
          let albumInfoDiv = $('<div class="album-info">');
          // add album info for each item
          albumInfoDiv.html(`<div>Album: ${element.strAlbum}</div>
        <div>Released: ${element.intYearReleased}</div>`);
          // append to discog section
          $("#discog").append(albumInfoDiv);
        });
      });
    }
    searchAudioDB();
  });
});
