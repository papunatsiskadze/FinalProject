const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=%22';

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

//Get Movies
getMovies(API_URL)
async function getMovies(url){
    const res= await fetch(url)
    const data= await res.json()
    console.log(data.results)
    displayMovies(data.results)
}

function displayMovies(movies){
    main.innerHTML=''
    movies.foreach((movie) => {
        const { title,poster_path,vote_average,overview} = movie
        
        const moviesEl = document.createElement('div')
        
        moviesEl.classList.add('movie')
        moviesEl.innerHTML = `
        <img src="${IMG_PATH+poster_path}" alt="${title}"/>
        <div class='movieinfo'>
        <h3> ${title}</h3>
        <span class="${getClassesByRating(vote_average)}">${vote_average}</span>
        <div class='overview'>
        <h4>overview</h4>
        ${overview}
        </div>
        </div>
        `

        main.appendChild(moviesEl);
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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = search.value;
    if(searchValue && search.value !== ''){
        getMovies(SEARCH_API+searchValue)
        search.value =' '
    }else{
        window.location.reload()
    }
})