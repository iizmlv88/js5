//! 1. Напишіть функцію, яка приймає 2 числа і повертає -1, якщо перше менше, ніж друге; 1 - якщо перше більше, ніж друге; 0 - якщо числа рівні.

// let one = +prompt("введіть число");
// let two = +prompt("введіть число");
// function porivniannia (one, two) {
//     if ( one < two) {
//         return "-1";
//     } else if ( one > two ) {
//         return "1";
//     } else if (one === two){
//         return "0";
//     }
// }
// alert(porivniannia(one, two));


//! 2. Напишіть функцію, яка вираховує факторіал переданого їй числа.
// let number = +prompt("введіть число");
// let n = 1;

// function factorial (number) {
//    for ( let i = 1; i <= number; i++) {
//     n *= i;
//    }
//    return n;
// }
// alert(factorial(number));




//! 3. Напишіть функцію, яка приймає три окремі цифри і перетворює їх на одне число. Наприклад: цифри 1, 4, 9 перетворяться на число 149.
// let numberOne = prompt("введіть число");
// let numberTwo = prompt("введіть число");
// let numberThree = prompt("введіть число");
// let res = 0;

// function trio (numberOne, numberTwo, numberThree) {
//     res = `${numberOne}`+`${numberTwo}`+`${numberThree}`;
//     console.log(res);
//    return Number(res);
// }
// alert(trio(numberOne, numberTwo, numberThree));



// //! 4. Напишіть функцію, яка приймає довжину та ширину прямокутника і обчислює його площу. Якщо у функцію передали 1 параметр, вона вираховує площу квадрата.
    // let a = +prompt("введіть довжину прямокутника для обчислення його площі");
    // let b = +prompt("введіть ширину прямокутника. Якщо у параметри передати тільки довжину, формула вираховує площу квадрата");
    // function square(a, b) {
    //     let res = a * b;
       
    //     if(b === 0) {
    //         res = a * a;
            
    //     }
    //     return res;
    // }
    // alert(square(a, b));


//! 5. Напишіть функцію, яка перевіряє, чи є передане їй число досконалим. Досконале число – це число, що дорівнює сумі всіх своїх власних дільників.
// let number = +prompt("введіть число");
// let res = 0;
// function doskonale (number) {
//     for( let i = 0; i <= number / 2; i++) {
//         if (number % i === 0) {
//             res += i;
//         } 
//     }
        
//     if (res === number && res !== 0){
//             alert("Досконале число");
//         } else {
//             alert("Не досконале число");
//         }
//     }

// doskonale (number);


//? 6. Напишіть функцію, яка приймає мінімальне і максимальне значення для діапазону і виводить ті числа з діапазону, які є досконалими. Використовуйте написану раніше функцію, щоб перевірити число на досконалість.

// let min = +prompt("введіть число");
// let max = +prompt("введіть число");

// function diapazon (min, max) {
   
//     for( let i = min; i <= max; i++) {

//         let sumadilnukiv = 0;

//         for( let j = 1; j <= i / 2; j++){
//             if (i % j === 0) {
//                 sumadilnukiv += j;
//             }
//         }
      
//        alert(res);
//     }
// }

// doskonale(min, max);


//! 7. Напишіть функцію, яка приймає час (години, хвилини, секунди) і виводить його на екран у форматі «година: хвилини:секунди». Якщо при виклику функції хвилини та/або секунди не були передані, виводити їх як 00.

//     let h = +prompt("введіть години");
//     let m = +prompt("введіть хвилини");
//     let s = +prompt("введіть секунди");

//     function tosecond (h, m, s) {

//     let doubleZero = "00";
//     let sum = `${h}:${m}:${s}`;

//     if ( h > 0 && h <= 24 && m > 0 && m < 60 && s > 0 && s < 60) {
//         sum = `${h}:${m}:${s}`;
//     } else if ( h > 0 && h <= 24 && m == 0 && s > 0 && s < 60) {
//         sum = `${h}:${doubleZero}:${s}`;
//     } else if ( h > 0 && h <= 24 && m > 0 && m < 60 && s == 0) {
//         sum = `${h}:${m}:${doubleZero}`;
//     }  else if ( h > 0 && h <= 24 && m == 0 && s == 0) {
//         sum = `${h}:${doubleZero}:${doubleZero}`;
//     }
//      return sum;
// }

//     alert(tosecond (h, m, s));




//! 8. Напишіть функцію, яка приймає години, хвилини та секунди і повертає цей час у секунди.
// let h = +prompt("введіть години");
// let m = +prompt("введіть хвилини");
// let s = +prompt("введіть секунди");
// function tosecond (h, m, s) {
//     let sum = (h * 60 * 60) +(m * 60) + s;
//     return sum;
// }
// alert(tosecond (h, m, s));



//! 9. Напищіть функцію, яка приймає кількість секунд, переводить їх у години, хвилини та секунди і повертає у вигляді рядка «година:хвилини:секунди».


// let a = +prompt("введіть секунди");
// function tosecond (a) {
//     let h = Math.floor(a / 3600);
//     let m = Math.floor((a - h * 3600) / 60);
//     let s = Math.floor(a - h * 3600 - m * 60);
//     return `${h}:${m}:${s}`;
// }
// alert(tosecond (a));






//! 10. Напишіть функцію, яка підраховує різницю між датами. Функція приймає 6 параметрів, що описують 2 дати, і повертає результат у вигляді рядка «година:хвилини: секунди». Під час виконання завдання використовуйте функції з попередніх 2 завдань: спочатку обидві дати переведіть у секунди, дізнайтеся різницю в секундах, а потім різницю переведіть назад у «година:хвилини:секунди».
// let hOne = +prompt("введіть години першої дати");
// let mOne = +prompt("введіть хвилини першої дати");
// let sOne = +prompt("введіть секунди першої дати");
// let hTwo = +prompt("введіть години другої дати");
// let mTwo = +prompt("введіть хвилини другої дати");
// let sTwo = +prompt("введіть секунди другої дати");

// function riznutsia (hOne, hTwo, mOne, mTwo, sOne, sTwo){

//     let sumOne = (hOne * 60 * 60) +(mOne * 60) + sOne;
//     let sumTwo = (hTwo * 60 * 60) +(mTwo * 60) + sTwo;
//     let sumMax;
//     let sumMin;
//     if (sumOne > sumTwo ) {
//         sumMax = sumOne;
//         sumMin - sumTwo
//     } else {
//         sumMax = sumTwo;
//         sumMin = sOne;
//     }
//     let res = sumMax - sumMin;
//     let h = Math.floor(res / 3600);
//     let m = Math.floor((res - h * 3600) / 60);
//     let s = Math.floor(res - h * 3600 - m * 60);


//     let doubleZero = "00";
//     let sum = `${h}:${m}:${s}`;

//     if ( h > 0 && h <= 24 && m > 0 && m < 60 && s > 0 && s < 60) {
//         sum = `${h}:${m}:${s}`;
//     } else if ( h > 0 && h <= 24 && m == 0 && s > 0 && s < 60) {
//         sum = `${h}:${doubleZero}:${s}`;
//     } else if ( h > 0 && h <= 24 && m > 0 && m < 60 && s == 0) {
//         sum = `${h}:${m}:${doubleZero}`;
//     }  else if ( h > 0 && h <= 24 && m == 0 && s == 0) {
//         sum = `${h}:${doubleZero}:${doubleZero}`;
//     }
//      return sum;
// }

//     // alert(tosecond (h, m, s));   

//     // return `${h}:${m}:${s}`;


// alert(riznutsia (hOne, hTwo, mOne, mTwo, sOne, sTwo));