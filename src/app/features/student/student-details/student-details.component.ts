import {Component, Input, OnInit} from '@angular/core';
import {IStudents} from "@core/models/students.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  @Input() student: IStudents;

}
