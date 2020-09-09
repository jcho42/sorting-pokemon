const mergeSort = (arr) => {
  // Uses the native sort function
  return [...arr].sort((a, b) => {
    return a - b;
  });
};

export default mergeSort;
