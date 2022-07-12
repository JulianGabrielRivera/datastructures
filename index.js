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

function maxSubarraySum(arr, num) {
  let maxNum = 0;

  if (arr.length < num) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    maxNum += arr[i];

    let p1 = 0;
    let p2 = num;
    let tempSum = maxSum;
  }
  while (p2 < arr.length) {
    maxNum = tempSum - arr[p1] + arr[p2];
    if (tempSum > maxSum) {
      maxSum = tempSum;
      p1++;
      p2++;
    }
  }
  return maxSum;
}

// Linear Search Time Complexity O(N)

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return 1;
    }
  }
  return -1;
}
// Refactor

// Binary Search Time Complexity Log(N) = Divide and Conquer algorithm

function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor(min / max / 2);
    // let currentElement = arr[middle];

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor(min / max / 2);
    // let currentElement = arr[middle];

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor(min / max / 2);
    // let currentElement = arr[middle];

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
