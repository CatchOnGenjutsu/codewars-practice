//6
// function printer_error(str) {
//   let errors = 0;
//   for (let i = 0; i <= str.length - 1; i++) {
//     if (str.charCodeAt(i) > 109) {
//       errors += 1;
//     }
//   }
//   console.log(`${errors}/${str.length}`);
// }

// printer_error("wasted");

//7
// function toJadenCase(str) {
//   let splittedStr = str.split("");
//   let resultArray = splittedStr.map((item, index) => {
//     if (splittedStr[index - 1] === " " || index === 0) {
//       return item.toUpperCase();
//     } else return item;
//   });
//   console.log(resultArray.join(""));
// }

// toJadenCase("Всем привет меня зовут Дима");

//8
// function getFilteredArray(arr) {
//   arr.sort((a, b) => {
//     if (a < b) {
//       return -1;
//     }
//     if (a > b) {
//       return 1;
//     }
//     return 0;
//   });
//   const resultArray = [arr[0], arr[arr.length - 1]];
//   console.log(resultArray);
// }

// getFilteredArray([-1, 0, -3, 4, -7, 12]);

//9
// function simple(str) {
//   const splittedStr = str.split(" ");
//   let result = splittedStr[0].length;
//   splittedStr.map((item) => {
//     if (item.length < result) {
//       result = item.length;
//     }
//   });
//   console.log(result);
// }

// simple("На самом деле моё имя Игорь");

//10
// function findNeedle(arr) {
//   console.log(
//     `Нашел иголку на позиции ${arr.findIndex((item) => item === "needle")}`
//   );
// }

// findNeedle(["bla", "wekmvever", "bntyn", "qwd", "qfverv", "rtbrtb", "needle"]);

//11
// function invert(arr) {
//   const additiveArray = arr.map((item) => -item);
//   console.log(additiveArray);
// }
// invert([1, -2, 4, -5]);

//12
// function arrayDiff(arr, arrForSort) {
//   for (let i = arrForSort.length - 1; i >= 0; i--) {
//     for (let y = arr.length - 1; y >= 0; y--) {
//       if (arr[y] === arrForSort[i]) {
//         arr.splice(y, 1);
//       }
//     }
//   }
//   console.log(arr);
// }

// arrayDiff([1, 2], [1]);
// arrayDiff([1, 2, 2, 2, 3, 4], [2, 3]);

// function arrayDiff1(arr, arrForSort) {
//   let result = arr.filter((item) =>
//     !arrForSort.includes(item) ? item : false
//   );
//   console.log(result);
// }

// arrayDiff1([1, 2], [1]);
// arrayDiff1([1, 2, 2, 2, 3, 4], [2, 3]);

//13
// function countdown(num) {
//   let str = num;
//   num--;
//   while (num > 0) {
//     str += `, ${num}`;
//     num--;
//   }
//   console.log(str);
// }

// countdown(7);

//14
// function sum(arr) {
//   let first = undefined;
//   let second = undefined;
//   arr.forEach((item) => {
//     if (item <= 0) {
//       return;
//     }
//     if (first === undefined || item <= first) {
//       second = first;
//       first = item;
//     } else if (second === undefined || item <= second) {
//       second = item;
//     }
//   });
//   let result = first + second;
//   console.log(result);
// }
// sum([-12, 423, 54, 1235, -3, 15, 2, 52]);

// function sum1(arr) {
//   let array = arr
//     .sort((a, b) => {
//       if (a < b) {
//         return -1;
//       }
//       if (a > b) {
//         return 1;
//       }
//       return 0;
//     })
//     .filter((item) => item > 0);
//   let result = array[0] + array[1];
// }
// sum1([-12, 423, 54, 1235, -3, 15, 2, 52]);

//15
// function filteredStr(str) {
//   if (str === "") {
//     return str;
//   }
//   let resultArray = [];
//   let workingArray = str.split(" ");
//   workingArray.forEach((item) => {
//     for (let i of item) {
//       if (!isNaN(i)) {
//         resultArray[i - 1] = item;
//         return;
//       }
//     }
//   });
//   console.log(resultArray);
// }

