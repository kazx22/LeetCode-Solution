function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let result: boolean[] = [];
  let max = Math.max(...candies);
  candies.forEach((val) => {
    val + extraCandies >= max ? result.push(true) : result.push(false);
  });
  return result;
}

let candies = [2, 3, 5, 1, 3],
  extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
