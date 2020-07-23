
window.onload = function(){



let country = document.querySelector('#country');
let city = document.querySelector('#city');
let select = document.querySelector('select');


async function modernSendAjax() {
    const data = await fetch('http://localhost:3005/');
    const respCountry = await data.json();
    console.log(respCountry, 'res');
    country.innerHTML = countrySelection(respCountry);
    selectionCountry();
    console.log(this.value, 'this.value');

    const data2 = await fetch(`http://localhost:3005/city`);
    const respCity = await data2.json();
    console.log(respCity, 'respCity');
    city.innerHTML = countrySelection(respCity);
    selectionCity();
    console.log(this.value, 'this.value');
    // let urlData3 = await selection();
}

function selectionCountry() {
    country.addEventListener("change", function() {
        // let currentCountry = this.value;
        console.log(this.value, 'this.value');
        return this.value;
    });
}

function selectionCity() {
    city.addEventListener("change", function() {
        // let currentCountry = this.value;
        console.log(this.value, 'this.value');
        return this.value;
    });
}

function countrySelection(resp) {
    return `${resp.map(index => `<option value="${index}">${index} </option>`).join(' ')}`
}



    modernSendAjax();





};