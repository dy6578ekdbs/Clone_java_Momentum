
// let a = 5;
// let b = 7;

// let myName = "dayun";
// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log('hello ' + myName)

// myName = "dfjdfsdfdsf";
// console.log('hello ' + myName)


// camelCase,snakeCase
// 변수 만드는 법 세가지, var,const와 let
// constant : 상수 절대 안변함
// let으로 한번 생성하면, 계속 남아있는거임 let을 또 쓰면 안됨
// 옛날꺼는 var (룰이 없다) 안씀!!!!!!****


// const amIFat = null;
// console.log(amIFat);

// let something; //undefined
// console.log(something);

// true, false(참 또는 거짓이라는 값.) 
// null(그냥 아무 값이 없다) 혼자 생기지 않음. 우리가 지정해준거임.


// //array
// const mon = 'mon';
// const tue = 'tue';
// const week = [mon, tue];

// week.push('WEN') //추가 

// console.log(week);
// console.log(week[1]);


// object 
// const player = {
//     name : "dayun",
//     poinst : 12,
//     fat:true,
// };

// console.log(player.name);
// console.log(player["name"]);
// player.fat = false;

// console.log(player.fat);

// player.lastName = "potato";

// console.log(player);

// //function 만들기
// function sayHello(name, age){
//     console.log("hello! my name is " + name + age + " 살 이다.");
// }

// sayHello("다윤", 12);

// function plus(a, b){
//     console.log(a + b);
// }

// plus(1,2);


// // 
// const player = {
//     name:'dayun',
//     sayHello: function(name){
//         console.log("hello!" +  name); }}

// console.log(player.name);
// player.sayHello("다윤");

// let은 업데이트 가능


// list 
// const calculator = {
//     add: function(a, b){
//         alert(a+b);
//     },
    
//     minus: function(a, b){
//         console.log(a-b);
//     }
// };

// calculator.add(1,2);
        

//return 키워드 
// const age = 96;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);
// console.log(krAge);


//prompt 이제 잘 안씀
// //typeof
// const age = prompt("몇살이세요?");
// console.log( typeof "15", typeof parseInt("15"));

// 타입 바꾸기 parseInt(), 숫자 아닌거 넣으면 NaN이 뜬다 (not numner)

//isNaN : 숫자가 아니면 true 리턴


const age = parseInt(prompt("몇살?"));
console.log(isNaN(age));

// if 조건문, &&, ||

if(isNaN(age) || age < 0){
 console.log("숫자를 쓰라고");
}else if(age<18){
    console.log("술마시면안돼");
 
}else if(age>= 18 && age<=50){
    console.log("마셔라");

}
else if(age === 100){
    console.log("리스펙");

}
else if(age !== 100){
    console.log("리스펙");

}
else{
    console.log("이제 건강 생각도 하셔야죠");

}

if ((a && b) || (c || d))