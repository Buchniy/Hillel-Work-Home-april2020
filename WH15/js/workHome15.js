/*
Реализовать контекстное меню. Список хранить в памяти. При клике правой кнопкой мышии:
появляется контекстное меню в месте нажатяи кнопкой мыши
(дизайн и принцип работы сделать точно такой же как работает в браузере)
список контекстного меню на ваше усмотрение
меню пропадает при нажатии в любом месте окна за границами контекстного меню
Хранить в списке action - название функции которая будет выполнятся при нажатии
на пункт меню из задания №1 ( принцип работы как делали на практике)
 */



console.log('=====================');
window.onload = function () {

    function contextMenu() {
        const menuArea = document.querySelector('body');
        var newMenu = document.querySelector('.contextMenu');

        menuArea.addEventListener("contextmenu",event => {
            event.preventDefault();
            newMenu.style.top = `${event.clientY}px`;
            newMenu.style.left = `${event.clientX}px`;
            newMenu.classList.add("active");
            console.log('kuku');
        }, false);

        document.addEventListener("click", event => {
            if (event.button !== 2) {
                newMenu.classList.remove("active");
            }
        }, false);

        newMenu.addEventListener("click", event => {
            event.stopPropagation();
        }, false);

        var data = {
            name: 'menu',
            items: [
                {
                    title: 'Первая строчка Add',
                    handler: 'ActionAdd'
                },
                {
                    title: 'Вторая строчка Save',
                    handler: 'ActionSaveAs'
                },
                {
                    title: 'Третья строчка Exit',
                    handler: 'ActionExit'
                },
                {
                    title: 'Четвертая строчка Edit',
                    handler: 'ActionEdit'
                }
            ]
        };

        var actions = {
            ActionAdd: function() {
                console.log('add');
            },
            ActionSaveAs: function() {
                console.log('save')
            },
            ActionExit: function() {
                console.log('exit');
            },
            ActionEdit: function() {
                console.log('Edit');
            }
        };
        function MenuComponent() {

        }
        //     MenuComponent.prototype.makeMenuContainer = function() {
        //     var ul = document.createElement('ul');
        //     ul.classList.add(data.type);
        //
        //     return ul;
        // };
        MenuComponent.prototype.makeMenuItems = function () {
            var ul = document.createElement('ul');
            for(var i = 0; i < data.items.length; i++){
                var li = document.createElement('li');
                var item = data.items[i];
                li.innerText = item.title;
                li.addEventListener('click', actions[item.handler]);
                ul.append(li);

            }

            newMenu.append(ul);
        };


        var menu = new MenuComponent();
        menu.makeMenuItems();
    }

    contextMenu();
};

//d
//     function MenuComponent(data, actions) {
//         this.data = data;
//         this.actions = actions;
//         this.ul = null;
//     }
// //
//     MenuComponent.prototype.makeMenuItems = function() {
//         var fragment = document.createDocumentFragment();
//         var items = this.data.items;
//
//         for(var i = 0; i < items.length; i++) {
//             var li = document.createElement('li');
//             var item = items[i];
//             li.classList.add('menu-item');
//             li.innerText = item.title;
//             li.addEventListener('click', actions[item.handler]);
//             fragment.append(li);
//         }
//
//         return fragment;
//     };
// //
//     MenuComponent.prototype.makeMenuContainer = function() {
//         var ul = document.createElement('ul');
//         ul.classList.add(data.type);
//
//         return ul;
//     };
//     //
//     MenuComponent.prototype.makeMenu = function() {
//         var ul = this.makeMenuContainer();
//         var fragment = this.makeMenuItems();
//         ul.append(fragment);
//         this.ul = ul;
//
//         return this;
//     };
//     //
//     MenuComponent.prototype.render = function(selector) {
//         var parent = document.querySelector(selector);
//
//         if (this.ul && parent) {
//             document.querySelector(selector).append(this.ul);
//         }
//
//         return this;
//     };
//
//     var menu = new MenuComponent(data, actions);
//
//     menu
//         .makeMenu()
//         .render('.container');

//
// }
//
//
// window.onload = menuModule;

