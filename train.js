// console.log("Task-B YECHIMI");

// function countLetter(letter, word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// // Natijasini qaytirish

// console.log(countLetter("ad2a54Y79WET0SFGB9"));

//                                        console.log("TASK-A YECHIIMI");

//  function countLetter(letter, word) {
//    let count = 0;
//     for (let i = 0; i < word.length; i++) {
//          if (word[i] === letter) {
//             count++;
//        }
//     }
//     return count; //  natijasini qaytaramiz
//  }

//  console.log(countLetter("e", "engineer")); // => 3

// Node js event LOOp va Calback Functionlar

// console.log("Jack Ma maslahatlari");
// const list = [
// "yahshi talaba boling", //0-20
// "togri boshliq tanlang va koproq xato qiling", //20-30
// "uzingizga ishlashingizni boshlang", //30-40
// "siz kuchli bolgan narsalarni qiling", //40-50
// "yoshlarga invetsisya qiling", //50-60
// "endi dam oling, foydasi yoq endi", //60

// // const { resolveInclude } = require("ejs");

// ];

// function maslahatBering (a, callback)  {
// if (typeof a !== "number") callback("insert a number", null);
// else if (a <=20) callback(null, list[0]);
// else if (a > 20 && a <= 30) callback(null, list[1]);
// else if (a > 30 && a <= 40)  callback(null, list[2]);
// else if (a > 40 && a <= 50) callback(null, list[3]);
// else if (a > 50 && a <= 60) callback(null, list[4]);

// else {
//     setInterval(function () {
// callback(null, list[5]);
//     }, 1000);
//    }
// }

// console.log("Passed here 0");
// maslahatBering(70, (err, data) => {
//     if(err) console.log("EROR:", err);

//   else{
//     console.log("Javob:", data);
//   }
// });
// console.log("Paseed here 1");

// //

//                                                         //  asynchrnous Functionlarni qollash

// // console.log("Jack Ma maslahatlari");
// // const list = [
// // "yahshi talaba boling", //0-20
// // "togri boshliq tanlang va koproq xato qiling", //20-30
// // "uzingizga ishlashingizni boshlang", //30-40
// // "siz kuchli bolgan narsalarni qiling", //40-50
// // "yoshlarga invetsisya qiling", //50-60
// // "endi dam oling, foydasi yoq endi", //60

// // ];

// //  async function maslahatBering (a, callback)  {
// // if (typeof a !== "number") throw new Error("insert a number");
// // else if (a <=20) return list[0];
// // else if (a > 20 && a <= 30) return list[1];
// // else if (a > 30 && a <= 40)  return list[2];
// // else if (a > 40 && a <= 50) return list[3];
// // else if (a > 50 && a <= 60) return list[4];

// // else {
// //     // return list[5];
// // return new Promise((resolve, reject) => {
// // //     setTimeout(() => {
// // //   resolve(list[5]);
// // //     }, 5000);

// //    setInterval(()=>{
// //     resolve(list[5]);
// //    }, 1000);

// // });

//     // setTimeout(function () {
//     //     return list[5];
//     // }, 5000);
// //    }
// // }

// // call via then, /catch

// // console.log("Passed here 0");

// // maslahatBering(65)
// //    .then((data) => {
// //     console.log("Javob:", data);
// // })
// // .catch((err) => {
// //    console.log("ERROR:", err);
// // });
// // console.log("Passed here 1");

// // call via async/await orqali yasadik

// // async function run() {
// // let javob = await maslahatBering(25);
// // console.log(javob);
// // javob = await maslahatBering(95);
// // console.log(javob);
// // javob = await maslahatBering(41);
// // console.log(javob);
// // }
// // run();

// // async function run() {
// //     let javob = await maslahatBering(65);
// //     console.log(javob);
// //    javob = await maslahatBering(70);
// //    console.log(javob);
// //    javob = await maslahatBering(40);
// //    console.log(javob);

// //     }
// //     run();

// //
