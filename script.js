let jokeID = document.getElementById('joke-ID')
let errorDisplay = document.getElementById('errorDisplay')

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
}