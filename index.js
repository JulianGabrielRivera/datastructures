// function validAnagram(string1, string2) {
//   // add whatever parameters you deem necessary - good luck!
//   const stringObjectOne = {};

//   for (let i = 0; i < string1.length; i++) {
//     let letter = string1[i];
//     stringObjectOne[letter]
//       ? (stringObjectOne[letter] += 1)
//       : (stringObjectOne[letter] = 1);
//   }

//   for (let i = 0; i<string2.length; i++) {
//     let letter = string2[i];
//     if (!stringObjectOne[letter]) {
//       return false;
//     } else {
//       stringObjectOne[letter] -= 1;
//     }
//   }
//   return true;
//   console.log(stringObjectOne);
// }
// console.log(validAnagram('hello', 'hellotwo'));

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);
