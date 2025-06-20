
// TASK F

function findDoublers(str) {
 
  let charCount = {};

   for (let char of str) {
    
    if (charCount[char]) {
      return true;
    } else {
      charCount[char] = 1;
    }
  }


  return false;
}

// Misollar
console.log(findDoublers("umbassador")); 
console.log(findDoublers("Shohruxxon")); 
console.log(findDoublers("Buchon st")); 
















// //Task E

// function getReverse(text) {
//   return text.split("").reverse().join("");
// }

// let a = "salom";
// let natija = getReverse(a);
// console.log(getReverse("salom"));





// //D task 


// function checkContent(str1, str2) {
 
//   const sorted1 = str1.split("").sort().join("");
//   const sorted2 = str2.split("").sort().join("");

//   return sorted1 === sorted2;
// }

// // Test
// console.log(checkContent("mitgroup", "gmtiprou")); 
// console.log(checkContent("nissan", "nssian"));       
// console.log(checkContent("undestand", "undjhajbofdef"));           



  


//C task 


// const moment = require("moment"); 

// class Shop {
//   constructor(piyoz, osh, cola) {
//     this.piyoz = piyoz;
//     this.osh = osh;
//     this.cola = cola;
//   }

//   time() {
//     return moment().format("HH:mm");
//   }

//   qoldiq() {
//     console.log(
//       `Hozir ${this.time()} da ${this.piyoz} ta piyoz, ${this.osh} ta osh va ${this.cola} ta cola mavjud`
//     );
//   }

//   sotish(mahsulot, miqdor) {
//     if (this[mahsulot] !== undefined) {
//       this[mahsulot] -= miqdor;
//       if (this[mahsulot] < 0) this[mahsulot] = 0;
//       console.log(`${this.time()} - Sotildi: ${miqdor} ta ${mahsulot}`);
//     } else {
//       console.log(`${this.time()} - Bunday mahsulot yo'q: ${mahsulot}`);
//     }
//   }

//   qabul(mahsulot, miqdor) {
//     if (this[mahsulot] !== undefined) {
//       this[mahsulot] += miqdor;
//       console.log(`${this.time()} - Qabul qilindi: ${miqdor} ta ${mahsulot}`);
//     } else {
//       console.log(`${this.time()} - Bunday mahsulot yo'q: ${mahsulot}`);
//     }
//   }
// }

// const dokon = new Shop(4, 5, 2); 

// dokon.qoldiq();
// dokon.sotish("piyoz", 3);
// dokon.qabul("cola", 4);
// dokon.qoldiq();

//B Task

// function countDigits(text) {
//     return (text.match(/\d/g) || []).length;
// }

// console.log(countDigits("ad2a54y79wet0sfgb9")); 




//bu yerda tekshirildi 












// //Mini task
// function countLetter(letter, word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }


// console.log(countLetter("s", "assalom"));














// console.log("Jack Ma maslahatlari");
// const lits = [];

//  asyncfunction maslahatBering(a,) {

//   if (typeof a !== "number") throw new Error ("Iltimos, raqam kiriting");
//   else if (a <= 20) return lits[0];
//   else if (a > 20 && a <= 30) callback(null, lits[1]);
//   else if (a > 30 && a <= 40) callback(null, lits[2]);
//   else if (a > 40 && a <= 50) callback(null, lits[3]);
//   else if (a > 50 && a <= 60) callback(null, lits[4]);
//   else 
//   return new Promise((resolve, reject) => {
//     setTimeout(() {
//       resolve(lits[5]);
//     }, 5000);
 
// }


// //then/catch

// async function run(){
//     let javob = await maslahatBering(65);
//     console.log(javob);

// }
// run()







//=============================================











// console.log("Jack Ma maslahatlari");

// const lits = [
//   "yahshi talaba bo‘ling", // 0-20
//   "to‘g‘ri boshliq tanlang va ko‘proq xato qiling", // 20-30
//   "o‘zingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bo‘lgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yo‘q endi", // 60-70
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Iltimos, raqam kiriting", null);
//   else if (a <= 20) callback(null, lits[0]);
//   else if (a > 20 && a <= 30) callback(null, lits[1]);
//   else if (a > 30 && a <= 40) callback(null, lits[2]);
//   else if (a > 40 && a <= 50) callback(null, lits[3]);
//   else if (a > 50 && a <= 60) callback(null, lits[4]);
//   else 
//   setTimeout(function() {
//     callback(null, lits[5]);
//   }, 5000);
  
// }



// console.log("passed here 0");
// maslahatBering(25, function(err, data) {
//   if (err) console.log('ERROR:', err);
//   else console.log('Javob:', data);
// });
// console.log("passed here 1");