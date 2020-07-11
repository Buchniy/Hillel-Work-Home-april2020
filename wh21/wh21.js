function pahtSelection() {
    // return true
    return false       //if true -> resolve, false -> reject
}
const promise = new Promise((resolve, reject) =>{

    if(pahtSelection()){
        console.log('pahtSelection --> resolve');
        resolve();
    }else{
        console.log('pahtSelection --> reject');
        reject();
    }
    console.log('0');
});

promise
    .then(() => {
            console.log('1');
        },
        () => {
            console.log('2');
        })

    .then(() => {
            console.log('3');
            return reject;
        },
        () => {
            console.log('4');
        })

    .then(() => {
            console.log('5');
        },
        () => {
            console.log('6');
            return new Promise((resolve, reject) =>{

                if(pahtSelection()){
                    reject();
                }else{
                    resolve();
                }
            })
        })

    .then(() => {
            console.log('7');
        },
        () => {
            console.log('8');
        })

    .then(() => {
            console.log('9');
            return reject;
        },
        () => {
            console.log('10');
        })

    .then(() => {
            console.log('11');
        },
        () => {
            console.log('12');
        });
