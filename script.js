// Initialize DOM elements
let jokeID = document.getElementById('joke-ID')
let errorDisplay = document.getElementById('errorDisplay')
let jokeButton = document.getElementById('get-joke-button')
let favoriteButton = document.getElementById('addToFavorite')
let viewFavorites = document.getElementById('viewFavorite')
let favoriteIcon = document.getElementById('favoriteIcon')

// Fetch dad joke API
async function fetchDadJoke() {
    let fetchedDadJoke = await fetch('https://icanhazdadjoke.com/', {
        headers:  {"Accept": "application/json"},
    })
    if(fetchDadJoke.ok == false)
    {
        errorDisplay.hidden == false
    } else if (errorDisplay.hidden == true) {
        errorDisplay.hidden == false
    }
    return await fetchedDadJoke.json()
}

async function displayDadJoke() {
    let dadJoke = await fetchDadJoke()
    jokeID.innerHTML = dadJoke.joke
    favoriteIcon.innerHTML = ''
}

// Function to store value to storage
async function addJokeToFavorite() {
    if (jokeID.innerHTML == '// Joke content //') {
        return
    } else {
    favoriteIcon.innerHTML = '★'
    let jokeData = jokeID.innerHTML
    sessionStorage.setItem('savedJoke', jokeData)
    }
}

function viewFavoriteJokes() {
    // needs to take stored data and display in temp element
    if (jokeID.innerHTML == '// Joke content //') {
        return
    } else {
    jokeID.innerHTML = sessionStorage.getItem('savedJoke')
    favoriteIcon.innerHTML = '★'
    }
}

// Event listeners
jokeButton.addEventListener("click", displayDadJoke)
favoriteButton.addEventListener("click", addJokeToFavorite)
viewFavorites.addEventListener("click", viewFavoriteJokes)
