// Vue.component('navigation', {
//     data() {
//         return {
//             user: 'Valera',
//             cssClassList: ['navigation', 'header-navigation'],
//             navItems: ['Main', 'Contacts', 'Gallery'],
//             titleFromChild: 'default'
//         }
//     },
//     methods: {
//         helloEvent(targetFromChild, b){
//             console.log('helloEvent', targetFromChild, b)
//         },
//         getSendValue(title) {
//             console.log(title + ' title ===> in parent');
//             this.titleFromChild = title;
//         }
//     },
//     template: `
//         <header :class="cssClassList">
//             <navigation-item
//                 @hello="helloEvent"
//                 @send="getSendValue"
//                 :navTitle="item"
//                 v-for="item in navItems" />
//             <hr />
//             <selected-page :pageTitle="titleFromChild"/>
//         </header>
//     `
// });
// /////////////////////////////////////////////////////
// Vue.component('navigation-item', {
//     props: ['navTitle'],
//     data() {
//         return {
//
//         }
//     },
//     methods: {
//         onClick(event) {
//             // this.$emit('hello', event.target, 2);
//             this.$emit('send', this.navTitle);
//             // console.log(this.navTitle, 'navTitle');
//         }
//     },
//     template: `
//         <button
//             @click="onClick"
//             class="navigation-item"
//             >{{navTitle}}</button>
//     `
// });
// ////////////////////////////////////////////////////////////
// Vue.component('selected-page', {
//     props: ['pageTitle'],
//     template: `
//         <div>Selected ->> {{pageTitle}}</div>
//     `
// });
Vue.component('Diagram', {
    data() {
        return {
            diagramItems:
                [
                    { 'name': 'col-1', 'color': 'red'},
                    { 'name': 'col-2', 'color': 'lightblue'},
                    { 'name': 'col-3', 'color': 'yellow'},
                    { 'name': 'col-4', 'color': 'lightgreen'},
                    { 'name': 'col-5', 'color': 'fuchsia'},
                    { 'name': 'col-6', 'color': 'darkgrey'},
                    { 'name': 'col-7', 'color': 'pink'}
                ]
        }
    },
    methods: {
       kuku() {
           console.log('kuku')
       }
    },
    template: `
    <div class="parent-box">
    <diagram-column 
        
        :currentColumn="item"
        v-for="item in diagramItems" />
    </div>        
    `
});
//----------------------------------------///
Vue.component('diagram-column', {
    props: ['currentColumn'],
    data() {
        return {
            valueHeight:''
        }
    },
    methods: {
        changeValueHeight(value){
            this.valueHeight = value;
        }
    },
    template: `
        <div class="box" >
            <div class="color-box" :style="{background: currentColumn.color, height: valueHeight + 'px'}"></div>
            <div>{{currentColumn.name}}</div>
            <regulator :valueRange="currentColumn" @changeValue="changeValueHeight"/>
        </div>
    `
});
//=============================================//
Vue.component('regulator', {
    props: ['valueRange'],
    data() {
        return {
            value: 0,
        }
    },
    methods: {
        onClick(event){
            this.$emit('changeValue', this.value);
            console.log('this.value', this.value)

        }

    },
    template: `
        <div>
            <input type="range" v-model="value" @input="onClick"  max="200">
            <hr>
            {{this.value}}
        </div>
    `
});

//-----------------------------------------------------------//
const vue = new Vue({
    el: '#app',
    data: {

    }
});