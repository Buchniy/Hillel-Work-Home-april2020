console.log('=========wh10.2============');
/*
Пусть дан следующий код:
var user = {name: 'Алексей'}

function func(surname, patronymic) { alert('привет' + ' ' + this.name + ', ' + patronymic + ' ' + surname); }

func(); //тут должно вывести 'привет, Алексей Алексеевич Петров'

при помощи apply вывести сообщение 'привет, Алексей Алексеевич Петров' 'Алексеевич',
 'Петров' должно быть параметрами ф-ии.
*/
console.log('=====================');
var user = {name: 'Алексей'};
function func(surname, patronymic) {
    alert('привет,' + ' ' + this.name + ' ' + patronymic + ' ' + surname);
    console.log('привет,' + ' ' + this.name + ' ' + patronymic + ' ' + surname);
}

func.apply(user, ['Петров', 'Алексеевич']);
console.log('=====================');
