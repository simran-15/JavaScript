//console.log("Simran");

let age = 23
let state;
let login = false;
//premitive datatypes
//number(int) = 2 to power 53
//bigint
//string = ""
//boolean = true or false
//null -> it is a standalone value;representation of empty value
//undefined ->variable is defined but the value is not
//symbols = unique(react)

//console.table([typeof "Simran", typeof null, typeof age, typeof undefined, typeof login]);

let score = "33abc"
let score_1 = 33
let score_2 = null
let score_3 = undefined
let score_4 = "simran"


//console.log("score = 33abc == ", typeof score);
//console.log("score_1 = 33 == ", typeof score_1);
//console.log("score_2 = null == ", typeof score_2);
//console.log("score_3 = undefined == ",typeof score_3);
//console.log("score_4 = simran == ",typeof score_4);


let value = Number(score); //conversion is done to number
//console.log(value)//NaN -> not a number
//console.log(typeof value);

let islogin = "1";
let islogin_str = "simran"
let islogin_n = ""
let islogin_nu = null

let convertbool = Boolean(islogin);//gives the value true
let convertbool_str = Boolean(islogin_str);//gives the value true
let convertbool_n = Boolean(islogin_n);//gives the value false
let convertbool_nu = Boolean(islogin_nu);//gives the value false

console.log(convertbool);
console.log(convertbool_str);
console.log(convertbool_n);
console.log(convertbool_nu);