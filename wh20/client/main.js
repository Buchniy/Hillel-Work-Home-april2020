
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
            success(id){

                if(!id) return;
                sendAjax({
                    url: `http://localhost:3005/id/`,
                    method: 'POST',
                    data: id,
                    success(userGoods) {
                        let goods = JSON.parse(userGoods);
                        const box =  document.querySelector('.box');
                        box.innerHTML = getMarkup(goods);
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
function getMarkup(arr) {
    return `<div class="goods">
            ${
                arr
                    .map(good => `<div class="good ${good.isAvailability? 'ok': 'absent'}">${good.name} - ${good.price}</div>`)
                    .join(' ')
            }
        </div> `;
}


