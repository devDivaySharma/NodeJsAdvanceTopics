
console.log('---------------------------Constants---------------------------------------------');
/* Const variable which we can declare and assign value only at once at time and also these type 
    of variable has block scope they are not available outside block like var has global scope.
*/

const CHUNK = 1024; // this is const declarion and assignment. 
//const CHUNK = 1024; // this will give a synatax error.
//CHUNK = 45; // This will through an assignment error as we have already asssign value to const; 

/* But we can use object's value to modify Object const value's */
const value = { size : 100 };
console.log('Before',value.size);
//value = {}; // This will give error on assginment;
//Object.freeze(value); // This will freez the object and u not allowed to update property of Object.
value.size = 200; // This will not through a error
console.log('After',value.size);

console.log('---------------------------Let---------------------------------------------');
/* Let is blocked scoped variable like const but we can asssign any number of values on that scope.
*/
if(true){
    let count = 0;
    console.log('Inside First',count);
    count = 100;
    console.log('Inside Second',count);
}
//console.log('Outside',count); // Count is not Defined

console.log('------------------------Blocked Scope Functions----------------------------------');

function getUser() { return 'USER A';}
console.log(getUser());

if(true){
    this.getUser = () => { return 'USER B';}
    console.log('Inside',this.getUser());
}
console.log('Outside',getUser());

console.log('------------------------Arrow Functions----------------------------------');
let array = ['John','Jony','Doe','Hagda'];

let mapArray = array.map((value,index) => {
    return { value,index }
});
console.log(mapArray , ' /t' , array);
console.log('--------------------------------------------------------------------------');
let filterArray = array.filter((value) => { return value.includes('o') });
console.log(filterArray , ' /t' , array);
console.log('--------------------------------------------------------------------------');
let reduceArray = array.reduce((sum,value) => { return sum =+ value.length });
console.log(reduceArray , ' /t' , array.length);

console.log('------------------------Functions Without Arguments----------------------------------');
const getTimeStamp = () => Date.now().toString();
console.log(getTimeStamp());

console.log('-----------------------Spread Operators----------------------------------');
let getNumbers = (...args) => { return args; }
console.log(getNumbers(1,2,3,4,5,6));

console.log('------------------------Lexical Calling of This or Context----------------------------');
function Counter(){
    this._count = 0;

    /*setInterval(function(){
        console.log('Iteration :' + ++this._count)// Iteration of Nan
    },1000);*/
}
let counter = new Counter();

function Counter(){
    this._count = 0;
    /*setInterval(() => console.log('Iteration:',++this._count),1000);*/
}

console.log('------------------------Assigning Default Values----------------------------');

const createUser = (name='No Name') => { console.log(name)};
createUser();
createUser('John');

console.log('------------------------ Template Literals ----------------------------');
console.log(`The name of the person is ${getUser()}`);

console.log('------------------------Object Functions----------------------------');

let target = { a: 100 };
let first = { a: 1,b : { c : true}};
let second =  { b : { c : false, d : 'Hello' }};
console.log(Object.assign(target,first,second));

console.log('------------------------Symbol Data Types----------------------------');
let sym = Symbol();
console.log(sym);
console.log(Symbol('id') === Symbol('id'));

let id = Symbol.for('id');
console.log(Symbol.for('id') === id);
console.log(Symbol.keyFor(id));

/*Usages of Symbol */

let revision = Symbol('revision');
let privateId = Symbol('privateId');
let globalZone = Symbol.for('zone');

let document = {
    id : '123',
    [revision] : 10,
    [privateId] : '123abc',
    [globalZone] : 'US'
}
console.log(JSON.stringify(document));
console.log(document[revision]);
console.log(document[privateId]);
console.log(document[globalZone]);

console.log('---------------------------Clouser------------------------------------------');
function sum(a){
    let c = 10;
    return function (b){
        return a + b;
    }
}
console.log(sum(2)(3));

console.log('---------------------------Call Back Functions------------------------------------------');

function greeting(name){
    console.log('Hello ' + name);
}

function processUserInput(cb){
    console.log('Please Enter User Name');
    cb('John');
}

processUserInput(greeting);

console.log('--------------------------Higher Order Functions------------------------------------');

let coffeeLovers = ['John','Mac'];

function ageAbove18(person){
    return person.age >= 15;
}

function addCoffeeLover(person){
    for(let i of coffeeLovers){
        if(i === person.name){
            return person;
        }
    }
}

const people = [
    {'name' : 'John','age': 16},
    {'name' : 'Doe','age': 16},
    {'name' : 'Sam','age': 16},
]
console.log(people.filter(ageAbove18).map(addCoffeeLover));

console.log('-----------------------Public and Private Variable or function---------------------');

let person = function(name){
    let x = 90;
    let getdata = () => { return x }
    this.y = 100;
    this.sayHello = () => { getdata(); }
    return {
        getdata : getdata
    }
}

const foo = new person('Foo');
console.log(foo.getdata());


