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

// Audio Functions ===================================
let audioArrays = [fitnessArr[0].song, choresArr[0].song];

function randomChoice() {
  choice = Math.floor(Math.random() * 10);
  return choice;
}

// Gets Link for Theme Song
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", audioArrays[1]);

// Play/Pause Buttons
$("#playBtn").on("click", function () {
  audioElement.play();
});
$("#pauseBtn").on("click", function () {
  audioElement.pause();
});
