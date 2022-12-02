
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://mcu-comics-and-characters.p.rapidapi.com/mcu/characters",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "b90f6f188emsh2aa3a1173653cb2p1db342jsn62cd4bffb33d",
		"X-RapidAPI-Host": "mcu-comics-and-characters.p.rapidapi.com"
	}
};

$.ajax(settings).done(function(response) {
	console.log(response);
});

