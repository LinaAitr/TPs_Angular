import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StudentService {
  students = [
    {
    name: 'Henri',
    status: 'present'
    },
    {
    name: 'Louis',
    status: 'absent'
    },
    {
    name: 'Philippe',
    status: 'present'
    }
    ];

  switchOnAll() {
    for(let student of this.students) {
      student.status = 'present';
    }
  }
  switchOffAll() {
    for(let student of this.students) {
      student.status = 'absent';
    }
  }
  switchOnOne(i: number) {
    this.students[i].status = 'present';
  }
  switchOffOne(i: number) {
    this.students[i].status = 'absent';
  }


}
