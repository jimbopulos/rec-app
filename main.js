// API for TheAudioDB

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://theaudiodb.p.rapidapi.com/discography.php?s=coldplay",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "164d50a740msh07c5f9842e61e21p12b55ajsn9f08d461916f",
		"x-rapidapi-host": "theaudiodb.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});