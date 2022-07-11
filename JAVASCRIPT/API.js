const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=%22'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

//Get Movies
getMovies(API_URL) 
async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    displayMovies(data.results)
    console.log(data.results);
}
function displayMovies(movies){
    main.innerHTML= ' '
    movies.foreach((movie) =>{
        const {title,poster_path,vote_average,overview} = movie
        const moviesElement = document.createElement('div')
        moviesElement.classList.add('movie')
        moviesElement.innerHTML = `
        <img src="${IMAGE_PATH+poster_path}">
        <div class="movieinfo">
        <h3> ${title}</h3>
        <span class="${getClassesByRating(vote_average)}">${vote_average}</span>
        <div class="overview">
        <h4>Overview</h4>
        </div>
        </div>
        `
        main.appendChild(moviesElement);
    })
}

function getClassesByRating(rating){
    if(rating>=8){
        return 'green'
    }else if(rating>=5){
        return 'orange'
    }else{
        return 'red'
    }
}
//search pathing 
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const searchValue = search.value;
    if(searchValue && search.value !== ''){
        getMovies(SEARCH_API+searchValue)
        searchValue =''
    }else{
        window.location.reload();
    }
})