// filteredStr("is2 Thi1s T4est 3a");

//16
// function replacer(str) {
//   let helpArr = str
//     .split(" ")
//     .map((element) => {
//       return element.split("").reverse().join("");
//     })
//     .join(" ");
//   console.log(helpArr);
// }

// replacer("This is an example!");

//17
// function solution(str) {
//   let result = str
//     .split("")
//     .map((item) => {
//       if (item.charCodeAt() === item.toLowerCase().charCodeAt()) {
//         return item;
//       } else {
//         return `_${item.toLowerCase()}`;
//       }
//     })
//     .join("");
//   console.log(result);
// }

// solution("redevCoursesMustHave");

//18
// function isPalindrome(str) {
//   let startArr = str.split("").filter((item) => (item !== " " ? item : false));
//   let reversedArr = str
//     .split("")
//     .reverse()
//     .filter((item) => (item !== " " ? item : false));
//   for (let i = 0; i <= startArr.length - 1; i++) {
//     if (startArr[i].toLowerCase() !== reversedArr[i].toLowerCase()) {
//       console.log("This string is not a palindrome");
//       return false;
//     }
//   }
//   console.log("This string is a palindrome");
// }

// isPalindrome("Я иду с мечем судия");

//19
// function countCats(arr) {
//   let result = 0;
//   arr.forEach((item) => {
//     item.forEach((i) => (i === "^^" ? (result += 1) : false));
//   });
//   console.log(result);
// }

// function countCats(arr) {
//   const newArr = arr.flat();
//   let result = newArr.reduce(
//     (sum, current) => (current === "^^" ? sum + 1 : sum),
//     0
//   );
//   console.log(result);
// }

// countCats([
//   [0, 1, "^^"],
//   [9, "^^", 2],
//   ["^^", 8, 7],
//   ["^^", 8, 7],
// ]);

//20
// function factorial(n) {
//   return n ? n * factorial(n - 1) : 1;
// }

// console.log(factorial(5));

//21
// function createDreamTeam(arr) {
//   let result = arr
//     .filter((item) => (typeof item === "string" ? item : false))
//     .sort()
//     .map((item) => item[0].toUpperCase())
//     .join("");
//   console.log(result);
// }
// createDreamTeam(["Matt", "Ann", "Dmitry", "Max"]);
// createDreamTeam(["Olivia", 1111, "Lily", "Oscar", true, null]);

//22
// function transform(arr) {
//   let result = arr.map((item, index) => {
//     if (item === "--double-next") {
//       arr.splice(index, 1, arr[index + 1]);
//       return arr[index + 1];
//     } else if (item === "--double-prev") {
//       return arr[index - 1];
//     } else {
//       return item;
//     }
//   });
//   result = result.filter((item, index) => {
//     if (result[index + 1] === "--discard-prev") {
//       result.splice(index - 1, 1);
//     } else if (item === "--discard-next") {
//       result.splice(index + 1, 1);
//     } else return item;
//   });
//   console.log(result);
// }

// function transform(arr) {
//   let result = arr
//     .map((item, index, arr) => {
//       switch (arr[index + 1]) {
//         case "--double-next":
//           arr[index + 1] = arr[index + 2];
//           return arr[index];
//         case "--double-prev":
//           arr[index + 1] = arr[index];
//           return arr[index];
//         case "--discard-next":
//           arr.splice(index + 1, 2);
//           return arr[index];
//         case "--discard-prev":
//           arr.splice(index - 1, 1);
//           break;
//         default:
//           return item;
//       }
//     })
//     .filter((i) => i != null);
//   console.log(result);
// }
// transform([1, 3, "--double-next", 4]);
// transform([1, 3, "--double-prev", 4]);
// transform([1, 3, "--discard-next", 4]);
// transform([1, 3, "--discard-prev", 4]);

