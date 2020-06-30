window.onload = function () {
    const menuArea = document.querySelector(".right-click-area");
    const menu = document.querySelector(".right-click-menu");

    menuArea.addEventListener( "contextmenu", event => {
        event.preventDefault();
        menu.style.top = `${event.clientY}px`;
        menu.style.left = `${event.clientX}px`;
        menu.classList.add("active");
    }, false);

    document.addEventListener("click", event => {
        if (event.button !== 2) {
            menu.classList.remove("active");
        }
    }, false);

    menu.addEventListener("click", event => {
        event.stopPropagation();
    }, false);

    document.querySelector("#l1").addEventListener("click", () => {
        alert("Первая строчка");
    }, false);
    document.querySelector("#l2").addEventListener("click", () => {
        alert("Вторая строчка");
    }, false);
    document.querySelector("#l3").addEventListener("click", () => {
        alert("Третья строчка");
    }, false);
    document.querySelector("#l4").addEventListener("click", () => {
        alert("Четвертая строчка");
    }, false);

};