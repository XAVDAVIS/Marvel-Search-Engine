
// // $.ajax({
// //     url : 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'
// // }).then(
// //     (data) => {
// //         $name.text(data.Name);
// //         $apperance.text(data.Apperance);
// //         $work.text(data.Work);
// //         $connections.text(data.Connections);
// //         console.log(data);
// //     }, 
// //     (error) => {
// //         console.log('bad request: ', error);
// //     }
// // );
// let data, userInput;
// const url = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";
// const $name = $("#name")
// const $apperance = $("#apperance")
// const $work = $('#work')
// const $connections = $("#connections")
// const $form = $("form")
// const $input = $( 'input[type="text"]' )


// $form.on('submit', handleGetData);

// function handleGetData(event) {
//    event.preventDefault();
//    userInput = $input.val();
//    // if ( userInput === '#name') return;
//    $.ajax( url + userInput).then( ( data ) => {
//         console.log(data)
//         $name.text(data.Name)
//         $apperance.text(data.Apperance)
//         $work.text(data.Work)
//         $connections.text(data.Connections)

//         // $("main>div").html(`<img id='heroImg' src="${data.poster}" />`);
//     }, (error) => {
//         console.log('bad request', error);
//         })
// } 





// function render() {
//     $name.text(heroData.Name);
//     $apperance.text(heroData.Apperance);
//     $work.text(heroData.Work);
//     $connections.text(heroData.Connections);
// }
// console.log(heroData)



// const searchForm = document.querySelector('.app-header-search');
// let searchList = document.getElementById('search-list');

// const getInputValue = (event) => {
//     event.preventDefault();
//     let searchText = searchForm.search.value;
//     getAllSuperHero(searchText);
// }

// searchForm.addEventListener('submit', getInputValue);

// My API Key => 3055701607906476

// const getAllSuperHero = async(searchText) => {
//     let url = `https://superheroapi.com/api.php/3055701607906476/search/${searchText}`;
//     try{
//         const response = await fetch(url);
//         allData = await response.json();
//         if(allData.response === 'success'){
//             showSearchList(allData.results);
//         }
//         } catch(error) {
//             console.log(error);
//         }

///// Event Listeners //////
// $.form.on('submit', handleGetData)

// onst heros = (data)
// heros.forEach((hero, i) => {
//     let heroName = hero.name 
// })

const URL = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";

///// CONSTANTS //////
const $name = $( '#name' )
const $intelligence = $( '#intelligence' )
const $appearance = $( '#appearance' )
const $speed = $( '#speed' )
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
    console.log(result);
}
    // $.ajax( URL+userInput ).then( (data) => {
        // console.log(data)
        
        // $appearance.text(data.Appearance);
        // $work.text(data.Work);
        // $connections.text(data.Connections);
    // },  (error) => {
    //     console.log('bad request', error);
    // } )


 

// let heroData;

// function handleGetData(event) {
//    event.preventDefault();
//    $.ajax({
//     url: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'
//    }).then(
//     (data) => {
//         heroData = data;
//         render();
//     }, 
//     (error) => {
//         console.log('bad request', error);
//     }
//    );
// }
// function render() {
//     $name.text(heroData.Name);
//     $apperance.text(heroData.Apperance);
//     $work.text(heroData.Work);
//     $connections.text(heroData.Connections);
// }