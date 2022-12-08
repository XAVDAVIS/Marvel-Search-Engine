
const URL = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";

///// CONSTANTS //////
const $name = $( '#name' )
const $intelligence = $( '#intelligence' )
const $appearance = $( '#appearance' )
const $speed = $( '#speed' )
const $durability =( '#durability' )
const $power = $( '#power' )
const $work = $( '#work' )
const $connections = $( '#connections' )
const $form = $('form') 
const $input = $( 'input[type="text"]' )

let heros = []
$.ajax( URL ).then (data => {
    heros = data 
}, (error) => {
    console.log('bad request', error);
})

$form.on('submit', handleGetData)

function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val()
    heros.find (hero => hero.name === userInput )
    const result = heros.find(hero => hero.name.toLowerCase().trim() === userInput.toLowerCase().trim());
    $name.text(result.name);
    $intelligence.text(result.powerstats.intelligence);
    $speed.text(result.powerstats.speed);
    $power.text(result.powerstats.power);
    $('').append(`<img src="${heros.images}" alt="${heros.name}"/>`);
    // $durability.text(result.powerstats.durability);
    console.log(result);
}