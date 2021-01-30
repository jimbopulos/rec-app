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

// Audio Functions ===================================
let audioFitness = fitnessArr[0].song;

function randomChoice() {
  choice = Math.floor(Math.random() * 10);
  return choice;
}

// Gets Link for Theme Song
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", audioFitness);

// Play/Pause Buttons
$("#playBtn").on("click", function () {
  audioElement.play();
});
$("#pauseBtn").on("click", function () {
  audioElement.pause();
});
