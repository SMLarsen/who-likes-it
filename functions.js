/*jshint esversion: 6 */
function likes(names) {
  let text = '';
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
    return names[0] + ' likes this';
    case 2:
    return names[0] + ' and ' + names[1] + ' like this';
    case 3:
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    default:
    return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
  return text;
}

console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

/*
describe('example tests', function() {
  it('should return correct text', function() {
    Test.assertEquals(likes([]), 'no one likes this');
    Test.assertEquals(likes(['Peter']), 'Peter likes this');
    Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});
*/
