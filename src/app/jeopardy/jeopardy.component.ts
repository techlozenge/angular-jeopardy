import { Component, OnInit, Input } from '@angular/core'
import { JeopardyService } from '../jeopardy.service'
@Component({
  selector: 'app-jeopardy',
  templateUrl: './jeopardy.component.html',
  styleUrls: ['./jeopardy.component.css'],
})
export class JeopardyComponent implements OnInit {
  errorMessage: string;
  successMessage: string;
  // i took '[]' off 'any' which exposes the object contents
  question: any;
  mode = 'Observable';
  userAnswer: string = "";
  playerInputAnswer: string;
  actualJeopardyAnswer: string;
  message: string = "";
  playerPoints = 0;
  

  constructor (private dataService: JeopardyService) {}

  ngOnInit() { this.getQuestion(); }
 
  getQuestion() {
    this.dataService.getRecord() 
      .subscribe(
        // we are only ever getting an array of 1 back so this will obtain that:
        question => { this.question = question[0];
        console.log(this.question)},  
        error =>  this.errorMessage = <any>error);
        
  }
  onClickMe() {
      console.log("User Answer: " + this.userAnswer);
      console.log("Question: " + this.question.question);
      console.log("Answer: " + this.question.answer);
      console.log("Value: " + this.question.value);
      if (this.userAnswer.toLowerCase() == this.question.answer.toLowerCase()) {
            this.message = "Hey.. you got the right answer ..!"
          this.playerPoints = this.playerPoints +this.question.value;
      }
      else {
        this.message ="Oops.. Wrong answer ..Try the next one..."
      }
      this.playerInputAnswer = this.userAnswer;
      this.actualJeopardyAnswer = this.question.answer;
      this.userAnswer = "";
      this.getQuestion();
    }
}
