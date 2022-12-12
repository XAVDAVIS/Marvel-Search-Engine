
const URL = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";
const $name = $( '#name' )

///// POWERSTATS CONSTANTS //////

const $intelligence = $( '#intelligence' )
const $appearance = $( '#appearance' )
const $speed = $( '#speed' )
const $durability = $( '#durability' )
const $power = $( '#power' )
const $combat = $( '#combat' )
const $strength = $( '#strength' )

///// BIOGRAPHY CONSTANTS /////

const $fullname = $( '#full-name' )
const $alteregos = $( '#alter-egos' )
const $aliases = $( '#aliases' )
const $placeofbirth = $( '#place-of-birth' )

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
    $durability.text(result.powerstats.durability);
    $combat.text(result.powerstats.combat);
    $strength.text(result.powerstats.strength);
    
    $fullname.text(result.biography.fullName);
    $alteregos.text(result.biography.alterEgos);
    $aliases.text(result.biography.aliases);
    $placeofbirth.text(result.biography.placeOfBirth);

    console.log(result);
    // document.querySelector('.app-body-content-thumbnail').innerHTML = `<img src ="${heros.image.URL}">`;
}
