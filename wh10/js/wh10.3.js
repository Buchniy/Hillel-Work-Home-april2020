console.log('=========wh10.3============');
/*
var user = {name: 'Алексей'}

function func(surname, patronymic) { alert('привет' + ' ' + this.name + ', ' + patronymic + ' ' + surname); }

//Тут напишите конструкцию с bind()

func('Николаев', 'Иванович'); //тут должно вывести 'привет, Алексей Иванович Николаев '

Напишите в указанном месте конструкцию с методом bind() так,
 чтобы this внутри функции func всегда указывал на объект user.
*/
console.log('=====================');

var user = {name: 'Алексей'};

function func(surname, patronymic) {
    alert('привет,' + ' ' + this.name + ' ' + patronymic + ' ' + surname);
    console.log('привет,' + ' ' + this.name + ' ' + patronymic + ' ' + surname);
}
var userHey = func.bind(user);

userHey("Николаев", "Иванович");

console.log('=====================');

