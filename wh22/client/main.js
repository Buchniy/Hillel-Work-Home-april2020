
window.onload = function(){



let country = document.querySelector('#country');
let city = document.querySelector('#city');
let street = document.querySelector('#street');

async function startSendAjax() {
    const data = await fetch('http://localhost:3005/');
    const respCountry = await data.json();
    // console.log(respCountry, 'res');
    country.innerHTML = countrySelection(respCountry);
    return data
}
///////////////////
    async function nextAjax(event) {
        let val = event.target.value;
        console.log(val, 'country');
        const firstRequest = axios.get(`http://localhost:3005/${val}/?street=${val}`)
                .then(response => city.innerHTML = countrySelection(response.data));
        return firstRequest
        }
    async function streetAjax(event){
             let str = event.target.value;
             console.log(str, 'city');
             const secondRequest = axios.get(`http://localhost:3005/street/${str}/?str=${str}`)
                     .then(response=>street.innerHTML = countrySelection(response.data));
    // .then(response=>console.log(response, 'response.data'));
        return secondRequest
            }

/////////////////////////////////////
//     async function nextAjax(event) {
//     let val = event.target.value;
//         console.log(val, 'country');
//         const data = await fetch(`http://localhost:3005/${val}/?street=${val}`);
//         const respCity = await data.json();
//         // console.log(respCountry, 'res');
//         city.innerHTML = countrySelection(respCity);
//         return data
//
//     }
/////////////////////////
//     async function streetAjax(event) {
//         let str = event.target.value;
//         console.log(str, 'city');
//         const data = await fetch(`http://localhost:3005/street/${str}/?str=${str}`);
//         const respStreet = await data.json();
//
//         street.innerHTML = countrySelection(respStreet);
//
//         // console.log(respStreet, 'currentstr');
//         return data
//     }

        function currentTarget(event) {
            let currentTarget = event.target.value;
            console.log(currentTarget, 'street');
        }

        function countrySelection(resp) {
            return `${resp.map(index => `<option value="${index}">${index} </option>`).join(' ')}`
        }


        startSendAjax();
        country.addEventListener("change", nextAjax);
        city.addEventListener("change", streetAjax);
        street.addEventListener("change", currentTarget);

        // Promise.all([startSendAjax(), country.addEventListener("change", nextAjax), streetAjax]).then((data) => {
        //     console.log(data, 'data resolved');
        // });

        // Promise.all([startSendAjax(), secondRequest]).then((value)=>
        //   console.log(value, 'results'));

};
//////////////ковырялка///////////////////////////////////////

// window.onload = function(){
//
//
//
//     let country = document.querySelector('#country');
//     let city = document.querySelector('#city');
//     let street = document.querySelector('#street');
//
//     async function startSendAjax() {
//
//         const data = await fetch('http://localhost:3005/')
//             .then(response => response.json())
//             // .then(data => console.log(data))
//             .then(data => country.innerHTML = countrySelection(data))
//         // console.log(respCountry, 'res');
//         // country.innerHTML = countrySelection(respCountry))
//         return data
//     }
//
//
//
// /////////////////////////////////////
//     async function nextAjax(event) {
//         let val = event.target.value;
//         console.log(val, 'val');
//         const url = `http://localhost:3005/${val}/?street=${val}`;
//         axios.get(url)
//             // .then(response => console.log(response))
//             .then(response => city.innerHTML = countrySelection(response));
//         // let val = event.target.value;
//         //
//         // const data = await fetch(`http://localhost:3005/${val}/?street=${val}`);
//         // const respCity = await data.json();
//         // // console.log(respCountry, 'res');
//         // city.innerHTML = countrySelection(respCity);
//     }
// /////////////////////////
//     async function streetAjax(event) {
//         let str = event.target.value;
//         console.log(str, 'str');
//         const data = await fetch(`http://localhost:3005/street/${str}/?str=${str}`);
//         const respStreet = await data.json();
//
//         street.innerHTML = countrySelection(respStreet);
//
//         console.log(respStreet, 'currentstr');
//     }
//
//
//     function countrySelection(resp) {
//         return `${resp.map(index => `<option value="${index}">${index} </option>`).join(' ')}`
//     }
//
//     startSendAjax();
//     country.addEventListener("change", nextAjax);
//     city.addEventListener("change", streetAjax);
//
//     // Promise.all([startSendAjax, nextAjax, streetAjax]).then((data) => {
//     //     console.log(data, 'data resolved');
//     // });
//
//     // Promise.all([startSendAjax, nextAjax, streetAjax]).then((value)=>
//     //   console.log(value, 'results'));

// };