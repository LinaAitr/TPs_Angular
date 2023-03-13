import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { StudentsComponent } from '../students/students.component';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent {

  isAuth = false;
  students : any;

  allPresent() {
    if(confirm('Etes-vous sûr qu\’ils sont tous présent ?')) {
      this.studentService.switchOnAll();
    } else {
      return;
    }
    }
  allAbsent(){
    if(confirm('Etes-vous sûr qu\’ils sont tous absents ?')) {
      this.studentService.switchOffAll();
    } else {
      return;
    }
  }
  constructor(private studentService: StudentService){
    setTimeout(
      () => {
      this.isAuth = true;
      }, 4000
      );
  }
  ngOnInit(){
    this.students = this.studentService.students;
  }



  }



