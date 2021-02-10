import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import { IStudents } from './students.model';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  public service = new StudentsService();
  public students: IStudents[] = [];

  ngOnInit() {
    this.service.getStudents().subscribe(data => {
      this.students = data;
    })
  }

  click() {
    // your code here
  }
}