// // Two Sum
// const nums = [2, 7, 11, 15];
// const target = 30;

// const twoSum = (nums, target) => {
//   let i = 0,
//     j = nums.length - 1;

//   while (j > i) {
//     if (nums[i] + nums[j] > target) {
//       j -= 1;
//     } else if (nums[i] + nums[j] < target) {
//       i += 1;
//     } else {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(twoSum(nums, target));

// // Three Sum
// const nums1 = [1, 2, 3, 5, 6, 11, 15, 16, 17, 18],
//   target1 = 70;

// const threeSum = (nums, target) => {
//   for (let i = 0; i < nums.length - 2; i++) {
//     let a = i + 1,
//       b = nums.length - 1;
//     while (b > a) {
//       if (nums[i] + nums[a] + nums[b] > target) {
//         b -= 1;
//       } else if (nums[i] + nums[a] + nums[b] < target) {
//         a += 1;
//       } else if (nums[a] + nums[i] + nums[b]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// console.log(threeSum(nums1, target1));

// const fourSum = (nums, target) => {
//   let i = 0,
//     j = i + 1,
//     k = j + 1;

//   while (i < j) {
//     if (nums.includes(target - nums[i] + nums[j] + nums[k])) {
//       return true;
//     } else {
//       k += 1;
//     }
//   }
// };

// Return promise N number of times
function retry(fn, retires = 3, delay = 50, finalError = "Failed") {
  new Promise((resolve, reject) => {
    return fn()
      .then(resolve)
      .catch((err) => {
        if (retires > 0) {
          return wait(delay)
            .then(retry(fn, retires - 1, delay, finalError))
            .then(resolve)
            .catch(err);
        }
        return reject(finalError);
      });
  });
}

const retryAwait = async (
  fn,
  retires = 3,
  delay = 50,
  finalError = "Failed"
) => {
  try {
    await fn();
  } catch (err) {
    if (retires <= 0) {
      return Promise.reject(finalError);
    }

    await wait(delay);

    return retryAwait(fn, retires - 1, delay, finalError);
  }
};

// convert hex to rgba
function convertToHex(hex) {
  // #22ff22
  const r = hex.slice(1, 3);
  const g = hex.slice(3, 5);
  const b = hex.slice(5, 7);

  return {
    r: parseInt(r, 16),
    g: parseInt(g, 16),
    b: parseInt(b, 16),
  };
}

console.log(convertToHex("#ffffff"));

function convertToRgba(r, g, b) {}
