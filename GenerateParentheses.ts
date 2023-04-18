function generateParenthesis(n: number): string[] {
  let res: Array<string> = [];
  backtrack(res, "", 0, 0, n);
  return res;
  function backtrack(
    res: Array<string>,
    opstr: string,
    open: number,
    close: number,
    max: number
  ) {
    if (opstr.length === max * 2) {
      res.push(opstr);
      return;
    }
    if (open < max) backtrack(res, opstr + "(", open + 1, close, max);
    if (close < open) backtrack(res, opstr + ")", open, close + 1, max);
  }
}
