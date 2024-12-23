function countSumm(_buyers) {
  let totalSumm = 0;
  _buyers.forEach(purchaseSumm => {
    summ += purchaseSumm;
  });
  return totalSumm;
}

let buyers = [10000, 20000, 30000];
console.log(countSumm(buyers));