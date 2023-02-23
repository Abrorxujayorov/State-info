// https://restcountries.com/v3.1/all

let constrol = document.querySelector('.control')
let loader = document.querySelector('.loader')
let map = document.getElementById('map')
loader.classList.add('watch')
window.addEventListener('DOMContentLoaded', function() {
let api = 'https://restcountries.com/v3.1/all'
    fetch(api)
    .then((res) => res.json())
    .then(data => state(data))
    
    function state(data) {
        let stat = data
        console.log(data);
        for (let i = 0; i < stat.length; i++) {
            constrol.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src=${stat[i].flags.svg} class="card-img-top" alt="Bayroq" id="pic">
            <div class="card-body">
            <h5 class="card-title">${stat[i].name.common}</h5>
            <p class="card-text">${stat[i].altSpellings}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Poytaxt: ${stat[i].capital}</li>
            <li class="list-group-item">Qitasi:  ${stat[i].continents}</li>
            <li class="list-group-item">Chegaradosh: ${stat[i].borders}</li>
            </ul>
            <div class="card-body">
            <a href=${stat[i].maps.googleMaps} class="btn btn-primary">Location</a>
            </div>
            </div>
            `
        }
    }
    loader.classList.remove('watch')
})
state()