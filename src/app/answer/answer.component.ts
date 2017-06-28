import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() lastJeopardyAnswer: string;
  @Input() lastUserAnswer: string;

  constructor() { }

  ngOnInit() {
  }

}
