const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=es-MX&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
//getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
console.log(data)
    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        //console.log(movie)
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        <div class="row">
          <div class="col-sm text-center">
            <img src="${IMG_PATH + poster_path}" width="100" heigth="100" class="img-fixed" alt="${title}">
            <div class="form-control text-center">
            <h3 class="lead">${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            <div class="overview">
                <strong>Reseña</strong>
                <p>${overview}</p>
             </div>
             </div>
          </div>
        </div>
        `
        movieEl.addEventListener("click", (e)=>{
        
            let movieSelect
            movieSelect = movie
            console.log (movieSelect)
        return movieSelect
       })
        main.appendChild(movieEl)

    })
 
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('keypress', (e) => {
   if (e.key==='Enter'){
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }}
    else
    {
        console.log("No ingresó datos")
    }
    
    
})