//23
// const chainMaker = {
//   chain: new Array(),
// };
// chainMaker.getLength = function () {
//   console.log(this.chain.length);
//   return this;
// };
// chainMaker.addLink = function (val) {
//   val ? this.chain.push(`(${val})`) : this.chain.push("()");
//   return this;
// };
// chainMaker.removeLink = function (position) {
//   if (
//     !position ||
//     typeof position !== "number" ||
//     !Number.isInteger(position) ||
//     position < 0 ||
//     position > this.chain.length
//   ) {
//     console.log("Введено некорректное значение removeLink");
//   } else {
//     this.chain.splice(position - 1, 1);
//   }
//   return this;
// };
// chainMaker.reverseChain = function () {
//   this.chain.reverse();
//   return this;
// };
// chainMaker.finishChain = function () {
//   console.log(this.chain.join(" ~~ "));
//   this.chain = new Array();
//   return this;
// };
// chainMaker.addLink(1).addLink().reverseChain().addLink(3).finishChain();

//24
// function isUpperCase(str, character) {
//   if (str.split("")[character] !== str.split("")[character].toLowerCase()) {
//     return true;
//   } else return false;
// }

// console.log(isUpperCase("tasks JavaScript", 6));
// console.log(isUpperCase("tasks javaScript", 6));

//25
// function capitalizeFirstLetter(str) {
//   let result = str.split("");
//   result[0] = result[0].toUpperCase();
//   result = result.join("");
//   console.log(result);
// }

// capitalizeFirstLetter("это пример строки");

//26
// String.prototype.startsWith = function (start) {
//   let str = this.valueOf().split("").splice(0, start.length).join("");
//   str === start ? console.log(true) : console.log(false);
// };
// let str = "abc def ghi jkl mno pqr stu";
// str.startsWith("abcd");

//27
// function replaceAll(find, replace, str) {
//   let result = str
//     .split(" ")
//     .map((item) => (item === find ? replace : item))
//     .join(" ");
//   console.log(result);
// }

// replaceAll("abc", "x", "abc def def lom abc abc def");

//28
// function removeDuplicate(str) {
//   let result = Array.from(new Set(str.split(", "))).join(", ");
//   console.log(result);
// }
// removeDuplicate("вишня, груша, слива, груша");

//29
// function unique_letters(str) {
//   let result = Array.from(new Set(str.split(""))).join("");
//   console.log(result);
// }
// unique_letters("anaconda");

//30
// function alphabetize(str) {
//   let result = str.toLowerCase().split("").sort().join("");
//   console.log(result);
// }
// alphabetize("Беларусь");

//31
// function cutStringFromEnd(str, n) {
//   let result = str.split(" ").slice(0, n).join(" ");
//   console.log(result);
// }
// function cutStringFromStart(str, n) {
//   let result = str.split(" ").slice(-5).join(" ");
//   console.log(result);
// }
// cutStringFromEnd("Сила тяжести приложена к центру масс тела", 5);
// cutStringFromStart("Сила тяжести приложена к центру масс тела", 5);

//32
// function strip(str) {
//   let result = str
//     .split(" ")
//     .map((i) => i.trim())
//     .filter((i) => i)
//     .join(" ");
//   console.log(result);
// }
// strip("    Pasha is a good      boy     ");

//33
// function comparison(str1, str2) {
//   str1.toLowerCase() === str2.toLowerCase()
//     ? console.log(true)
//     : console.log(false);
// }
// comparison("string", "StRiNg");

//34
// String.prototype.endsWith = function (substr) {
//   let str = this.valueOf().split("").splice(-substr.length).join("");
//   str === substr ? console.log(true) : console.log(false);
// };
// let str = "Каждый охотник желает знать";
// let str1 = "скрипт";
// let str2 = "знать";
// str.endsWith(str1);
// str.endsWith(str2);

//35
// function arrayClone(arr) {
//   let result = [...arr];
//   result.push("newItem");
//   console.log(arr);
//   console.log(result);
// }

// arrayClone(["Капуста", "Репа", "Редиска"]);

//36
// function colonOdd(num) {
//   let result = num
//     .toString()
//     .split("")
//     .map((item, index, arr) =>
//       arr.indexOf(item) !== arr.length - 1 &&
//       item !== ":" &&
//       arr[index + 1] % 2 !== 0 &&
//       item % 2 !== 0
//         ? `${item}:`
//         : item
//     )
//     .join("");
//   console.log(result);
// }
// colonOdd(55639217);

