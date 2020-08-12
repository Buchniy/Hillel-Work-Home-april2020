Vue.component('Diagram', {
    data() {
        return {
            diagramItems:
                [
                    {'name': 'col-1', 'color': 'red'},
                    {'name': 'col-2', 'color': 'lightblue'},
                    {'name': 'col-3', 'color': 'yellow'},
                    {'name': 'col-4', 'color': 'lightgreen'},
                    {'name': 'col-5', 'color': 'fuchsia'},
                    {'name': 'col-6', 'color': 'darkgrey'},
                    {'name': 'col-7', 'color': 'pink'}
                ]
        }
    },

  //   mounted() {
  //       this.diagramItems[0].height = localStorage.getItem(this.diagramItems);
  // console.log('localStorage', localStorage);
  //
  //   }
  //   ,

    methods: {
        currentValue(curHeigh, curName, curObj){
            console.log('curHeigh, curName, curObj', curHeigh, curName, curObj);
        },
        change(){
            this.diagramItems.sort(function (a, b) {
                return a.height - b.height
            });

            console.log('diagramItems',  this.diagramItems);
            console.log('diagramItems',  this.diagramItems[0].height);

        }
    },
    template: `
<div>
    <div class="parent-box">
    
        <diagram-column 
            :currentColumn="item"
            
            @newValue="currentValue"

            v-for="item in diagramItems" /> 

    </div> 

    <hr>
        <assort 
  
        @changeMass="change" />
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


        this.currentColumn.height = this.valueHeight;

        // console.log('this.currentColumn.heigh', this.currentColumn.heigh);

    },
    methods: {
        changeValueHeight(currentValue) {
            this.valueHeight = currentValue ;
            this.currentColumn.height = this.valueHeight;
            console.log(currentValue, this.valueHeight, this.currentColumn.height, 'currentValue, this.valueHeight, this.currentColumn.heigh' );

            this.$emit('newValue', currentValue, this.currentColumn.name, this.currentColumn);


            console.log(currentValue, this.currentColumn.name, this.currentColumn,  'diagram-column');
            console.log('this.valueHeight', this.valueHeight, this.currentColumn);
        }
    },
    template: `
        <div class="box" >
            <div class="color-box" :style="{background: currentColumn.color, height: valueHeight + 'px'}">
            </div>
            <div>{{currentColumn.name}} : {{currentColumn.height}}</div>
            <regulator 
            :valueHei="currentColumn.height"
            :valueRange="currentColumn.name" 
                @changeValue="changeValueHeight"/>
        </div>
    `
});
//-----------------------------------------///
Vue.component('regulator', {
    props: ['valueRange', 'valueHei'],
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
            {{valueHei}} -- 
            {{value}}
        </div>
    `
});
//-----------------------------------------///
Vue.component('assort', {

    data() {
        return {

        }
    },
    mounted() {


    },
    methods: {
        assort(){
            // console.log('arr');
            this.$emit('changeMass');

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