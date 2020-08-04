Vue.component('navigation', {
    data() {
        return {
            user: 'Valera',
            cssClassList: ['navigation', 'header-navigation'],
            navItems: ['Main', 'Contacts', 'Gallery'],
            titleFromChild: 'default'
        }
    },
    methods: {
        helloEvent(targetFromChild, b){
            console.log('helloEvent', targetFromChild, b)
        },
        getSendValue(title) {
            console.log(title + ' title ===> in parent');
            this.titleFromChild = title;
        }
    },
    template: `
        <header :class="cssClassList">
            <navigation-item 
                @hello="helloEvent"
                @send="getSendValue"
                :navTitle="item" 
                v-for="item in navItems" />
            <hr />
            <selected-page :pageTitle="titleFromChild"/> 
        </header>
    `
});

Vue.component('navigation-item', {
    props: ['navTitle'],
    data() {
        return {

        }
    },
    methods: {
        onClick(event) {
            // this.$emit('hello', event.target, 2);
            this.$emit('send', this.navTitle);
            // console.log(this.navTitle, 'navTitle');
        }
    },
    template: `
        <button
            @click="onClick"
            class="navigation-item"
            >{{navTitle}}</button>
    `
})

Vue.component('selected-page', {
    props: ['pageTitle'],
    template: `
        <div>Selected ->> {{pageTitle}}</div>
    `
})

const vue = new Vue({
    el: '#app',
    data: {
        foo: 1
    }
});