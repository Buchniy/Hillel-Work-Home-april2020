console.log('hello');

function sendAjax({url, method, success, data}) {
    const xhttp = new XMLHttpRequest();

    xhttp.addEventListener('load', function({target}){
        const response = JSON.parse(target.response);
        success(response);
    });


    xhttp.open(method, url);
    xhttp.send(JSON.stringify(data));
}

const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('click', click);
});


function click(event) {
    event.preventDefault();
    const target = event.target;
    const self = this;


    if (target.tagName.toLowerCase() == 'button') {
        const requestPayload = prepareForm(this);

        sendAjax({
            url: `http://localhost:3005/user-auth`,
            method: 'POST',
            data: requestPayload,
            success(data) {
                nextStep(self.dataset.id);
            }
        });
    }

}

function nextStep(id) {
    const currentActiveFormId = id - 1;
    const isNextFormExist = forms[currentActiveFormId + 1];
    let idNextForm = '';

    if (isNextFormExist) {
        idNextForm = currentActiveFormId + 1;
    } else {
        idNextForm = 0;
    }

    forms[currentActiveFormId].classList.remove('center');
    forms[idNextForm].classList.add('center');

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