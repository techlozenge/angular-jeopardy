import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JeopardyComponent } from './jeopardy/jeopardy.component';

@NgModule({
  declarations: [
    AppComponent,
    JeopardyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
