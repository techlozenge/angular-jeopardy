import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { JeopardyService } from './jeopardy.service';
import { JeopardyComponent } from './jeopardy/jeopardy.component';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    JeopardyComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [JeopardyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
