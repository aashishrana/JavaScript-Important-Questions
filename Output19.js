function a() {
    this.site = 'Ayush';
  
    function b(){
      console.log(this.site);
    } 
    
    b();
}

var site = 'Wikipedia';
a(); (1)

function a() {
  this.site = 'Ayush';

  function b(){
    console.log(this.site);
  } 
  
  b();
}

var site = 'Wikipedia';
new a(); (2)

function a() {
  this.site = 'Ayush';

  function b(){
    console.log(this.site);
  } 
  
  b();
}

let site = 'Wikipedia';
new a(); (3)