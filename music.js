$(document).ready(function () {
  // STARTING VALUES =========================

  let fitnessArr = [
    {
      artist: "MEDUZA",
      song: "./Audio/fitness/Lose_Control.mp3",
      title: "Lose Control",
    },
    {
      artist: "Diplo",
      song: "./Audio/fitness/Looking_For_Me.mp3",
      title: "Looking For Me",
    },
    {
      artist: "Kendrick Lamar",
      song: "./Audio/fitness/Money_Trees.mp3",
      title: "Money Trees",
    },
    {
      artist: "Pitbull",
      song: "./Audio/fitness/Timber.mp3",
      title: "Timber",
    },
    {
      artist: "50 Cent",
      song: "./Audio/fitness/Candy_Shop.mp3",
      title: "Candy Shop",
    },
    {
      artist: "Eminem",
      song: "./Audio/fitness/Godzilla.mp3",
      title: "Godzilla",
    },
    {
      artist: "ABBA",
      song: "./Audio/fitness/Gimme.mp3",
      title: "Gimme! A Man After Midnight",
    },
    {
      artist: "David Guetta",
      song: "./Audio/fitness/Titanium.mp3",
      title: "Titanium",
    },
    {
      artist: "Michael Jackson",
      song: "./Audio/fitness/Beat_It.mp3",
      title: "Beat It",
    },
    {
      artist: "Technotronic",
      song: "./Audio/fitness/Pump_Up_The_Jam.mp3",
      title: "Pump Up The Jam",
    },
  ];

  let choresArr = [
    {
      artist: "Bachman-Turner Overdrive",
      song: "./Audio/chores/Taking_Care_Of_Business.mp3",
      title: "Taking Care of Business",
    },
    {
      artist: "Blondie",
      song: "./Audio/chores/One_Way_Or_Another.mp3",
      title: "One Way or Another",
    },
    {
      artist: "Courtney Barnett",
      song: "./Audio/chores/Over_Everything.mp3",
      title: "Over Everything",
    },
    {
      artist: "Soft Cell",
      song: "./Audio/chores/Tainted_Love.mp3",
      title: "Tainted Love",
    },
    {
      artist: "Eurythmics",
      song: "./Audio/chores/Sweet_Dreams.mp3",
      title: "Sweet Dreams",
    },
    {
      artist: "Natasha Bedingfield",
      song: "./Audio/chores/Unwritten.mp3",
      title: "Unwritten",
    },
    {
      artist: "M.I.A.",
      song: "./Audio/chores/Paper_Planes.mp3",
      title: "Paper Planes",
    },
    {
      artist: "Beyonce",
      song: "./Audio/chores/Love_On_Top.mp3",
      title: "Love On Top",
    },
    {
      artist: "Kanye West",
      song: "./Audio/chores/Through_The_Wire.mp3",
      title: "Through The Wire",
    },
    {
      artist: "B.o.B.",
      song: "./Audio/chores/Nothin_On_You.mp3",
      title: "Nothin On You",
    },
  ];

  let studyArr = [
    {
      artist: "Red Garland",
      song: "./Audio/study/Soul_Junction.mp3",
      title: 'Soul Junction'
    },
    {
      artist: "Horace Silver",
      song: "./Audio/study/Song_for_My_Father.mp3",
      title: 'Song for My Father'
    },
    {
      artist: "Dave Brubeck",
      song: "./Audio/study/Your_Own_Sweet_Way.mp3",
      title: 'In Your Own Sweet Way'
    },
    {
      artist: "J Dilla",
      song: "./Audio/study/Wont_Do.mp3",
      title: "Won't Do"
    },
    {
      artist: "Oscar Peterson",
      song: "./Audio/study/Blue_and_Sentimental.mp3",
      title: 'Blue and Sentimental'
    },
    {
      artist: "Coleman Hawkins",
      song: "./Audio/study/Out_Of_Nowhere.mp3",
      title: 'Out of Nowhere'
    },
    {
      artist: "Chick Corea",
      song: "./Audio/study/Crystal_Silence.mp3",
      title: 'Crystal Silence'
    },
    {
      artist: "Lester Young",
      song: "./Audio/study/Never_Be_Another_You.mp3",
      title: 'There Will Never Be Another You'
    },
    {
      artist: "Ron Carter",
      song: "./Audio/study/Blackbird.mp3",
      title: 'Bye Bye Blackbird'
    },
    {
      artist: "Bobby Timmons",
      song: "./Audio/study/Moanin.mp3",
      title: "Moanin'"
    },
  ];

  let calmArr = [
    {
      artist: "Brian Eno",
      song: "./Audio/calm/Ascent.mp3",
      title: 'Ascent'
    },
    {
      artist: "Jan Jelinek",
      song: "./Audio/calm/Tendency.mp3",
      title: 'Tendency'
    },
    {
      artist: "Duke Ellington",
      song: "./Audio/calm/In_a_sentimental_mood.mp3",
      title: 'In A Sentimental Mood'
    },
    {
      artist: "Bill Evans",
      song: "./Audio/calm/Nardis.mp3",
      title: 'Nardis'
    },
    {
      artist: "Vince Guaraldi",
      song: "./Audio/calm/Outra_Vez.mp3",
      title: 'Outra Vez'
    },
    {
      artist: "Billie Holiday",
      song: "./Audio/calm/Blue_Moon.mp3",
      title: 'Blue Moon'
    },
    {
      artist: "Frank Ocean",
      song: "./Audio/calm/In_My_Room.mp3",
      title: 'In My Room'
    },
    {
      artist: "J Dilla",
      song: "./Audio/calm/Sunbeams.mp3",
      title: 'Sunbeams'
    },
    {
      artist: "Pink Floyd",
      song: "./Audio/calm/Us_and_Them.mp3",
      title: 'Us and Them'
    },
    {
      artist: "Bob Marley",
      song: "./Audio/calm/Jammin.mp3",
      title: "Jammin'"
    },
  ];

  let readArray = [
    {
      artist: "Wes Mongomery",
      song: "./Audio/read/Days_of_Wine_and_Roses.mp3",
      title: "Days of Wine and Roses",
    },
    {
      artist: "Bud Powell",
      song: "./Audio/read/April_in_Paris.mp3",
      title: "April In Paris",
    },
    {
      artist: "John Coltrane",
      song: "./Audio/read/Naima.mp3",
      title: "Naima",
    },
    {
      artist: "Mary Lou Williams",
      song: "./Audio/read/It_Aint_Necessarily_So.mp3",
      title: "It Ain't Necessarily So",
    },
    {
      artist: "Herbie Hancock",
      song: "./Audio/read/Tell_Me_a_Bedtime_Story.mp3",
      title: "Tell Me a Betdtime Story",
    },
    {
      artist: "Thelonious Monk",
      song: "./Audio/read/Round_Midnight.mp3",
      title: "Round Midnight",
    },
    {
      artist: "Miles Davis",
      song: "./Audio/read/So_What.mp3",
      title: "So What",
    },
    {
      artist: "Pablo Nouvelle",
      song: "./Audio/read/Milambi.mp3",
      title: "Milambi",
    },
    {
      artist: "Ryuichi Sakamoto",
      song: "./Audio/read/Mr_Lawrence.mp3",
      title: "Merry Christmas, Mr. Lawrence",
    },
    {
      artist: "Nina Simon",
      song: "./Audio/read/Feeling_Good.mp3",
      title: "Feeling Good",
    },
  ];

  let danceArr = [
    {
      artist: "Calvin Harris",
      song: "./Audio/dance/Over_Now.mp3",
      title: "Over Now",
    },
    {
      artist: "Celia Cruz",
      song: "./Audio/dance/Azucar.mp3",
      title: "Azucar",
    },
    {
      artist: "Elvis Crespo",
      song: "./Audio/dance/Suavemente.mp3",
      title: "Suavemente",
    },
    {
      artist: "KAYTRANADA",
      song: "./Audio/dance/Lite_Spots.mp3",
      title: "Lite Spots",
    },
    {
      artist: "Daft Punk",
      song: "./Audio/dance/One_More_Time.mp3",
      title: "One More Time",
    },
    {
      artist: "Disclosure",
      song: "./Audio/dance/Watch_Your_Step.mp3",
      title: "Watch Your Step",
    },
    {
      artist: "Dua Lipa",
      song: "./Audio/dance/Break_My_Heart.mp3",
      title: "Break My Heart",
    },
    {
      artist: "Oliver Heldens",
      song: "./Audio/dance/Take_A_Chance.mp3",
      title: "Take A Chance",
    },
    {
      artist: "24kGoldn",
      song: "./Audio/dance/Mood.mp3",
      title: "Mood",
    },
    {
      artist: "Major Lazer",
      song: "./Audio/dance/Thunder_and_Lightning.mp3",
      title: "Thunder and Lightning",
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
  function searchAudioDB() {
    var audioDBUrl = `https://theaudiodb.p.rapidapi.com/discography.php?s=${audioArrays[arrayChoice].artist}`;

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
      // append selected artist to artist name display
      $("#artist-name").append(
        `<span>Artist: ${audioArrays[arrayChoice].artist}</span>`
      );
      // repeat for song name
      $("#song-playing").append(
        `<span>Now Playing: ${audioArrays[arrayChoice].title}</span>`
      );
      // loop through discog div
      response.album.forEach(function (element) {
        // create div for album info
        let albumInfoDiv = $('<tbody class="album-info">');
        // append row before placing data inside
        let albumRow = albumInfoDiv.append("<tr>");
        // add album info for each item
        albumRow.html(`<td>${element.strAlbum}</td>
    <td>${element.intYearReleased}</td>`);
        // append to discog section
        $("#discogTableHead").append(albumInfoDiv);
      });
    });
  }
  searchAudioDB();

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
