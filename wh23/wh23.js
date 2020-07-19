console.log('Vue', Vue);
const data = {
    a: 1,
    b: 2,
    sum() {
        return this.a + this.b + ' HEllo world';
    },


let vue = new Vue({
    el: '#app',
    data: data
}),
