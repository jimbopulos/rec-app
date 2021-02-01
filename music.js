$(document).ready(function () {
  // DEPENDENCIES ============================
  // let categBtns = $(".categoryBtn");
  // console.log("Data-Value: ", categBtns.attr("data-value"));

  // STARTING VALUES =========================

  let fitnessArr = [
    {
      artist: "MEDUZA",
      song: "./Audio/fitness/Lose_Control.mp3",
    },
    {
      artist: "Diplo",
      song: "./Audio/fitness/Looking_For_Me.mp3",
    },
    {
      artist: "Kendrick Lamar",
      song: "./Audio/fitness/Money_Trees.mp3",
    },
    {
      artist: "Pitbull",
      song: "./Audio/fitness/Timber.mp3",
    },
    {
      artist: "50 Cent",
      song: "./Audio/fitness/Candy_Shop.mp3",
    },
    {
      artist: "Eminem",
      song: "./Audio/fitness/Godzilla.mp3",
    },
    {
      artist: "ABBA",
      song: "./Audio/fitness/Gimme.mp3",
    },
    {
      artist: "David Guetta",
      song: "./Audio/fitness/Titanium.mp3",
    },
    {
      artist: "Michael Jackson",
      song: "./Audio/fitness/Beat_It.mp3",
    },
    {
      artist: "Technotronic",
      song: "./Audio/fitness/Pump_Up_The_Jam.mp3",
    },
  ];

  let choresArr = [
    {
      artist: "Bachman-Turner Overdrive",
      song: "./Audio/chores/Taking_Care_Of_Business.mp3",
    },
    {
      artist: "Blondie",
      song: "./Audio/chores/One_Way_Or_Another.mp3",
    },
    {
      artist: "Courtney Barnett",
      song: "./Audio/chores/Over_Everything.mp3",
    },
    {
      artist: "Soft Cell",
      song: "./Audio/chores/Tainted_Love.mp3",
    },
    {
      artist: "Eurythmics",
      song: "./Audio/chores/Sweet_Dreams.mp3",
    },
    {
      artist: "Natasha Bedingfield",
      song: "./Audio/chores/Unwritten.mp3",
    },
    {
      artist: "M.I.A.",
      song: "./Audio/chores/Paper_Planes.mp3",
    },
    {
      artist: "Beyonce",
      song: "./Audio/chores/Love_On_Top.mp3",
    },
    {
      artist: "Kanye West",
      song: "./Audio/chores/Through_The_Wire.mp3",
    },
    {
      artist: "B.o.B.",
      song: "./Audio/chores/Nothin_On_You.mp3",
    },
  ];

  let studyArr = [
    {
      artist: "Red Garland",
      song: "./Audio/study/Soul_Junction.mp3",
    },
    {
      artist: "Horace Silver",
      song: "./Audio/study/Song_for_My_Father.mp3",
    },
    {
      artist: "Dave Brubeck",
      song: "./Audio/study/Your_Own_Sweet_Way.mp3",
    },
    {
      artist: "J Dilla",
      song: "./Audio/study/Wont_Do.mp3",
    },
    {
      artist: "Oscar Peterson",
      song: "./Audio/study/Blue_and_Sentimental.mp3",
    },
    {
      artist: "Coleman Hawkins",
      song: "./Audio/study/Out_Of_Nowhere.mp3",
    },
    {
      artist: "Chick Corea",
      song: "./Audio/study/Crystal_Silence.mp3",
    },
    {
      artist: "Lester Young",
      song: "./Audio/study/Never_Be_Another_You.mp3",
    },
    {
      artist: "Ron Carter",
      song: "./Audio/study/Blackbird.mp3",
    },
    {
      artist: "Bobby Timmons",
      song: "./Audio/study/Moanin.mp3",
    },
  ];

  let calmArr = [
    {
      artist: "Brian Eno",
      song: "./Audio/calm/Ascent.mp3",
    },
    {
      artist: "Jan Jelinek",
      song: "./Audio/calm/Tendency.mp3",
    },
    {
      artist: "Duke Ellington",
      song: "./Audio/calm/In_a_sentimental_mood.mp3",
    },
    {
      artist: "Bill Evans",
      song: "./Audio/calm/Nardis.mp3",
    },
    {
      artist: "Vince Guaraldi",
      song: "./Audio/calm/Outra_Vez.mp3",
    },
    {
      artist: "Billie Holiday",
      song: "./Audio/calm/Blue_Moon.mp3",
    },
    {
      artist: "Frank Ocean",
      song: "./Audio/calm/In_My_Room.mp3",
    },
    {
      artist: "J Dilla",
      song: "./Audio/calm/Sunbeams.mp3",
    },
    {
      artist: "Pink Floyd",
      song: "./Audio/calm/Us_and_Them.mp3",
    },
    {
      artist: "Bob Marley",
      song: "./Audio/calm/Jammin.mp3",
    },
  ];

  let readArray = [
    {
      artist: "Wes Mongomery",
      song: "./Audio/read/Days_of_Wine_and_Roses.mp3",
    },
    {
      artist: "Bud Powell",
      song: "./Audio/read/April_in_Paris.mp3",
    },
    {
      artist: "John Coltrane",
      song: "./Audio/read/Naima.mp3",
    },
    {
      artist: "Mary Lou Williams",
      song: "./Audio/read/It_Aint_Necessarily_So.mp3",
    },
    {
      artist: "Herbie Hancock",
      song: "./Audio/read/Tell_Me_a_Bedtime_Story.mp3",
    },
    {
      artist: "Thelonious Monk",
      song: "./Audio/read/Round_Midnight.mp3",
    },
    {
      artist: "Miles Davis",
      song: "./Audio/read/So_What.mp3",
    },
    {
      artist: "Pablo Nouvelle",
      song: "./Audio/read/Milambi.mp3",
    },
    {
      artist: "Ryuichi Sakamoto",
      song: "./Audio/read/Mr_Lawrence.mp3",
    },
    {
      artist: "Nina Simon",
      song: "./Audio/read/Feeling_Good.mp3",
    },
  ];

  let danceArr = [
    {
      artist: "Calvin Harris",
      song: "./Audio/dance/Over_Now.mp3",
    },
    {
      artist: "Celia Cruz",
      song: "./Audio/dance/Azucar.mp3",
    },
    {
      artist: "Elvis Crespo",
      song: "./Audio/dance/Suavemente.mp3",
    },
    {
      artist: "KAYTRANADA",
      song: "./Audio/dance/Lite_Spots.mp3",
    },
    {
      artist: "Daft Punk",
      song: "./Audio/dance/One_More_Time.mp3",
    },
    {
      artist: "Disclosure",
      song: "./Audio/dance/Watch_Your_Step.mp3",
    },
    {
      artist: "Dua Lipa",
      song: "./Audio/dance/Break_My_Heart.mp3",
    },
    {
      artist: "Oliver Heldens",
      song: "./Audio/dance/Take_A_Chance.mp3",
    },
    {
      artist: "24kGoldn",
      song: "./Audio/dance/Mood.mp3",
    },
    {
      artist: "Major Lazer",
      song: "./Audio/dance/Thunder_and_Lightning.mp3",
    },
  ];

  let choice = 0;
  let arrayChoice = 0;

  // Set choice to a random number and picking a random song from the array
  randomChoice();

  let audioArrays = [
    fitnessArr[choice],
    choresArr[choice],
    studyArr[choice],
    calmArr[choice],
    readArray[choice],
    danceArr[choice],
  ];

  function randomChoice() {
    choice = Math.floor(Math.random() * 10);
  }

  // Locally stores category button's data value
  if (localStorage.getItem("Category-Value")) {
    arrayChoice = Number(localStorage.getItem("Category-Value"));
  }

  // AJAX request for TheAudioDB
  // function searchAudioDB() {
  //   var audioDBUrl = `https://theaudiodb.p.rapidapi.com/discography.php?s=${audioArrays[arrayChoice].artist}`;

  //   const settings = {
  //     async: true,
  //     crossDomain: true,
  //     url: audioDBUrl,
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-key": "164d50a740msh07c5f9842e61e21p12b55ajsn9f08d461916f",
  //       "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
  //     },
  //   };
  //   $.ajax(settings).done(function (response) {
  //     // loop through discog div
  //     response.album.forEach(function (element) {
  //       // create div for album info
  //       let albumInfoDiv = $('<div class="album-info">');
  //       // add album info for each item
  //       albumInfoDiv.html(`<div>Album: ${element.strAlbum}</div>
  //   <div>Released: ${element.intYearReleased}</div>`);
  //       // append to discog section
  //       $("#discog").append(albumInfoDiv);
  //     });
  //     $(".album-info").prepend(`Artist: ${audioArrays[arrayChoice].artist}`);
  //   });
  // }
  // searchAudioDB();

  // USER INTERACTIONS =======================
  $(".categoryBtn").click(function () {
    let dataVal = $(this).data("value");
    localStorage.setItem("Category-Value", dataVal);
  });

  // Gets Link for Song
  let audioElement = document.createElement("audio");
  audioElement.setAttribute("src", audioArrays[arrayChoice].song);

  // Play/Pause Buttons
  $("#playBtn").on("click", function () {
    audioElement.play();
  });
  $("#pauseBtn").on("click", function () {
    audioElement.pause();
  });
}); //closing for the $(document).ready(function () { in line 1.
