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

function count(array) {
  let first = array[0];
  let second = array[1];

  for (let i = 0; i < array.length; i++) {
    if (first === second) {
      second++;
    } else {
      first++;
    }
  }
}

// Multiple pointers

let arr = [1, 2, 3, 4, 5, 6, 5, 5, 5, 6];

function uniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
