// All URLs start with https://www.loc.gov/ and need to include fo=json as a parameter to get JSON.
// No API key or authentication is required

let btnEl = document.querySelector(".btn")
let searchInputEl = document.getElementById("search-input")
let formatInputEl = document.getElementById("format-input")



function saveInformation(event) {
    event.preventDefault()
    let searchInput = searchInputEl.value.trim();
    let formatInput = formatInputEl.value.trim();
    let q = searchInput
    let fa = formatInput
    console.log(searchInput)
    console.log(formatInput)
    fetch('https://www.loc.gov/search/?q=' + q + '/fa=' + fa + '&fo=json').then( headers => headers.json() ).then(response => console.log(response))
}

btnEl.addEventListener("click", saveInformation)
