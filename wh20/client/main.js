
function sendAjax({url, method, success, data}) {
    const xhttp = new XMLHttpRequest();

    xhttp.addEventListener('load', function({target}){
        const response = target.response;
        success(response);

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
            success(id) {
                console.log('user id =', id);
                sendAjax({
                    url: `http://localhost:3005/id/`,
                    method: 'POST',
                    data: id,
                    success(userGoods) {
                        console.log(userGoods);
                        // let box =  document.querySelector('.box');
                        // box.innerHTML = userGoods;
                        let goods = JSON.parse(userGoods);
                        console.log(goods, 'goods');
// ////////////////////////////////
//                         const markup = `<div class="goods">${goods.name}, ${goods.price}</div>`;
//
//                         console.log(markup, 'markup');
//                         document.body.innerHTML = markup;
   ////////////////////////////////
                    }
                });
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



