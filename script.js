
const settings = {
	async: true,
	crossDomain: true,
	url: 'https://mcu-comics-and-characters.p.rapidapi.com/mcu/characters',
	method: "GET",
	headers: {
		'X-RapidAPI-Key': "b90f6f188emsh2aa3a1173653cb2p1db342jsn62cd4bffb33d",
		'X-RapidAPI-Host' : "mcu-comics-and-characters.p.rapidapi.com"
	}
};

// const URL = "https://mcu-comics-and-characters.p.rapidapi.com/mcu/characters"

// const url = "https://mcu-comics-and-characters.p.rapidapi.com/mcu/characters"
/////// Elements Refered
const $name = $('#name');
const $powers = $('#powers');
const $input = $('input[type="text"]');
const $form = $('form');

// $.ajax(settings).done(function(response) {
// 	console.log(response);
// });

/////// Event Listeners
$name.on("submit", handleGetData);
$powers.on("submit", handleGetData);
$input.on("submit", handleGetData);
$form.on("submit", handleGetData);



///////// Functions 

function handleGetData(event) {
     //event.preventDefault();
    userInput = $input.val()
    
    $.ajax(settings+userInput).then( ( data ) => {
        console.log( data )
        $name.text(data.$Name)
        $powers.text(data.Powers)
    }, ( error ) => {
        console.log('bad request', error)
        
    })
}
/// handleGetData();