// All URLs start with https://www.loc.gov/ and need to include fo=json as a parameter to get JSON.
// No API key or authentication is required

let btnEl = document.getElementsByClassName("btn")
let searchInputEl = document.getElementById("search-input")
let formatInputEl = document.getElementById("format-input")

fetch('https://www.loc.gov/search/?q=baseball&fo=json').then( headers => headers.json() ).then(response => console.log(response))


function saveInformation(event) {

    
}

function storeInfo(event){
    if(event.key === "Enter"){
        saveInformation()
    }
}
btnEl.onclick
