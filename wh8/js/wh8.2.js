/*
в обьекте data существует метод addRecord, который аргументами получает любой набор объектов.
 Метод addRecord добавляет все свойства переданных объектов в data.

 data = {
     addRecord: function(){},
     p: 600,
     str: 'hello',
     y: -50
 }
 data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
 data.x // 50
 data.y // 20
 data.z // 30
 data.p // 600
 data.str // 'hello'
 В метод addRecord добавляется последний необязательный аргумент flag,
  который указывает приоритет присвоения свойств с одинаковым названием.
  Если true - берется свойство из первоначального объекта this,
  если false - берется свойство из arguments. По умолчанию flag = false;
 */
console.log('===================================');
data = {
    addRecord: function({}, flag){
        console.log(arguments, 'arguments');
        for(var i = 0; i < arguments.length; i++){
            // console.log(arguments[i]);
            // this.arguments[i];
        }
    },
    p: 600,
    str: 'hello',
    y: -50
};
data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50}, false);
data.x  = 50;
data.y // 20
data.z // 30
data.p // 600
data.str // 'hello'


for(let key in data){
console.log(data, 'data');
};
