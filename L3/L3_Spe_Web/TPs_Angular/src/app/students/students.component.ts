import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit{

  @Input() studentName!: string;
  @Input() studentStatus!: string;
  @Input() index!: number;
  constructor(private studentService: StudentService) { }

  ngOnInit(){
  }
  getStatus() {
    return this.studentStatus; }

  getColor() {
    if(this.studentStatus === 'present') {
      return 'green';
    } else if(this.studentStatus === 'absent') {
      return 'red';
    } else{
      return;
    }
  }
  onSwitch() {
    if(this.studentStatus === 'present') {
    this.studentService.switchOffOne(this.index);
    } else if(this.studentStatus === 'absent') {
    this.studentService.switchOnOne(this.index);
    }
    console.log('index =' + this.index);
  }



}
