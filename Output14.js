function sum(){
    return arguments.reduce((a, b) => a + b);
  }
  
  console.log(sum(1,2,3)); (1)
  
  function sum(...arguments){
    return arguments.reduce((a, b) => a + b);
  }
  
  console.log(sum(1,2,3)); (2)