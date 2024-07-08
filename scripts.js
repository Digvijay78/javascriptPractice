//find the longest word in an array

//using sort method , sort method work on the basic of unicorn values
findLongestWord = (str) => {
  if (str.trim === 0) {
    return 0;
  }

  const word = str.split(" ");
  // console.log(word);

  word.sort((a, b) => b.length - a.length);
  console.log(word.at(0));
};
findLongestWord("hi my name is Digvijay sing Hurrah awesomeTEchnical");

//using reduce

const findLongestWord = (str) => {
  const word = str.split(" ");
  console.log(word);

  const maxWord = word.reduce(
    (acc, value) => (acc.length > value.length ? acc : value),
    ""
  );
  console.log(maxWord);
};

findLongestWord(
  "hi my name is Digvijay,longlivehello sing awesomeTEchnical Hurrah "
);

// -------------------------------------------------------------

//find the sum of an array using reduce method
//////////////////////////////////////////////////////////////////

const num = [1, 2, 4, 5, 7, 8, 9];

const total = num.reduce(sum, 0);

function sum(acc, value) {
  return acc + value;
}

console.log(total);

// -----------------------------------------------------------------------

// find the max number in an array

const num = [4, 7, 8, 2, 88, 9, 90, 1, 2];

const max = num.reduce(maxNum, 0);

function maxNum(acc, value) {
  return value > acc ? value : acc;
}

console.log(max);

// -------------------------------------------------------------------------------------------

// find the value of the all the product in the store

const store = [
  { product: "laptop", value: 1000, count: 2 },
  { product: "mobile", value: 5000, count: 5 },
  { product: "laptop", value: 3000, count: 4 },
];

const total = store.reduce(findingmax, { product: "", maxValue: 0 });

function findingmax(acc, item) {
  const currentMaxValue = item.value * item.count;

  if (currentMaxValue > acc.maxValue) {
    return { product: item.product, maxValue: currentMaxValue };
  } else {
    return acc;
  }
}
console.log(total);

// Thapa video 2

// first letter of every element should be captial and start with #

const captialLetter = (str) => {
  str = str.trim();
  const wordArr = str.split(" ");

  const ans = wordArr.map(
    (el) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
  );

  // let newStr = wordArr.map((el) => el.replace(el[0] , el[0].toUpperCase() ) )

  newStr = `#${ans.join("")}`;
  // console.log(typeof(newStr));
};

captialLetter("my name is digvijay singh ");

// ------------------------------------------

// count the number of occurence of an element inside an word

const countWord = (word, ch) => {
  word = word.toLowerCase();
  ch = ch.toLowerCase();

  // let count = 0;

  word = word.split("");
  // console.log(word);

  let occ = word.reduce(
    (acc, value) => (value === ch ? (acc = acc + 1) : acc),
    0
  );
  console.log(occ);
};

countWord("MissIssipi", "I");

// --------------------------------------------

// sort the array

const nums = [3, 4, 6, 2, 6, , 6, 8, 9, 10];

let ass = nums.sort((a, b) => a - b);

console.log(ass);
// --------------------------------------------

// check for plaindrome

// const word = "A man, a plan, a canal, Panama";

const checkPalindrome = (word) => {
  word = word.toLowerCase().replace(/\W/g, "");
  word = word;
  //  console.log(word);
  reverseWord = word.split("").reverse().join("");
  console.log(reverseWord);

  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
};

console.log(4 - "a");

console.log(checkPalindrome("A man, a plan, a canal, Panama"));
console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("hello"));

// -------------------------------------------------

// factorial

const factorial = (num) => {
  if (num === 0) return 1;

  const arr = Array.from({ length: num }, (val, i) => i + 1);
  //    console.log(arr);

  const result = arr.reduce((acc, val) => acc * val, 1);

  //  function multiply (acc,val) {
  //     return acc * val
  //  }
  console.log(result);
};

console.log(factorial(5));

// -------------------------------------------

// find the avergae

const avera = (arr) => {
  const newArr = arr.reduce((acc, val) => acc + val, 0);

  const avgNum = newArr / arr.length;

  console.log(avgNum);
};

avera([1, 2, 3, 4, 5, 6, 7, 8]);

