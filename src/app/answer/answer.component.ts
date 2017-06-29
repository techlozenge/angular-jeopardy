import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() playerInputAnswer: string;
  @Input() message: string;
  @Input() actualJeopardyAnswer: string;
  @Input() playerPoints: number;

  constructor() { }

  ngOnInit() {
  }

}

