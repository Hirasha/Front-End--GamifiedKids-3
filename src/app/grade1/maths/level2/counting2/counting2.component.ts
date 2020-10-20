import { Component, OnInit, ViewChild } from '@angular/core';
import { GamesService } from "../../../../services/games.service";
import { EmotiondetectorComponent } from '../../../../emotiondetector/emotiondetector.component';

@Component({
  selector: 'app-counting2',
  templateUrl: './counting2.component.html',
  styleUrls: ['./counting2.component.css']
})
export class Counting2Component implements OnInit {
  totalmarks: any;

  @ViewChild(EmotiondetectorComponent) child: EmotiondetectorComponent;
  constructor(private gamesService: GamesService) {

  }
  ngOnInit(){   
}

markstot_addto(){
var time = document.getElementById("display").innerHTML;
console.log(time);
document.getElementById("time-back").style.visibility = "hidden";
var totalm = 0;

let element1 = <HTMLInputElement> document.getElementById("mark1");  
let element2 = <HTMLInputElement> document.getElementById("mark2");  
let element3 = <HTMLInputElement> document.getElementById("mark3");  

let element4 = <HTMLInputElement> document.getElementById("unmark1");  
let element5 = <HTMLInputElement> document.getElementById("unmark2");  
let element6 = <HTMLInputElement> document.getElementById("unmark3");  

if  (element1.checked ){
  totalm = totalm + 1;
 }
// else if ((!element1.checked) && (!element4.checked)){
//   // document.getElementById('alert1').style.visibility = "visible";
// }

if (element2.checked)
    totalm = totalm + 1;

// else if  ((!element2.checked) && (!element5.checked)){
//   // document.getElementById('alert2').style.visibility = "visible";

// }
if (element3.checked)
    totalm = totalm + 1;

// else if  ((!element3.checked) && (!element6.checked)){
//   // document.getElementById('alert3').style.visibility = "visible";
// }

console.log(totalm);


    // let username = localStorage.getItem('uname');
    // this.gamesService.submitGame({    
    //   completed_games : [
    //   {
    //   game_id : "M24",
    //   marks : totalm,
    //   time_spent : time,
    //   emotions: this.child.emotions
    //   }
    // ]},username).subscribe(res=>{console.log("success")}, err=>{console.log("error")});


var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
if (chk==3){
 
  if (totalm == 3){
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
    document.getElementById("perf-time").innerHTML = time;


}
else if (totalm == 2){
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
  document.getElementById("perf-time").innerHTML = time;

}

else if(totalm == 1){
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
      document.getElementById("perf-time").innerHTML = time;

    
  
}
else if(totalm == 0){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
    setTimeout(function(){
      document.getElementById('sad_coin').style.visibility = "visible";
      },1000);
      document.getElementById("perf-time").innerHTML = time;

  }

}
else {
  document.getElementById('alert').style.visibility = "visible";
}
this.child.endgame(); 

}
 
 


}
