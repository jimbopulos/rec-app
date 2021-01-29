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
    var id = $(element).attr("id");
    $(`#${id}`).on("click", function () {
      window.location.href = `recs.html?id=${id}`;
      // searchUnsplash(id);
    });
  }

});
