function mostFrequent(arr) {
  if (arr.length === 0) return null;
  const freq = {};
  let maxCount = 0;
  let mostFreq = arr[0];
  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
    if (freq[item] > maxCount) {
      maxCount = freq[item];
      mostFreq = item;
    }
  }
  return mostFreq;
}

console.log(mostFrequent([1, 3, 2, 3, 4, 3, 5, 2, 2, 2]));
console.log(
  mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"])
);
