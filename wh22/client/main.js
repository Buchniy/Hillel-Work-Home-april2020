
window.onload = function(){



let country = document.querySelector('#country');
let city = document.querySelector('#city');
let street = document.querySelector('#street');

async function startSendAjax() {
    const data = await fetch('http://localhost:3005/');
    const respCountry = await data.json();
    console.log(respCountry, 'res');
    country.innerHTML = countrySelection(respCountry);
}

function countrySelection(resp) {
    return `${resp.map(index => `<option value="${index}">${index} </option>`).join(' ')}`
}
/////////////////////////////////////
    async function nextAjax(event) {
    let val = event.target.value;
        console.log(val, 'val');
        const data = await fetch(`http://localhost:3005/${val}/?street=${val}`);
        const respCountry = await data.json();
        console.log(respCountry, 'res');
        city.innerHTML = countrySelection(respCountry);
    }
/////////////////////////
    async function streetAjax(event) {
        let str = event.target.value;
        console.log(str, 'str');
        const data = await fetch(`http://localhost:3005/street/${str}/?str=${str}`);
        const respCountry = await data.json();
        console.log(respCountry, 'res');
        street.innerHTML = countrySelection(respCountry);
    }

    // const data2 = await fetch(`http://localhost:3005/`);
    // const respCity = await data2.json();

   ///////////////////////////////////
   //  const data2 = await fetch(`http://localhost:3005/city`);
   //  const respCity = await data2.json();
   //  console.log(respCity, 'respCity');
   //  city.innerHTML = countrySelection(respCity);


////////////////////////////////
// function selectionCountry() {
//     country.addEventListener("change", function() {
//         console.log(this.value, 'this.value');
//         return this.value;
//     });
// }

////////////////////////////////////
//     city.addEventListener("change", function(event) {
//       console.log(event.target.value, 'this.value');
//       return event.target.value});
/////////////////////////////////////
//     country.addEventListener("change", f.bind());
//     city.addEventListener("change", f.bind());


// function selectionCity() {
//     city.addEventListener("change", function(event) {
//         console.dir(event.target.value, 'this.value');
//         return this.value;
//     })
// }
//     selectionCity();
    // city.addEventListener("change", function() {
    //     // let currentCountry = this.value;
    //     console.log(this.value, 'this.value');
    //     return this.value;
    // });







    startSendAjax();
    country.addEventListener("change", nextAjax);
    city.addEventListener("change", streetAjax);




};