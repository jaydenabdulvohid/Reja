function getHighestIndex(arr) {
  // highestIndex va highestValue o'zgaruvchilarini 0 va birinchi array elementiga tenglash
  let highestIndex = 0;
  let highestValue = arr[0];

  // Loop orqali arrayning qolgan barcha elementlarini tekshiramiz
  for (let i = 1; i < arr.length; i++) {
    // Agar hozirgi qiymat eng katta qiymatdan katta bo'lsa
    if (arr[i] > highestValue) {
      // highestValue va highestIndex o'zgaruvchilarini yangilaymiz
      highestValue = arr[i];
      highestIndex = i;
    }
  }

  // Eng yuqori indexni qaytaramiz
  return highestIndex;
}

// Test qilish uchun funksiya
let array = [5, 21, 12, 21, 8];
let highestIndex = getHighestIndex(array);
console.log("Highest Index:", highestIndex);

// F - task yechimi                                             F -task

// function findDoublers(str) {
//   let seen = {};
//   for (let char of str) {
//     if (seen[char]) {
//       return true;
//     } else {
//       seen[char] = true;
//     }
//   }
//   return false;
// }

// // Misol:
// console.log(findDoublers("hello")); // true

// E -task yechimi

// function getReverse(str) {
//   return str.split("").reverse().join("");
// }

// // Misol:
// console.log(getReverse("hello")); // "olleh"
// // d --task
// //  D task yechimi                                         // D -- task
// function checkContent(str1, str2) {
//   // Birinchi va ikkinchi stringlarni harflar bilan ob'ektlarga ajratib olish
//   const charCount1 = {};
//   const charCount2 = {};

//   // Birinchi stringdagi harflarni hisoblash
//   for (let char of str1) {
//     charCount1[char] = (charCount1[char] || 0) + 1;
//   }

//   // Ikkinchi stringdagi harflarni hisoblash
//   for (let char of str2) {
//     charCount2[char] = (charCount2[char] || 0) + 1;
//   }

//   // Har ikkala stringdagi harflarning mavjudligini solishtirish
//   for (let char in charCount1) {
//     if (!(char in charCount2)) {
//       return false;
//     }
//   }

//   // Ikkinchi stringdagi harflarning mavjudligini solishtirish
//   for (let char in charCount2) {
//     if (!(char in charCount1)) {
//       return false;
//     }
//   }

//   // Har ikkala stringda bir xil harflar mavjud
//   return true;
// }

// // Test qilish
// console.log(checkContent("mitgroup", "gmtiprou")); // true

// // D-TASK yechimi
// console.log("D-TASK yechimi:");
// class Shop {
//   constructor(nonlar, lagmonlar, colalar) {
//     this.nonlar = nonlar;
//     this.lagmonlar = lagmonlar;
//     this.colalar = colalar;
//   }

//   qoldiq() {
//     const now = new Date();
//     const hour = now.getHours();
//     const minute = now.getMinutes();
//     console.log(
//       `Hozir ${hour}:${minute}da ${this.nonlar}ta non, ${this.lagmonlar}ta lag'mon va ${this.colalar}ta cola mavjud!`
//     );
//   }

//   sotish(mahsulot, soni) {
//     if (mahsulot === "non") {
//       this.nonlar -= soni;
//     } else if (mahsulot === "lagmon") {
//       this.lagmonlar -= soni;
//     } else if (mahsulot === "cola") {
//       this.colalar -= soni;
//     }
//   }

//   qabul(mahsulot, soni) {
//     if (mahsulot === "non") {
//       this.nonlar += soni;
//     } else if (mahsulot === "lagmon") {
//       this.lagmonlar += soni;
//     } else if (mahsulot === "cola") {
//       this.colalar += soni;
//     }
//   }
// }

// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// shop.qoldiq();

// Challenge

// const fruits_list = [
//   "pear",
//   "banana",
//   "watermelon",
//   "cherry",
//   "blueberry",
//   "apelsin",
//   "peach",
//   "mongo",
//   "xurmo",
//   "olcha",
//   "tarvuz",
// ];

// function findFruits(txt) {
//   const foundFruits = [];
//   const letters = Array.from(txt.toLowerCase().replace(/[^a-z]/g, "")); // Faqatgina a-z oralig'ida bo'lgan belgilar
//   for (let fruit of fruits_list) {
//     let found = true;
//     for (let letter of letters) {
//       if (!fruit.includes(letter)) {
//         found = false;
//         break;
//       }
//     }
//     if (found) {
//       foundFruits.push(fruit);
//     }
//   }
//   return foundFruits;
// }

// const txt = "";
// const javob = findFruits(txt);
// console.log("Javob:", javob);

// console.log("Task-B YECHIMI");

// function countDigits(numbers) {
//   let digitCount = 0;
//   for (let char of numbers) {
//     if (!isNaN(char)) {
//       digitCount++;
//     }
//   }
//   return digitCount;
// }

// let inputNumbers = "ad254y79wet0sfgb9";
// console.log(countDigits(inputNumbers));

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
