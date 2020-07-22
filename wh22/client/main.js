
window.onload = function(){



let country = document.querySelector('#country');

async function modernSendAjax() {
    const data = await fetch('http://localhost:3005/freez');
    const resp = await data.json();
    console.log(resp, 'res');
    let test = countrySelection(resp);
    console.log(test, 'countrySelection(resp)');
    country.innerHTML = test;
}

modernSendAjax();


function countrySelection(resp){
    resp.forEach((item, index) =>console.log(resp[index], '<---country'));

    // `${resp.forEach((item) =>`<!--<option>${item}</option>-->`)}`;

    return `${resp.forEach((index) =>`<option>${resp[index]} </option>`)}`

    //
    // `<select size="1" id="country">
    //             ${resp.forEach((item, index) =>
    //     `<option >
    //                      ${resp[index]}
    //                  </option>`) }
    //         </select>` ;

    //`<option>${resp[index]}</option>`

    // `${resp.forEach((item, index) =>
    //                 `<option >
    //                      ${resp[index]}
    //                  </option>`) }
    //        ` ;

}


// const xhttp = new XMLHttpRequest();
//
// xhttp.addEventListener('load', function ({target}) {
//     const response = target.response;
//     success(response);
//
// });
//
// xhttp.open(method, url);
// xhttp.send()


// const form = document.querySelector('form');
// form.addEventListener('click', click);

// function click(event) {
//     event.preventDefault();
//     const target = event.target;
//
//     if (target.tagName.toLowerCase() !== 'button') {
//         return;
//     }
//     const requestPayload = prepareForm(this);
//     sendAjax(
//         {
//         url: `http://localhost:3005/freez`,
//         method: 'POST',
//         // data: requestPayload,
//             success: function () {
//             }
//         });




//
// function prepareForm(form) {
//     const requestPayload = {};
//
//     [].forEach.call(form, function(item) {
//         const isNotButton = item.tagName.toLowerCase() !== 'button';
//
//         if (isNotButton) {
//             requestPayload[item.name] = item.value;
//         }
//     });
//
//     return requestPayload;
// }
// function getMarkup(arr) {
//     return `<div class="goods">
//             ${
//         arr
//             .map(good => `<div class="good ${good.isAvailability? 'ok': 'absent'}">${good.name} - ${good.price}</div>`)
//             .join(' ')
//     }
//         </div> `;
// }
// function clear() {
//     const box =  document.querySelector('.box');
//     box.innerHTML = "User Not found";
// }
}