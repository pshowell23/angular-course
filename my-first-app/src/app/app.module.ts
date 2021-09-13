import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { FormsModule } from '@angular/forms';
import { Assignment2Component } from './assignment2/assignment2.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { LecturesComponent } from './lectures/lectures.component';
import { Assignment3Component } from './assignment3/assignment3.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Assignment1Component,
    Assignment2Component,
    AssignmentsComponent,
    LecturesComponent,
    Assignment3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
