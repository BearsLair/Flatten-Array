function flatten(...args) {
  // Code goes here...
}

console.log(flatten(1, [2, 3], 4, 5, [6, [7]]));
console.log(flatten("a", ["b", 2], 3, 666, [[4], ["c"]]));
console.log(
  flatten(
    [[[[[[1]]]]], ["a", [3, ["b"]]], null, 5, "c"],
    [1, "a", 3, "b", null, 5, "c"],
  ),
);
