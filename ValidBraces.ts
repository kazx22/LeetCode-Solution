function isValid(s: string): boolean {
  let stack: Array<string> = [];
  let braces: Array<string> = s.split("");
  for (let i = 0; i < braces.length; i++) {
    if (braces[i] === "(" || braces[i] === "{" || braces[i] === "[") {
      stack.push(braces[i]);
    }
    if (stack.length === 0) return false;
    if (braces[i] === ")") {
      let temp = stack.pop();
      if (temp !== "(") return false;
    }
    if (braces[i] === "}") {
      let temp = stack.pop();
      if (temp !== "{") return false;
    }
    if (braces[i] === "]") {
      let temp = stack.pop();
      if (temp !== "[") return false;
    }
  }

  return stack.length === 0 ? true : false;
}
