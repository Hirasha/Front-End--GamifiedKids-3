import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-length-l1',
  templateUrl: './length-l1.component.html',
  styleUrls: ['./length-l1.component.css']
})
export class LengthL1Component implements OnInit {

  constructor() { 
  }
  ngOnInit(){   
}

markstot_lengthsm(){
var total6 = 0;

let element1 = <HTMLInputElement> document.getElementById("mark1");  
let element2 = <HTMLInputElement> document.getElementById("mark2");  
let element3 = <HTMLInputElement> document.getElementById("mark3");  
let element4 = <HTMLInputElement> document.getElementById("mark4");  

let element5 = <HTMLInputElement> document.getElementById("unmark1");  
let element6 = <HTMLInputElement> document.getElementById("unmark2");  
let element7 = <HTMLInputElement> document.getElementById("unmark3");  
let element8 = <HTMLInputElement> document.getElementById("unmark4");  

if  (element1.checked ){
  total6 = total6 + 1;
 }
else if ((!element1.checked) && (!element5.checked)){
  // document.getElementById('alert1').style.visibility = "visible";
}

if (element2.checked)
    total6 = total6 + 1;

else if  ((!element2.checked) && (!element6.checked)){
  // document.getElementById('alert2').style.visibility = "visible";

}
if (element3.checked)
    total6 = total6 + 1;

else if  ((!element3.checked) && (!element7.checked)){
  // document.getElementById('alert3').style.visibility = "visible";
}
else if  ((!element4.checked) && (!element8.checked)){
  // document.getElementById('alert3').style.visibility = "visible";
}

console.log(total6);
var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
if (chk==4){
 
  if (total6 == 4){
var modal = document.getElementById("myModal");
var subbtn = document.getElementById("submit");
modal.style.display = "block";
subbtn.style.display = "none";
setTimeout(function(){
  document.getElementById('coin1').style.visibility = "visible";
  },1000);

setTimeout(function(){
  document.getElementById('coin2').style.visibility = "visible";
  },1500);

setTimeout(function(){
    document.getElementById('coin3').style.visibility = "visible";
    },2000);
setTimeout(function(){
      document.getElementById('coin4').style.visibility = "visible";
      },2200);

}
else if (total6 == 3){
var modal = document.getElementById("myModal");
modal.style.display = "block";
setTimeout(function(){
  document.getElementById('coin1').style.visibility = "visible";
  },1000);

setTimeout(function(){
  document.getElementById('coin2').style.visibility = "visible";
  },1500);

  setTimeout(function(){
    document.getElementById('coin3').style.visibility = "visible";
    },1900);

  setTimeout(function(){
      document.getElementById('coin4').style.visibility = "visible";
      },2200);
    
  document.getElementById('coin4').style.opacity ="0.3";
}

else if(total6 == 2){
var modal = document.getElementById("myModal");
modal.style.display = "block";
  setTimeout(function(){
    document.getElementById('coin1').style.visibility = "visible";
    },1000);
    setTimeout(function(){
    document.getElementById('coin2').style.visibility = "visible";
      },1500);
      document.getElementById('coin2').style.opacity ="0.3";

    setTimeout(function(){
      document.getElementById('coin3').style.visibility = "visible";
        },1900);
      document.getElementById('coin3').style.opacity ="0.3";
      setTimeout(function(){
        document.getElementById('coin4').style.visibility = "visible";
        },2200);
       document.getElementById('coin4').style.opacity ="0.3";
    
  
}
else if(total6 == 1){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
    setTimeout(function(){
      document.getElementById('coin1').style.visibility = "visible";
      },1000);
    
      setTimeout(function(){
      document.getElementById('coin2').style.visibility = "visible";
        },1500);
        document.getElementById('coin2').style.opacity ="0.3";
  
      setTimeout(function(){
        document.getElementById('coin3').style.visibility = "visible";
          },1900);
        document.getElementById('coin3').style.opacity ="0.3";
        setTimeout(function(){
          document.getElementById('coin4').style.visibility = "visible";
          },2200);
        
      document.getElementById('coin4').style.opacity ="0.3";
      
    
  }
else if(total6 == 0){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
    setTimeout(function(){
      document.getElementById('sad_coin').style.visibility = "visible";
      },1000);
  }

}
else {
  document.getElementById('alert').style.visibility = "visible";
}

  

}
}
