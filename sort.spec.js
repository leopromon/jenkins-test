var sort = require('./sort.js');

function compare(arr1, arr2) {
  if (!arr1 || !arr2 || (arr1.length !== arr2.length))
    return false;
  if (arr1.length === 0 && arr2.length === 0)
    return true;
  for (var i = 0; i < arr1.length; i++)
    if (arr1[i] !== arr2[i])
      return false;
  return true;
}

function assert(label, actual, expected = true) {
  if (actual !== expected) {
    console.log(label, ' FAILED! exiting');
    process.exit(1);
  } else {
    console.log(label, ' PASSED');
  }
}

function testCompare() {
  assert('compare([], [])', compare([], []), true);
  assert('compare([], [1])', compare([], [1]), false);
  assert('compare([1, 2], [2, 1])', compare([1, 2], [2, 1]), false);
  assert('compare([1, 2], [1, 2])', compare([1, 2], [1, 2]), true);
  console.log('testCompare PASSED\n');
}

function testQuicksort() {
  assert('quickSort([])', compare(sort.quicksort([]), []));
  assert('quickSort([1])', compare(sort.quicksort([1]), [1]));
  assert('quickSort([2, 1, 3])', compare(sort.quicksort([2, 1, 3]), [1, 2, 3]));
}

console.log('Testing compare...');
testCompare();
console.log('Testing quickSort...');
testQuicksort();