// ----------------------------------------

// arrays are qual or not

const check = (arr1, arr2) => {
  arr1 = arr1.join("");
  arr2 = arr2.join("");

  if (arr1 === arr2) return true;
  else return false;
};

check([1, 2, 3], [1, 2, 3]);

// -----------------------------------------
// sum of digits

const sum = (num) => {
  let arr = Array.from(String(num), Number);

  return arr.reduce((acc, val) => acc + val, 0);
};

console.log(sum(12345));
// -------------------------------

// check duplicates

const check = (arr) => {
  return arr.filter((el, index, arr) => index === arr.indexOf(el));
};

console.log(check([1, 2, 3, 4, 1, 5, 6, 2]));

// ----------------------------------------------

// vowels present or not

const check = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];

  str = str.toLowerCase().split("");

  const count = str.reduce((acc, value) => {
    if (vowels.includes(value)) {
      return (acc += 1);
    } else {
      return acc;
    }
  }, 0);

  console.log(count);
};

check("my nAme Is dIg UmnO");

// ------------------------------------------------------------

// sum of square

const sumsquare = (arr) => {
  return arr.reduce((acc, val) => acc + val * val, 0);
};

console.log(sumsquare([1, 2, 3]));

// ------------------------------------------------------------------

const convert = (str) => {
  str = str.split(" ");

  strNew = str.map((el, index) => {
    if (index === 0) {
      return el;
    } else {
      return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    }
  });
  // str = str.replace(/\s+/g, "_")
  // console.log(str);

  console.log(strNew.join(""));
};

convert("hi my name is digvijay");

// -------------------------------------------------------------------------------

// check if the string start with given substring

const check = (str, nam) => {
  str = str.split(" ");

  if (str[0] == nam) {
    return true;
  } else {
    return false;
  }
};

console.log(check("hello my name is gosh", "hello"));

// ----------------------------------------------------------------

const convert = (char) => {
  let i = 0;
  j = char.length - 1;

  while (i <= j) {
    swap(char[i], char[j]);
    i++;
    j--;
  }

  console.log(char);
};

convert("digvijay");

// ---------------------------------------------------------

// find the median

const median = (arr) => {
  arr = arr.sort((a, b) => a - b);
  let n = arr.length;

  if (n % 2 === 1) {
    return arr[Math.floor(n / 2)];
  } else {
    return (arr[n / 2] + arr[n / 2 - 1]) / 2;
  }
};

console.log(median([1, 2, 3, 4, 5, 6, 7]));

// ----------------------------------------------------------
// find max occurence element
const obj = {};

const count = (arr) => {
  arr.forEach((el) => {
    if (obj[el]) {
      obj[el] += 1;
    } else {
      obj[el] = 1;
    }
  });
};
count([1, 2, 3, 4, 5, 6, 2, 4, 2, 4, 3, 1, 6, 4]);

console.log(obj);

// ---------------------------------------------------------------------

// find the max occurence of an element

const maxCount = (arr) => {
  const obj = {};

  arr.forEach((el) => {
    if (obj[el]) {
      obj[el] += 1;
    } else {
      obj[el] = 1;
    }
  });

  let maxEl = null;
  let maxiCount = 0;

  for (let el in obj) {
    if (obj[el] > maxiCount) {
      maxiCount = obj[el];
      maxEl = el;
    }
  }

  return { maxEl, maxiCount };
};

const ans = maxCount([1, 2, 3, 4, 5, 2, 2, 3, 1, 4, 3, 3, 3, 3, 3, 3, 3]);
console.log(ans);
// -------------------------------------------------

//factorial

const factorial = (num) => {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(5));

// -------------------------------------------------

// repeating string to the number of times given

const arr = [];
const repeating = (str, num) => {
  if (num == 0) {
    return arr;
  }
  arr.push(str);
  return repeating(str, num - 1);
};

let newArr = repeating("abc", 5);

console.log(newArr.join(""));

// --------------------------------------------------------

// generate an array using Array.from

const check = (str, num) => {
  return str.split("").splice(0, num).concat("...").join("");
};

console.log(check("hi my name is digvijay", 8));

// ------------------------------------------

