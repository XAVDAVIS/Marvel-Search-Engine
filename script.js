/* const API_URL = 'https://gateway.marvel.com:443/v1/public/characters?apikey=9200aa8927151333315dbf020b137778' 

$.ajax({'url': API_URL}).then(
    (data) => {
        console.log(data);
    },
    (error) => {
    }
)
*/

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

$.ajax(settings).done(function (response) {
	console.log(response);
});