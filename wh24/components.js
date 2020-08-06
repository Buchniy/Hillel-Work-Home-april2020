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

    methods: {},
    template: `
<div>
    <div class="parent-box">

    <diagram-column 
        :currentColumn="item"
        v-for="item in diagramItems" />
  
    </div> 
    <assort />
</div>
    
    `
});
//------------------column----------------------//
Vue.component('diagram-column', {
    props: ['currentColumn'],
    data() {
        return {
            valueHeight: ''
        }
    },
    mounted() {
        this.valueHeight = localStorage.getItem(this.currentColumn.name)
        console.log(this.currentColumn.name, this.valueHeight);
    },
    methods: {
        changeValueHeight(currentValue) {
            this.valueHeight = currentValue;
        }
    },
    template: `
        <div class="box" >
            <div class="color-box" :style="{background: currentColumn.color, height: valueHeight + 'px'}"></div>
            <div>{{currentColumn.name}}</div>
            <regulator :valueRange="currentColumn.name" @changeValue="changeValueHeight"/>
        </div>
    `
});
//------------------regulator----------------------//
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
            localStorage.setItem(this.valueRange, this.value)
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

//------------------assort ----------------------//
Vue.component('assort', {
    props: ['valueFilter'],
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
onClick(event) {
    // console.log(this.valueFilter, 'valueFilter');
}
    },
    template: `
        <div class="assort">
            <button @click="onClick" class="btn">filter</button>
        </div>
    `
});

// //----------------------------------------//
const vue = new Vue({
    el: '#app',
    data: {}
});