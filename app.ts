function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let result: boolean[] = [];
  let max = Math.max(...candies);
  candies.forEach((val) => {
    val + extraCandies >= max ? result.push(true) : result.push(false);
  });
  return result;
}
