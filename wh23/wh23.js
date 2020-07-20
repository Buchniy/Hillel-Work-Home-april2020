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
    onClick1() {
        console.log(this.bucketList1, 'bucketList1');
        let list1 = this.bucketList1.pop();
        this.bucketList2.unshift(list1)
    },
    onClick2() {
        console.log(this.bucketList2, 'bucketList2');
        let list2 = this.bucketList2.pop();
        this.bucketList1.unshift(list2)
    }

};

const config = {
    el: '#app',
    data: data
};

const vue = new Vue(config);