//37
// function removeDuplicates(arr) {
//   let result = Array.from(new Set(arr));
//   console.log(result);
// }
// removeDuplicates([
//   "php",
//   "php",
//   "css",
//   "css",
//   "script",
//   "script",
//   "html",
//   "html",
//   "java",
// ]);

//38
// let array1 = [1, 2, 3, 4, 5];

// let array2 = [4, 5, 6];

// function func(arr1, arr2) {
//   let result = arr1.map((item, index) =>
//     item && arr2[index] ? item + arr2[index] : item
//   );
//   console.log(result);
// }

// func(array1, array2);

//39
// let arr1 = [1, [2, [3, [4]]]];

// let arr2 = [1, [2], [3, [[4]]], [5, 6]];

// function expand(arr) {
//   console.log(arr.flat(Infinity));
// }

// expand(arr1);
// expand(arr2);

//40
// let array = [7, "z", "z", "z", 3, 7, "z", 7, "z", 3, 5, 7];

// function func(arr) {
//   let symbol = "";
//   let mainCount = 0;
//   let workCount = 1;

//   arr.sort().forEach((element, index) => {
//     if (arr[index + 1] === element) {
//       workCount += 1;
//     } else if (index === arr.length - 1) {
//       workCount += 1;
//       if (workCount >= mainCount) {
//         symbol = element;
//         workCount = 1;
//       }
//     } else {
//       if (workCount >= mainCount) {
//         symbol = element;
//         mainCount = workCount;
//         workCount = 1;
//       }
//     }
//   });
//   console.log(symbol);
// }

// func(array);

//41
// function sum(a) {
//   let currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return f;
//   }

//   f.toString = function () {
//     return currentSum;
//   };

//   return f;
// }
// alert(sum(1)(2)(3));

//42
// function isSame(arr) {
//   let result = false;
//   let newArr = arr.map((element) => {
//     return element.split("").sort().join("");
//   });
//   let firstItem = newArr[0];
//   for (let item of newArr) {
//     if (item === firstItem) {
//       result = true;
//     } else result = false;
//   }
//   console.log(result);
// }
// isSame(["кот", "тк", "кТо"]);

//43
// function maskify(num) {
//   let result = num
//     .split("")
//     .map((item, index) => (index < num.length - 4 ? "#" : item))
//     .join("");
//   console.log(result);
// }
// maskify("4556364607935616");

//44
// function squareDigits(num) {
//   let result = Number(
//     num
//       .toString()
//       .split("")
//       .map((item) => item ** 2)
//       .join("")
//   );
//   console.log(typeof result, result);
// }
// squareDigits(9119);

//45
// function longest(str1, str2) {
//   let result = Array.from(new Set((str1 + str2).split("")))
//     .sort()
//     .join("");
//   console.log(result);
// }
// longest("xyaabbbccccdefww", "xxxxyyyyabklmopq");

//46
// function busStops(arr) {
//   let result = 0;
//   arr.forEach((element) => {
//     result += element[0] - element[1];
//   });
//   console.log(result);
// }
// busStops([[3, 0],[9, 1],[4, 10],[12, 2],[6, 1],[7, 10]]);

//47
// function anagrams(word, arr) {
//   let sortWord = word.split("").sort().join("");
//   let newArr = arr.map((element) => {
//     return element.split("").sort().join("");
//   });
//   let result = newArr
//     .map((item, index) => {
//       if (item === sortWord) {
//         return arr[index];
//       }
//     })
//     .filter((i) => i);

//   console.log(result);
// }
// anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);

//48
// function likes(arr) {
//   switch (arr.length) {
//     case 0:
//       console.log("no one likes this");
//       break;
//     case 1:
//       console.log(`${arr[0]} likes this`);
//       break;
//     case 2:
//       console.log(`${arr[0]} and ${arr[1]} like this`);
//       break;
//     case 3:
//       console.log(`${arr[0]}, ${arr[1]} and ${arr[2]} like this`);
//       break;
//     default:
//       console.log(`${arr[0]}, ${arr[1]} and ${arr.length - 2} like this`);
//       break;
//   }
// }
// likes([]);
// likes(["Peter"]);
// likes(["Jacob", "Alex"]);
// likes(["Max", "John", "Mark"]);
// likes(["Alex", "Jacob", "Mark", "Max"]);

