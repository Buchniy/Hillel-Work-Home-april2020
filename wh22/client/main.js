
window.onload = function(){



let country = document.querySelector('#country');
let city = document.querySelector('#city');
let street = document.querySelector('#street');

async function startSendAjax() {
    const data = await fetch('http://localhost:3005/');
    const respCountry = await data.json();
    // console.log(respCountry, 'res');
    country.innerHTML = countrySelection(respCountry);
}



/////////////////////////////////////
    async function nextAjax(event) {
    let val = event.target.value;
        // console.log(val, 'val');
        const data = await fetch(`http://localhost:3005/${val}/?street=${val}`);
        const respCountry = await data.json();
        // console.log(respCountry, 'res');
        city.innerHTML = countrySelection(respCountry);
    }
/////////////////////////
    async function streetAjax(event) {
        let str = event.target.value;
        console.log(str, 'str');
        const data = await fetch(`http://localhost:3005/street/${str}/?str=${str}`);
        const respCountry = await data.json();
        // console.log(respCountry, 'res');
        street.innerHTML = countrySelection(respCountry);
    }

    Promise.all([startSendAjax, nextAjax, streetAjax])
.then((data) => {
    console.log(data, 'data resolved');
});
    function countrySelection(resp) {
        return `${resp.map(index => `<option value="${index}">${index} </option>`).join(' ')}`
    }

    startSendAjax();
    country.addEventListener("change", nextAjax);
    city.addEventListener("change", streetAjax);


Promise.all([startSendAjax, nextAjax, streetAjax]).then((values)=>
    console.log(values, 'values'));

};