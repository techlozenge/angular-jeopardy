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
 
  constructor (private dataService: JeopardyService) {}
 
  ngOnInit() { this.getQuestion(); }
 
  getQuestion() {
    this.dataService.getRecord() 
      .subscribe(
        question => this.question = question,
        error =>  this.errorMessage = <any>error);
  }

}
