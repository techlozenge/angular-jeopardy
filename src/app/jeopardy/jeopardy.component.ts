import { Component, OnInit,Input } from '@angular/core';

import { JeopardyService } from '../jeopardy.service'

@Component({
  selector: 'app-jeopardy',
  templateUrl: './jeopardy.component.html',
  styleUrls: ['./jeopardy.component.css'],
})
export class JeopardyComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  question: any[];
  mode = 'Observable';

  userAnswer: string;
  userPoints: string;
  userTotalPoints: string;

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
      console.log(this.userAnswer);
    }

}
