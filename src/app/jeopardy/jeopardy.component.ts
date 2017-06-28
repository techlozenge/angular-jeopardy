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

  userAnswer: string;
  userPoints = 0;
  x: string;
  y: string;

  constructor (private dataService: JeopardyService) {}
 
  ngOnInit() { this.getQuestion(); }
 
  getQuestion() {
    this.dataService.getRecord() 
      .subscribe(
        // we are only ever getting an array of 1 back so this will obtain that:
        question => this.question = question[0],
        error =>  this.errorMessage = <any>error);
  }

  onClickMe() {
      console.log("User Answer: " + this.userAnswer);
      console.log("Question: " + this.question.question);
      console.log("Answer: " + this.question.answer);
      console.log("Value: " + this.question.value);

      if (this.userAnswer.toLowerCase() == this.question.answer.toLowerCase()) {
          this.userPoints = this.userPoints += this.question.value;
      }

      this.userAnswer = "";
      this.getQuestion();
    }
}
