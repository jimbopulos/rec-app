// DEPENDENCIES

// Arrays for artist’s based on category selection

let fitnessArr = [
  {
    artist: "MEDUZA",
    song: "Lose Control",
  },
  {
    artist: "Diplo",
    song: "",
  },
  {
    artist: "Kendrick Lamar",
    song: "",
  },
  {
    artist: "Pitbull",
    song: "",
  },
  {
    artist: "50 Cent",
    song: "",
  },
  {
    artist: "Eminem",
    song: "",
  },
  {
    artist: "ABBA",
    song: "",
  },
  {
    artist: "David Guetta",
    song: "",
  },
  {
    artist: "Michael Jackson",
    song: "",
  },
  {
    artist: "Technotronic",
    song: "Pump Up the Jam",
  },
];

let choresArr = [
  {
    artist: "Bachman-Turner Overdrive",
    song: "Taking Care Of Business",
  },
  {
    artist: "Blondie",
    song: "One Way Or Another",
  },
  {
    artist: "Courtney Barnett",
    song: "",
  },
  {
    artist: "Soft Cell",
    song: "Tainted Love",
  },
  {
    artist: "Eurythmics",
    song: "Sweet Dreams",
  },
  {
    artist: "Natasha Bedingfield",
    song: "Unwritten",
  },
  {
    artist: "M.I.A.",
    song: "",
  },
  {
    artist: "Beyonce",
    song: "",
  },
  {
    artist: "Kanye West",
    song: "",
  },
  {
    artist: "Sean Kingston",
    song: "",
  },
];

let studyArr = [
  {
    artist: "Mozart",
    song: "",
  },
  {
    artist: "Bach",
    song: "",
  },
  {
    artist: "Scriabin",
    song: "",
  },
  {
    artist: "J Dilla",
    song: "",
  },
  {
    artist: "Hadyn",
    song: "",
  },
  {
    artist: "Beethoven",
    song: "",
  },
  {
    artist: "Chopin",
    song: "",
  },
  {
    artist: "Tchaikovsky",
    song: "",
  },
  {
    artist: "Stravinsky",
    song: "",
  },
  {
    artist: "Mussorgsky",
    song: "",
  },
];

let calmArr = [
  {
    artist: "Brian Eno",
    song: "",
  },
  {
    artist: "Jan Jelinek",
    song: "",
  },
  {
    artist: "Duke Ellington",
    song: "In a Sentimental Mood",
  },
  {
    artist: "Bill Evans",
    song: "Nardis",
  },
  {
    artist: "Vince Guaraldi",
    song: "",
  },
  {
    artist: "Debussy",
    song: "Clair de Lune",
  },
  {
    artist: "Frank Ocean",
    song: "",
  },
  {
    artist: "J Dilla",
    song: "",
  },
  {
    artist: "Pink Floyd",
    song: "Us and Them",
  },
  {
    artist: "Bob Marley",
    song: "Jamming",
  },
];

let readArray = [
  {
    artist: "Chopin",
    song: "",
  },
  {
    artist: "Debussy",
    song: "",
  },
  {
    artist: "Satie",
    song: "Gymnopedie no. 1",
  },
  {
    artist: "Elgar",
    song: "",
  },
  {
    artist: "Grieg",
    song: "",
  },
  {
    artist: "Schumann",
    song: "",
  },
  {
    artist: "Vivaldi",
    song: "",
  },
  {
    artist: "Pablo Nouvelle",
    song: "",
  },
  {
    artist: "Ryuichi Sakamoto",
    song: "Merry Christmas Mr. Lawrence",
  },
  {
    artist: "Ravel",
    song: "",
  },
];

let danceArr = [
  {
    artist: "Calvin Harris",
    song: "",
  },
  {
    artist: "Celia Cruz",
    song: "Azucar",
  },
  {
    artist: "Elvis Crespo",
    song: "Suavmente",
  },
  {
    artist: "KAYTRANADA",
    song: "LITE SPOTS",
  },
  {
    artist: "Daft Punk",
    song: "",
  },
  {
    artist: "Disclosure",
    song: "",
  },
  {
    artist: "Dua Lipa",
    song: "",
  },
  {
    artist: "Oliver Heldens",
    song: "",
  },
  {
    artist: "Mark Ronson",
    song: "",
  },
  {
    artist: "Major Lazer",
    song: "",
  },
];

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
});
