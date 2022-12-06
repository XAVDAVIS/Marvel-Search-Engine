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
//     }
const promise = $.ajax({
    url : 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'
});

promise.then(
    (data) => {
        console.log(data);
    }, 
    (error) => {
        console.log('bad request: ', error);
    }
);

// function handleGetData(event) {
//     event.preventDefault();
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