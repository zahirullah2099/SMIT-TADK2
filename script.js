// task one

let arr = [22,4,33,6,226,54,74,78,900,43];
let big = Math.max(...arr);
let small = Math.min(...arr);
 document.write(`the maximum number in the array is ${big}`); 
 document.write(`the manimum number in the array is ${small}`);

//  task two
function isPalindrome(word) {
    const formattedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (formattedWord.length <= 1) {
       return true;
       
   }
 let left = 0;
   let right = formattedWord.length - 1;

   while (left < right) {
       if (formattedWord[left] !== formattedWord[right]) {
           return false;
       }
       left++;
       right--;
   }

   return true;
}

console.log(isPalindrome("Tabat")); // Output: true

// task three
function findMissingNumber(arr) {
    const firstNumber = arr[0];
const lastNumber = arr[arr.length - 1];
const n = lastNumber - firstNumber + 1;  
const expectedSum = ((n + 1) / 2) * (firstNumber + lastNumber);

let actualSum = 0;
for (let number of arr) {
actualSum += number;
}

const missingNumber = expectedSum - actualSum;

return missingNumber;
}

const series = [11, 12, 14, 15, 16,17, 18, 19, 20];
const missing = findMissingNumber(series);
console.log("Missing Number:", missing);
