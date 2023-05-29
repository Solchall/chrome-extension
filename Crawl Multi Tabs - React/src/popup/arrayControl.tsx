function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function sortByKey(array, key) {
  array.sort(function (a, b) {
    let keyA = a[key];
    let keyB = b[key];
    // Compare the 2 dates
    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    return 0;
  });
  console.log("sortByKey", array);
}

export { shuffle, sortByKey };
