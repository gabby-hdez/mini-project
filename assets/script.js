// All URLs start with https://www.loc.gov/ and need to include fo=json as a parameter to get JSON.
// No API key or authentication is required

fetch('https://www.loc.gov/search/?q=baseball&fo=json').then( headers => headers.json() ).then(response => console.log(response))
