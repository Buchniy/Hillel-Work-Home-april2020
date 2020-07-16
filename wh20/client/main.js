console.log('hello');

function sendAjax({url, method, success, data}) {
    const xhttp = new XMLHttpRequest();
    // console.log(data, 'data');
    xhttp.addEventListener('load', function({target}){
        const response = target.response;
        success(response);
        // res.send('okkkkkkkkkkkkkk');
    });


    xhttp.open(method, url);
    xhttp.send(JSON.stringify(data))
}

const form = document.querySelector('form');

form.addEventListener('click', click);




function click(event) {
    event.preventDefault();
    const target = event.target;



    if (target.tagName.toLowerCase() === 'button') {
        const requestPayload = prepareForm(this);
         sendAjax({
            url: `http://localhost:3005/`,
            method: 'POST',
            data: requestPayload,
            success(data) {
                console.log('ответ сервера', data);

            }

        });

    }

}




function prepareForm(form) {
    const requestPayload = {};

    [].forEach.call(form, function(item) {
        const isNotButton = item.tagName.toLowerCase() !== 'button';

        if (isNotButton) {
            requestPayload[item.name] = item.value;
        }
    });

    return requestPayload;
}

