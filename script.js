const searchForm = document.querySelector('.app-header-search');
let searchList = document.getElementById('search-list');

const getInputValue = (event) => {
    event.preventDefault();
    let searchText = searchForm.search.value;
    getAllSuperHero(searchText);
}

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

///// ELEMENTS REF'D //////
const $name = $('#name')
const $apperance = $('#biography')
const $work = $('#work')
const $connections = $('#connections')
const $form = $('form') 
const $input = $( 'input[type="text"]' )



        ////// CONSTANTS///////
$.ajax({
    url : 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'
}).then(
    (data) => {
        $name.text(data.Name);
        $apperance.text(data.Apperance);
        $work.text(data.Work);
        $connections.text(data.Connections);
        console.log(data);
    }, 
    (error) => {
        console.log('bad request: ', error);
    }
);
let heroData;

$('form').on('submit', handleGetData);

function handleGetData(event) {
   event.preventDefault();
   $.ajax({
    url: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'
   }).then(
    (data) => {
        heroData = data;
        render();
    }, 
    (error) => {
        console.log('bad request', error);
    }
   );
}
function render() {
    $name.text(heroData.Name);
    $apperance.text(heroData.Apperance);
    $work.text(heroData.Work);
    $connections.text(heroData.Connections);
}



//     userInput = $input.val()
//     $.ajax( url+userInput).then( (data) => {
//         console.log(data)
//         $divClass.text(data.divClass)
//     }, (error) => {
//         console.log('bad request', error )
//     })       
// }

    // });
    // promise.then(
    //     (data) => {
    //     console.log(data);
    //     }, 
    //     (error) => {
    //         console.log('bad request: ', error);
    //     }
    // );