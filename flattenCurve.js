function flatten(...args) {
  const recursiveCall = (evaluatedArray, index = 0, newArray = []) => {
    // Base case
    if (index === evaluatedArray.length) {
      return;
    }

    // If element is not an array, add to newArray
    if (!Array.isArray(evaluatedArray[index])) {
      newArray.push(evaluatedArray[index]);
    }

    // If element is a nested array, explore the nested array
    if (Array.isArray(evaluatedArray[index])) {
      recursiveCall(evaluatedArray[index], 0, newArray);
    }

    // Increment index to explore the highest level of the array
    recursiveCall(evaluatedArray, index + 1, newArray);

    return newArray;
  };

  return recursiveCall(args);
}

console.log(flatten(1, [2, 3], 4, 5, [6, [7]]));
console.log(flatten("a", ["b", 2], 3, 666, [[4], ["c"]]));
console.log(
  flatten(
    [[[[[[1]]]]], ["a", [3, ["b"]]], null, 5, "c"],
    [1, "a", 3, "b", null, 5, "c"],
  ),
);
