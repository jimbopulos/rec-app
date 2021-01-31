$(document).ready(function () {
  //calling the owl carousel function to initiate the function. Found these options here https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
  var recOwlCarousel;
  function recOwlCarouselStart() {
    recOwlCarousel = $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 2,
          nav: true,
        },
        1000: {
          items: 3,
          nav: true,
        },
      },
      center: true,
      nav: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 2000,
      loop: true,

    });
  }
  recOwlCarouselStart();

  function searchUnsplash(searchWord) {
    var accessKey = "b1W5pXpGOuFqfBJJ14knI39Pa1u0UR9AJbqaZUcFJsA";
    var pageNumber = getRandomPageNumber(1, 10);
    var unsplashUrl = `https://api.unsplash.com/search/photos/?query=${searchWord}&page=${pageNumber}&client_id=${accessKey}`;

    $.ajax({
      url: unsplashUrl,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      //map returns array of image elements
      var images = response.results.map(function (result) {
        var resultsUrl = result.urls.small;
        return `<div class="carouselCard"><img class="carouselImg" src='${resultsUrl}'></div>`;
      });
      //this is necessary to allow for the new carousel to deploy
      recOwlCarousel.trigger("destroy.owl.carousel");
      //sending images to the html(carousel not implemented yet)
      $(".owl-carousel").html(images);
      //to trigger a refresh of the carousel (implementing the carousel with the new images coming from the API) https://stackoverflow.com/questions/32347919/refreshing-owl-carousel-2
      recOwlCarouselStart();
    });
  }
  //function to generate additional images -random (https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range)
  function getRandomPageNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

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
