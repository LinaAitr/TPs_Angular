import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { FormsModule } from '@angular/forms';
import { StudentService } from './services/student.service';
import { StudentViewComponent } from './student-view/student-view.component';
import { NavComponent } from './nav/nav.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    NavComponent,
    routedComponents,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
