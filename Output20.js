let a = 10, b = 20;
setTimeout(function () {
  console.log('Ayush');
  a++;
  b++;
  console.log(a + b);
});
console.log(a + b);

// Answer 30 “Ayush” 32. Explanation Settimeout pushes the function into BOM stack in event loop or it is executed after everything is executed in main function. So the results are printed after the console.log of main function.