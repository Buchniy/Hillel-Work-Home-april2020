console.log(Vue, 'Vue');

const data = {
    bucketList1: [
        {
            text: 'Дело1'
        },
        {
            text: 'Дело2'
        },
        {
            text: 'Дело3'
        },
        {
            text: 'Дело4'
        },
        {
            text: 'Дело5'
        },
        {
            text: 'Дело6'
        }
    ],
    bucketList2: [
        {
            text: 'Другое Дело1'
        },
        {
            text: 'Другое Дело2'
        },
        {
            text: 'Другое Дело3'
        },
        {
            text: 'Другое Дело4'
        },
        {
            text: 'Другое Дело5'
        },
        {
            text: 'Другое Дело6'
        }
    ],
    onClick1() {
        console.log(this.bucketList1, 'bucketList1');
        let qqq = this.bucketList1.pop();
        this.bucketList2.unshift(qqq)
    },
    onClick2() {
        console.log(this.bucketList2, 'bucketList2');
        let www = this.bucketList2.pop();
        this.bucketList1.unshift(www)
    }

};

const config = {
    el: '#app',
    data: data
};

const vue = new Vue(config);

