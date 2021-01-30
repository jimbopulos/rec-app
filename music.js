// Arrays for artist’s based on category selection

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
    song: "./Audio/fitness/Gozilla.mp3",
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
    artist: "Mozart",
    song: "./Audio/study/Lacrimosa.mp3",
  },
  {
    artist: "Bach",
    song: "./Audio/study/Air.mp3",
  },
  {
    artist: "Scriabin",
    song: "./Audio/study/Etudes.mp3",
  },
  {
    artist: "J Dilla",
    song: "./Audio/study/Wont_Do.mp3",
  },
  {
    artist: "Hadyn",
    song: "./Audio/study/Surprise.mp3",
  },
  {
    artist: "Beethoven",
    song: "./Audio/study/Moonlight.mp3",
  },
  {
    artist: "Chopin",
    song: "./Audio/study/Nocturne.mp3",
  },
  {
    artist: "Tchaikovsky",
    song: "./Audio/study/Valse.mp3",
  },
  {
    artist: "Stravinsky",
    song: "./Audio/study/Waltz.mp3",
  },
  {
    artist: "Mussorgsky",
    song: "./Audio/study/A_Tear.mp3",
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
    artist: "Debussy",
    song: "./Audio/calm/Reverie.mp3",
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
    artist: "Chopin",
    song: "./Audio/study/Nocturne.mp3",
  },
  {
    artist: "Debussy",
    song: "./Audio/calm/Reverie.mp3",
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

// Audio Functions ===================================
let audioArrays = [
  fitnessArr[0].song,
  choresArr[0].song,
  studyArr[0].song,
  calmArr[0].song,
  readArray[0].song,
  danceArr[0].song,
];

function randomChoice() {
  choice = Math.floor(Math.random() * 10);
  console.log("Random Choice: ", choice);
  return choice;
}

randomChoice();

// Gets Link for Theme Song
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", audioArrays[3]);

// Play/Pause Buttons
$("#playBtn").on("click", function () {
  audioElement.play();
});
$("#pauseBtn").on("click", function () {
  audioElement.pause();
});
