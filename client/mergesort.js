const mergeSort = (arr) => {
  // Uses the native sort function
  // return [...arr].sort((a, b) => {
  //   return a - b;
  // });

  // Actual Merge Sort
  if (arr.length < 2) return arr
  const [left, right] = split(arr);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
};

const split = (arr) => {
  if (arr.length === 1) return arr;
  const midpoint = Math.floor(arr.length / 2);
  return [arr.slice(0, midpoint), arr.slice(midpoint, arr.length)];
};

const merge = (arr1, arr2) => {
  const mergedArr = [];
  while (arr1.length && arr2.length) {
    const arr1LeftMost = arr1[0];
    const arr2LeftMost = arr2[0];
    if (arr1LeftMost < arr2LeftMost) {
      mergedArr.push(arr1.shift());
    } else {
      mergedArr.push(arr2.shift());
    }
  }
  if (arr1.length) mergedArr.push(...arr1);
  if (arr2.length) mergedArr.push(...arr2);
  return mergedArr;
};

export default mergeSort;
