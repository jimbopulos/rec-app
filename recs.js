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
          nav: false,
        },
        1000: {
          items: 3,
          nav: true,
          loop: true,
        },
      },
      center: true,
      nav: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 2000,
    });
  }
  recOwlCarouselStart();

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

  // AJAX request for TheAudioDB
  function searchAudioDB(searchWord) {
    var audioDBUrl = `https://theaudiodb.p.rapidapi.com/discography.php?s=${searchWord}`;

    const settings = {
      async: true,
      crossDomain: true,
      url: audioDBUrl,
      method: "GET",
      headers: {
        "x-rapidapi-key": "164d50a740msh07c5f9842e61e21p12b55ajsn9f08d461916f",
        "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
      },
    };
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }

  searchAudioDB();

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


  // Audio Functions ===================================
  let audioSrcs = ["./Audio/Mood.mp3"];

  // Gets Link for Theme Song
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", audioSrcs[0]);

  // Theme Button
  $("#playBtn").on("click", function () {
    audioElement.play();
  });
  $("#pauseBtn").on("click", function () {
    audioElement.pause();
  });

// Audio Functions ===================================
let audioFitness = ["./Audio/Mood.mp3"];

function randomChoice() {
  choice = Math.floor(Math.random() * 10);
  return choice;
}

// Gets Link for Theme Song
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", audioFitness[0]);

// Play/Pause Buttons
$("#playBtn").on("click", function () {
  audioElement.play();
});
$("#pauseBtn").on("click", function () {
  audioElement.pause();
});
