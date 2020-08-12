Vue.component('Diagram', {
    data() {
        return {
            diagramItems:
                [
                    {'name': 'col-1', 'color': 'red', 'heigh': ''},
                    {'name': 'col-2', 'color': 'lightblue', 'heigh': ''},
                    {'name': 'col-3', 'color': 'yellow', 'heigh': ''},
                    {'name': 'col-4', 'color': 'lightgreen', 'heigh': ''},
                    {'name': 'col-5', 'color': 'fuchsia', 'heigh': ''},
                    {'name': 'col-6', 'color': 'darkgrey', 'heigh': ''},
                    {'name': 'col-7', 'color': 'pink', 'heigh': ''}
                ]
        }
    },

    methods: {
        newArr(heigh, name, item){
            console.log('height, name', heigh, name, item);
            // console.log('this.diagramItems',this.diagramItems.heigh);


            // newDiagramItems = this.diagramItems;

            // this.diagramItems.sort(function (a, b) {
            //     return a.height - b.height
            // });
        },
        change(a){
            console.log('kuku', a);
            // let newDiagramItems = this.diagramItems.sort(function (a, b) {
            //     return a.heigh - b.heigh
            // });
            // console.log('diagramItems',  this.diagramItems.sort(function (a, b) {
            //     return a.heigh - b.heigh
            // }) );
            // console.log(newDiagramItems, 'newDiagramItems');
        }
    },
    template: `
<div>
    <div class="parent-box">
    
        <diagram-column 
            :currentColumn="item"
            
            @changeMass="change"

            @newValue="newArr"
            v-for="item in diagramItems" /> 
    </div> 
    <hr>
<assort />
</div>

    
    `
});
//-----------------------------------------///
Vue.component('diagram-column', {
    props: ['currentColumn'],
    data() {
        return {
            valueHeight: ''
        }
    },
    mounted() {
        this.valueHeight = localStorage.getItem(this.currentColumn.name);


        this.currentColumn.heigh = this.valueHeight;

        // console.log(this.currentColumn.name, this.currentColumn.heigh, this.currentColumn);

    },
    methods: {
        changeValueHeight(currentValue) {
            this.valueHeight = currentValue;


            // this.currentColumn.heigh = this.valueHeight;
            this.$emit('newValue', currentValue, this.currentColumn.name, this.currentColumn);
            console.log(currentValue, this.currentColumn.name,  'diagram-column');
        }
    },
    template: `
        <div class="box" >
            <div class="color-box" :style="{background: currentColumn.color, height: valueHeight + 'px'}"></div>
            <div>{{currentColumn.name}}</div>
            <regulator :valueRange="currentColumn.name" 
                @changeValue="changeValueHeight"/>
        </div>
    `
});
//-----------------------------------------///
Vue.component('regulator', {
    props: ['valueRange'],
    data() {
        return {
            value: 0,
        }
    },
    mounted() {

        let getStor = localStorage.getItem(this.valueRange);
        if (getStor) {
            this.value = getStor;
        } else {
            this.value = 0;
        }
    },
    methods: {
        onClick(event) {
            this.$emit('changeValue', this.value);
            localStorage.setItem(this.valueRange, this.value);
            console.log(this.valueRange, this.value, 'regulator');
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
//-----------------------------------------///
Vue.component('assort', {
    props: [],
    data() {
        return {

        }
    },
    mounted() {


    },
    methods: {
        assort(){
            console.log('arr');
            this.$emit('changeMass', 1);

        }
    },
    template: `
        <div>
            <button class="btn" @click="assort">filter</button>
        </div>
    `
});
//-----------------------------------------///
const vue = new Vue({
    el: '#app',
    data: {}
});