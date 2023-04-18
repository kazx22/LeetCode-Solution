function mergeAlternately(word1: string, word2: string): string {
  let w1: Array<string> = word1.split("");
  let w2: Array<string> = word2.split("");

  let final: Array<string> = [];
  let tot = w1.length + w2.length;
  for (let i = 0; i < tot; i++) {
    if (w1 != null) {
      let temp: string = w1.shift();
      final.push(temp);
    }
    if (w2 != null) {
      let temp: string = w2.shift();
      final.push(temp);
    }
  }
  return final.join("");
}
