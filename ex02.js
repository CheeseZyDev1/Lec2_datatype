/*function soEqua(equation) {
   
    return eval(equation);
  }
  
  console.log(soEqua("1 + 1"));  
  console.log(soEqua("7*4-2"));  
  console.log(soEqua("1+1+1+1+1"));  
  */



  function solveEquation(equation) {
    // Split the equation into an array of tokens
    const tokens = equation.split(/\s+/);
  
    // Initialize a stack to hold the operands
    const stack = [];

    for (const token of tokens) {

      if (!isNaN(token)) {
        stack.push(Number(token));
      }
       else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        switch (token) {
          case '+':
            stack.push(operand1 + operand2);
            break;
          case '-':
            stack.push(operand1 - operand2);
            break;
          case '*':
            stack.push(operand1 * operand2);
            break;
          case '/':
            stack.push(operand1 / operand2);
            break;
        }
      }
    }
  
    // The result is the last value on the stack
    return stack[0];
  }
  
  // Test the function
  console.log(solveEquation("2 + 2"));  // Output: 4
  console.log(solveEquation("3 * 5"));  // Output: 15
  console.log(solveEquation("(1 + 3) * 5"));  // Output: 20