const numberRange = (num1, num2) => {
  return Array.from({ length: num2 - num1 + 1 }, (val, index) =>
    index === 0 ? num1 : (num1 += 1)
  );
};

console.log(numberRange(0, 5));
// ------------------------------------------------------------------

// generate an array using Array from

const numberRange = (num1, num2) => {
  return Array.from({ length: num2 - num1 + 1 }, (val, index) =>
    index === 0 ? num1 : (num1 += 1)
  );
};

console.log(numberRange(-2, 2));

// -----------------------------------------

// remove duplicates

const check = (arr) => {
  return arr.filter((el, index) => arr.indexOf(el) === index);
};

console.log(check([1, 2, 3, 2, 2, 4, 5, 4, 1, 3]));

// ---------------------------------

let arr = [];
const number = (a, b) => {
  if (a === b) {
    return arr.push(a);
  } else {
    arr.push(a);
    a = a + 1;
    return number(a, b);
  }
};
number(0, 5);
console.log(arr);

// ------------------------------------------------

const check = (str) => {
  let hasLowercase = false;
  let hasUppercase = false;
  let hasDigit = false;
  // let hasSymbol = false;

  let a = str.split("");
  // console.log(a);

  a.forEach((el) => {
    if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
      hasUppercase = true;
    } else if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
      hasLowercase = true;
    } else if (el.charCodeAt(0) >= 48 && el.charCodeAt(0) <= 57) {
      hasDigit = true;
    }
  });

  let ans = hasLowercase && hasUppercase && hasDigit;

  return ans;
};

console.log(check("as8kdKfl"));

// -------------------------------------------------

const ran = () => {
  const min = 100000;
  const max = 999999;

  const random = Math.floor(Math.random() * (max - min) + 1) + 1;

  const str = `#${random}`;
  return str;
};

console.log(ran());
// ------------------------------------------------------------------------------

const remove = (arr) => {
  // return arr.filter((el,index,arr) => arr.indexOf(el) === index )

  const newArr = [...new Set(arr)];
  console.log(newArr);
};

console.log(remove([1, 2, 3, 4, 2, 3, 1, 2]));

// ------------------------------------------------------

// tp check the if object has a length or not

let obj = { isEmply: null };

const check = () => {
  console.log(Object.keys(obj).length);

  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
};

// for(let key in obj){
//   if(obj.hasOwnProperty(key)){
//     return true
//   } else {
//     return false
//   }
// }

console.log(check());
// -----------------------------------------------------------------------

const calculate = (p, r, t) => {
  let si = Math.floor((p * r * t) / 100);
  return si;
};

console.log(calculate(1000, 5, 3));

// -----------------------------------------------------------------------

const check = (d1, d2) => {
  d1 = new Date(d1);
  d2 = new Date(d2);

  let diff = Math.abs(d2 - d1);
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return days;
};

console.log(check("2024-01-01", "2024-02-31"));

// --------------------------------------------------

const check = (d1) => {
  let currDate = new Date();
  let mydate = new Date(d1);

  let age = Math.abs(currDate - mydate);

  age = Math.floor(age / (1000 * 60 * 60 * 24 * 365));
  console.log(age);
  // console.log(currDate);
};

console.log(check("2002-07-2"));

// -------------------------------------------------

function makingStar(num) {
  let star = "";
  for (let i = 0; i < num; i++) {
    star += "*";
  }

  return star;
}
const generate = (arr) => {
  let obj = {};

  arr.forEach((el, index, arr) => {
    obj[index + 1] = makingStar(el);
  });

  return obj;
};

console.log(generate([5, 3, 9, 2]));
// ---------------------------------------------
const rates = {
  USD: 1,
  EUR: 0.9,
  GBP: 0.8,
  INR: 83.5,
};

const convert = (paisa, from, to) => {
  let amountInUSD = 0;

  if (from === "GBP") {
    amountInUSD = Math.floor((rates.USD / rates.GBP) * paisa);
  } else if (from === "EUR") {
    amountInUSD = Math.floor((rates.USD / rates.EUR) * paisa);
  } else if (from === "INR") {
    amountInUSD = Math.floor((rates.USD / rates.INR) * paisa);
  } else {
    amountInUSD = paisa;
  }

  let convertedPaisa = 0;
  if (to === "GBP") {
    convertedPaisa = amountInUSD * rates.GBP;
  } else if (to === "EUR") {
    convertedPaisa = amountInUSD * rates.EUR;
  } else if (to === "INR") {
    convertedPaisa = amountInUSD * rates.INR;
  } else {
    convertedPaisa = amountInUSD;
  }

  return convertedPaisa;
};

