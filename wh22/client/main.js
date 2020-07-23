
window.onload = function(){



let country = document.querySelector('#country');
let select = document.querySelector('select');

async function modernSendAjax() {
    const data = await fetch('http://localhost:3005/freez');
    const respCountry = await data.json();
    console.log(respCountry, 'res');
    country.innerHTML = countrySelection(respCountry);
    selection();
    // return await selection();
    // resolve(selection());
}

function selection() {
    select.addEventListener("change", function() {
        let currentCountry = this.value;
        console.log(currentCountry, 'currentCountry');
        return currentCountry;
    });
}
function countrySelection(resp) {
    return `${resp.map(index => `<option value="${index}">${index} </option>`).join(' ')}`
}



    modernSendAjax()
        .then((resp) => console.log(resp, 'currentCountry'));




};