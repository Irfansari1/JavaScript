//https://edabit.com/challenge/RGQXN4TG2CQoBAReQ

function numberSquares(n) {
  let total = 0;
  let ls = [0];
  for (var i = 1; i <= n; i++) {
    ls.push(i ** 2 + ls[i - 1]);
  }
  return ls[ls.length - 1];
}
console.log(numberSquares(5));
