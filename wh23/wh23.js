console.log(Vue, 'Vue');

const data = {
    bucketList1: [
        {
            text: 'Дело 1'
        },
        {
            text: 'Дело 2'
        },
        {
            text: 'Дело 3'
        },
        {
            text: 'Дело 4'
        },
        {
            text: 'Дело 5'
        },
        {
            text: 'Дело 6'
        }
    ],
    bucketList2: [
        {
            text: 'Другое дело 1'
        },
        {
            text: 'Другое дело 2'
        },
        {
            text: 'Другое дело 3'
        },
        {
            text: 'Другое дело 4'
        },
        {
            text: 'Другое дело 5'
        },
        {
            text: 'Другое дело 6'
        }
    ],
    onClick(List1, List2) {
        List2.unshift(List1.pop());
    }
};

const config = {
    el: '#app',
    data: data
};

const vue = new Vue(config);