console.log(convert(700, "INR", "USD"));

// ----------------------------------------------------------------

const generate = (a, b) => {
  let arr = [];

  Array.from({ length: b - a + 1 }, (value, index) => {
    if (a % 3 === 0 && a % 5 === 0) {
      arr.push("fizzbuzz");
    } else if (a % 3 === 0) {
      arr.push("fizz");
    } else if (a % 5 === 0) {
      arr.push("buzz");
    } else {
      arr.push(a);
    }
    a += 1;
  });

  return arr;
};

console.log(generate(12, 20));
// --------------------------------------------------------------------------

// find the second largest element

const arr = [1, 4, 3, 7, 9, 3, 8, 3, 99, 45, 23, 65];

const check = (arr) => {
  let maxIndex = null;
  let lar = arr.reduce((acc, val, index) => {
    if (acc < val) {
      maxIndex = index;
      return val;
    }

    return acc;
  }, 0);

  arr.splice(8, 1);
  console.log(arr);

  maxIndex = null;
  lar = arr.reduce((acc, val, index) => {
    if (acc < val) {
      maxIndex = index;
      return val;
    }

    return acc;
  }, 0);

  return { maxEl: lar, maxIndex: maxIndex };
};

console.log(check(arr));

// -------------------------------------------

// 1.ifnd the max Element
// 2. find the smallest element
// start a loop from smallest to largest , and put the indexOf() whoesever it will return -1 that is our answer

const check = (arr) => {
  let maxi = Math.max(...arr);
  let mini = Math.min(...arr);

  let ans = null;
  for (let i = mini; i < maxi; i++) {
    if (arr.indexOf(i) < 0) {
      ans = i;
    }
  }
  return ans;
};

console.log(check([1, 2, 3, 4, 5, 7, 8, 9, 10]));

// ----------------------------------------

//  factorial

const check = (num) => {
  let arr = Array.from({ length: num }, (val, index) => index + 1);

  return arr.reduce((acc, val) => (acc = acc * val), 1);
};

console.log(check(5));

// ---------------------------------------------------

// check for prime

const check = (num) => {
  if (num === 1) return true;
  else if (num < 1) return false;
  else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
};

console.log(check(43));

// -------------------------------------------------

// check for vowel

const check = (str) => {
  let v = ["a", "e", "i", "o", "u"];
  str = str.split("");

  return str.filter((el) => v.includes(el));
};

console.log(check("my namz is hukjl hjos"));

// ---------------------------------------

// reverse the string

const check = (str) => {
  return str.split("").reverse().join("");
};

console.log(check("hi name"));

// -----------------------------------------------

// find the intersection of an two arrays

const arr1 = [1, 2, 4, 5, 4, 3, 5, 6];

const arr2 = [6, 7, 5, 2, 8, 9, 9];

const check = (arr1, arr2) => {
  arr1 = arr1.filter((el, index, arr1) => arr1.indexOf(el) === index);
  arr2 = arr2.filter((el, index, arr2) => arr2.indexOf(el) === index);

  const inter = arr1.filter((el) => {
    return arr2.includes(el);
  });

  return inter;
};

console.log(check(arr1, arr2));

// ----------------------------------------------------------/

// first letter to uppercase

const check = (str) => {
  str = str.split(" ");

  return str
    .map((el) => {
      return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    })
    .join(" ");
};

console.log(check("hi my name is digivjay"));

// --------------------------------------------------------------

const check = (str) => {
  const ct = {};

  str = str.split("");

  for (let i = 0; i < str.length; i++) {
    if (ct[str[i]]) {
      ct[str[i]] += 1;
    } else {
      ct[str[i]] = 1;
    }
  }

  return ct;
};

console.log(check("ai my namn im dijvijaji"));

// -------------------------------------------------------------------

