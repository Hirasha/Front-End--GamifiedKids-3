import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shapes-l1',
  templateUrl: './shapes-l1.component.html',
  styleUrls: ['./shapes-l1.component.css']
})
export class ShapesL1Component implements OnInit {
  totalmarks: any;
  constructor() {  
  }

  ngOnInit(){   
   
}
markstot_shapes2(){
var total = 0;

let element1 = <HTMLInputElement> document.getElementById("mark1");  
let element2 = <HTMLInputElement> document.getElementById("mark2");  
let element3 = <HTMLInputElement> document.getElementById("mark3");  

let element4 = <HTMLInputElement> document.getElementById("unmark1");  
let element5 = <HTMLInputElement> document.getElementById("unmark2");  
let element6 = <HTMLInputElement> document.getElementById("unmark3");  

if  (element1.checked ){
  total = total + 1;
 }
else if ((!element1.checked) && (!element4.checked)){
  // document.getElementById('alert1').style.visibility = "visible";
}

if (element2.checked)
    total = total + 1;

else if  ((!element2.checked) && (!element5.checked)){
  // document.getElementById('alert2').style.visibility = "visible";

}
if (element3.checked)
    total = total + 1;

else if  ((!element3.checked) && (!element6.checked)){
  // document.getElementById('alert3').style.visibility = "visible";
}

console.log(total);
var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
if (chk==3){
 
  if (total == 3){
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


}
else if (total == 2){
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
  document.getElementById('coin3').style.opacity ="0.3";
}

else if(total == 1){
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
    
  
}
else if(total == 0){
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
