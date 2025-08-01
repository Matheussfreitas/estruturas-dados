function maxLengthSubstring(s: string): number {
  let left = 0;
  let right = 0;
  let max = 1;
  const map = new Map<string, number>();

  map.set(s[0], 1);

  while (right < s.length - 1) {
    right++;
    if (map.has(s[right])) {
      map.set(s[right], map.get(s[right])! + 1);
    } else {
      map.set(s[right], 1);
    }

    while (map.get(s[right])! === 3) {
      map.set(s[left], map.get(s[left])! - 1);
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
}

console.log(maxLengthSubstring('bcbbbcba'));