//49
// function findMissingLetter(arr) {
//   let symbol = "";
//   let testArray = [];
//   arr.forEach((element) => {
//     testArray.push(element.charCodeAt());
//   });
//   testArray.filter((item, index, arr1) => {
//     if (item + 1 !== arr1[index + 1] && index !== arr1.length - 1) {
//       symbol = item + 1;
//     }
//   });
//   console.log(String.fromCharCode(symbol));
// }
// findMissingLetter(["а", "б", "в", "г", "е"]);

//50
// function moveZeros(arr) {
// arr.sort((a, b) => {
//   if (b === 0) {
//     if (a !== 0) {
//       return -1;
//     }
//   }
// });
//   return arr;
// }

// console.log(moveZeros([false, 1, 0, 0, 0, 1, 2, 0, 1, 3, "a"]));

//CODEWARS

// function solution(str, ending) {
//   if (ending.length === 0) {
//     return true;
//   }
//   let str2 = str.split("").splice(-ending.length).join("");
//   if (str2 === ending) {
//     return true;
//   } else return false;
// }

// function solution(str, ending) {ending.length === 0 ? true : (str.split("").splice(-ending.length).join("") === ending ? true : false)}

// solution("samurai", "ai");
// solution("abcde", "abc");

// function digitalRoot(n) {
//   let arr = n.toString().split("");
//   console.log(
//     arr.reduce((sum, current) => {
//       if (current !== 0) {
//         console.log("cur if " + current);
//         console.log("sum if " + sum);
//         return sum + current * 1;
//       } else {
//         console.log("sum else " + sum);
//         return sum * 1;
//       }
//     }, 0)
//   );
// }

// function digitalRoot(n) {
//   if (undefined) {
//     return 6;
//   }
//   let num = n / 1;
//   console.log(num);
//   // if (num >= 8 && num <= 15) {
//   //   num += 2;
//   // }
//   let result = num
//     .toString()
//     .split("")
//     .reduce((sum, current) => Number(sum) + Number(current), 0);
//   if (result.toString().length >= 2) {
//     digitalRoot(result);
//   } else {
//     console.log(result);
//     return result;
//   }
// }

// digitalRoot(456);

// function makeCounter(p0, percent, aug, p) {
//   let count = 0;
//   return function (p0, percent, aug, p) {
//     if (p0 < p) {
//       let result = Math.round(p0 + (p0 * percent) / 100 + aug);
//       makeCounter(result, percent, aug, p);
//     } else {
//       console.log(count);
//     }
//     return count++;
//   };
// }
// let nbYear = makeCounter();
// console.log(nbYear(1500000, 2.5, 10000, 2000000));

// function absentVowel(x) {
//   let arr = ["a", "e", "i", "o", "u"];
//   for (let item of arr) {
//     if (!x.split("").includes(item)) {
//       return arr.indexOf(item);
//     }
//   }
// }
// console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"));

// function sum(n) {
//   if (n <= 0) {
//     return 0;
//   } else {
//     let result = 0;
//     for (i = n; i >= 0; i--) {
//       for (j = 1; j <= i; j++) {
//         result += j;
//       }
//     }
//     return result;
//   }
// }
// sum(943);

// function accum(s) {
//   return s
//     .split("")
//     .map((item, index) => {
//       let res = [item.toUpperCase()];
//       for (i = 1; i <= index; i++) {
//         res.push(item.toLowerCase());
//       }
//       return res.join("");
//     })
//     .join("-");
// }

// console.log(accum("abcd"));

