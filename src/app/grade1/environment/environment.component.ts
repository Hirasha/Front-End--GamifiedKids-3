import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit {
  GamesArray = [];
  levelGames1=[];
  levelGames2=[];
  btn1: number;
  btn2: number;
  eL1 : number;
  eL2 : number;
  constructor(private gameService: GamesService) { 
    this.btn1 = 0;
    this.btn2 = 0;
    this.levelGames1 =["E11","E12", "E13", "E14","E15"];
    this.levelGames2 =["E21","E22", "E23", "E24", "E25"];

  }

  ngOnInit(): void {    
    var username = localStorage.getItem("uname");
    this.gameService.getGamesforNav(username).subscribe((data:any[]) => {
      this.GamesArray = data;
      // console.log(this.GamesArray)
      for (var i in this.GamesArray){
       for (var j in this.levelGames1) {
          // console.log(this.levelGames[j]); 
          if((this.levelGames1[j])==(this.GamesArray[i])) {
            // console.log(this.GamesArray[i]);
            this.btn1 = this.btn1+ 1
          }
        }
      }
  
  
      for (var i in this.GamesArray){
        for (var j in this.levelGames2) {
           // console.log(this.levelGames[j]); 
           if((this.levelGames2[j])==(this.GamesArray[i])) {
            //  console.log(this.GamesArray[i]);
             this.btn2 = this.btn2 + 1
           }
         }
       }
  
    }, (error) => {
      
    });
  
  
    var username = localStorage.getItem("uname");
    this.gameService.getStudentDetails(username).subscribe((data:any) => {
      this.eL1 = data.eL1;
      this.eL2 = data.eL2;
      console.log(this.eL1);
      console.log(this.btn1);
      if (this.eL1 == 0){
        if (this.btn1 == 5)
  
       {
            
            this.gameService.sendEmail({   
                level_completed : [
                {
                grade : "1 ශ්‍රේණිය",
                subject : "පරිසරය",
                games : ["E11","E12", "E13", "E14","E15"],
                level : "1",
                column : "5"
                }
              ]},username).subscribe(res=>{console.log("success")}, err=>{console.log("error")});
          }
        
      }
  
  // console.log(this.btn2);
      if (this.eL2 == 0){
        if (this.btn2 == 5)
  
       {
            
            this.gameService.sendEmail({   
                level_completed : [
                {
                grade : "1 ශ්‍රේණිය",
                subject : "පරිසරය",
                games : ["E21","E22", "E23", "E24", "E25"],
                level : "2",
                column : "6"
                }
              ]},username).subscribe(res=>{console.log("success")}, err=>{console.log("error")});
          }
        
      }
    }, (error) => {});
  
    }

}