// function towerBuilder(nFloors) {
//   let res = [];
//   for (j = nFloors; j >= 1; j--) {
//     let arr = [];
//     if (j >= nFloors) {
//       for (i = 1; i <= j * 2 - 1; i++) {
//         arr.push("*");
//       }
//     } else {
//       for (i = nFloors - j; i >= 1; i--) {
//         arr.push(" ");
//       }
//       for (i = 1; i <= j * 2 - 1; i++) {
//         arr.push("*");
//       }
//       for (i = nFloors - j; i >= 1; i--) {
//         arr.push(" ");
//       }
//     }

//     res.push(arr.join(""));
//   }
//   return res.reverse();
// }

// towerBuilder(7);

// function createPhoneNumber(numbers) {
//   return numbers
//     .map((item, index) => {
//       switch (index) {
//         case 0:
//           return "(" + item;
//           break;
//         case 2:
//           return item + ") ";
//           break;
//         case 5:
//           return item + "-";
//           break;
//         default:
//           return item;
//           break;
//       }
//     })
//     .join("");
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function duplicateCount(text) {
//   let help = [];
//   let arr = text
//     .split("")
//     .map((i) => i.toLowerCase())
//     .sort()
//     .map((item, index, array) => {
//       if (item === array[index + 1] && !help.includes(item)) {
//         help.push(item);
//       }
//     });
//   return help.length;
// }
// duplicateCount("abcde");
// duplicateCount("aabbcde");
// duplicateCount("aabBcde");
// duplicateCount("indivisibility");
// duplicateCount("Indivisibilities");
// duplicateCount("aA11");
// duplicateCount("ABBA");

// function findOutlier(integers) {
//   let secondArr = integers.map((item) => item % 2);
//   secondArr.filter((item, index, array) => {
//     if (item !== array[index + 1] && array[index + 1] !== undefined) {
//       console.log(integers[secondArr.indexOf(array[index + 1])]);
//     }
//   });
// }
// findOutlier([160, 3, 1719, 19, 11, 13, -21]);

// function expandedForm(num) {
//   let arr = num.toString().split("");
//   let str = "";
//   arr.forEach((item, index, array) => {
//     if (item !== "0") {
//       let newStr = item + "0".repeat(array.length - index - 1);
//       if (arr.indexOf(item) !== arr.length - 1) {
//         str += `${newStr} + `;
//       } else str += newStr;
//     }
//   });
//   if (str.at(-1) === " ") {
//     str = str.slice(0, str.length - 3);
//   }
//   console.log(str);
// }
// expandedForm(4982342);

// function solution(string) {
//   return string
//     .split("")
//     .map((item) => (item !== item.toLowerCase() ? ` ${item}` : item))
//     .join("");
// }
// console.log(solution("camelCasing"));

// function orderWeight(strng) {
//   let arr = strng.split(" ").sort((a, b) => {
//     if (a.split('').reduce((sum, current) => sum + Number(current), 0) > b.split('').reduce((sum, current) => sum + Number(current), 0)) return 1;
//     if (a.split('').reduce((sum, current) => sum + Number(current), 0) === b.split('').reduce((sum, current) => sum + Number(current), 0)) return a.localeCompare(b);
//     if (a.split('').reduce((sum, current) => sum + Number(current), 0) < b.split('').reduce((sum, current) => sum + Number(current), 0)) return -1;
//   }).join(" ");
//   console.log(arr);
// }
// orderWeight("56 65 74 100 99 68 86 180 90");

// function rot13(message) {
//   let result = message
//     .split("")
//     .map((item) => {
//       if (item.charCodeAt() >= 65 && item.charCodeAt() <= 90) {
//         if (item.charCodeAt() + 13 > 90) {
//           i = 13 - (90 - item.charCodeAt()) + 64;
//           return String.fromCharCode(i);
//         } else {
//           return String.fromCharCode(item.charCodeAt() + 13);
//         }
//       } else if (item.charCodeAt() >= 97 && item.charCodeAt() <= 122) {
//         if (item.charCodeAt() + 13 > 122) {
//           i = 13 - (122 - item.charCodeAt()) + 96;
//           return String.fromCharCode(i);
//         } else {
//           return String.fromCharCode(item.charCodeAt() + 13);
//         }
//       } else return item;
//     })
//     .join("");
//   console.log(result);
// }
// rot13("TEST coder");

// function solution(list) {
//   // let newArr = [];
//   let result = list.filter((item, index, array) => {
//     if (item !== array[index + 1] - 1 || array.indexOf(item) === 0) {
//       return item;
//     }
//   });
//   console.log(result);
// }
// solution([
//   -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
//   19, 20,
// ]);

// function pickPeaks(arr) {
//   let obj = {
//     pos: [],
//     peaks: [],
//   };

//   arr.forEach((item, index, array) => {
//     if (
//       item > array[index - 1] &&
//       item > array[index + 1] &&
//       index !== 0 &&
//       index !== array.length - 1
//     ) {
//       obj.pos.push(index);
//       obj.peaks.push(item);
//     }
//     if (
//       item > array[index - 1] &&
//       item === array[index + 1] &&
//       index !== 0 &&
//       index !== array.length - 1
//     ) {
//       for (let i = index + 1; i <= array.length - 1; i++) {
//         if (array[i] > item) {
//           return;
//         }
//         if (array[i] < item) {
//           obj.pos.push(index);
//           obj.peaks.push(item);
//           return;
//         }
//       }
//     }
//   });

//   console.log(obj);
// }
// pickPeaks([
//   1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3,
// ]);

// function sumStrings(a, b) {
//   a = a.split("");
//   b = b.split("");
//   let result = "";
//   let flag = 0;
//   while (a.length || b.length || flag) {
//     flag += ~~a.pop() + ~~b.pop();
//     result = (flag % 10) + result;
//     flag = flag > 9;
//   }
//   return result.replace(/^0+/, "");
// }
// console.log(
//   sumStrings("712569312664357328695151392", "8100824045303269669937")
// );

// function formatDuration(seconds) {
//   if (seconds === 0 || seconds === undefined) {
//     return "now";
//   }
//   let arr = [0, 0, 0, 0, 0];
//   let textArr = [
//     ["year", "years"],
//     ["day", "days"],
//     ["hour", "hours"],
//     ["minute", "minutes"],
//     ["second", "seconds"],
//   ];
//   let time = seconds;
//   while (time > 0) {
//     if (time / 31536000 > 1) {
//       arr[0] = Math.floor(time / 31536000);
//       time = time - Math.floor(time / 31536000) * 31536000;
//     }
//     if (time / 86400 > 1) {
//       arr[1] = Math.floor(time / 86400);
//       time = time - Math.floor(time / 86400) * 86400;
//     }
//     if (time / 3600 >= 1) {
//       arr[2] = Math.floor(time / 3600);
//       time = time - Math.floor(time / 3600) * 3600;
//     }
//     if (time / 60 > 1) {
//       arr[3] = Math.floor(time / 60);
//       time = time - Math.floor(time / 60) * 60;
//     } else {
//       arr[4] = time;
//       time = 0;
//     }
//   }
//   let resArr = arr
//     .map((item, index) => {
//       if (item === 0) {
//         return undefined;
//       } else if (item <= 1) {
//         return `${item} ${textArr[index][0]}`;
//       } else {
//         return `${item} ${textArr[index][1]}`;
//       }
//     })
//     .filter((i) => i);
//   let res = "";
//   resArr.forEach((item, index, array) => {
//     if (
//       array.indexOf(array[index + 1]) !== resArr.length - 1 &&
//       index !== array.length - 1
//     ) {
//       res += `${item}, `;
//     } else if (array.indexOf(array[index + 1]) === resArr.length - 1) {
//       res += `${item} and `;
//     } else {
//       res += `${item}`;
//     }
//   });
//   return res;
// }

// console.log(formatDuration(43244821));

function scramble(str1, str2) {
  let arr1 = str1.split("").sort();
  let arr2 = str2.split("").sort();
  for (let i = 0; i <= arr2.length - 1; i++) {
    if (!arr1.includes(arr2[i])) {
      return false;
    } else {
      arr1[arr1.indexOf(arr2[i])] = null;
    }
  }
  return true;
}
console.log(scramble("cedewaraaossoqqyt", "codewars"));
