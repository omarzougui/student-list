import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {StudentsService} from '@core/services/students/students.service';
import {IStudents} from '@core/models/students.model';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students$: Observable<IStudents[]>;
  studentDetailsToDisplay$: Observable<IStudents>;

  constructor(private studentService: StudentsService) {
  }

  ngOnInit(): void {
    this.studentService.getStudentById('cinq').subscribe(console.log);
    this.getStudentList();
  }

  getStudentList(): void {
    this.students$ = this.studentService.getStudents();
  }

  displayStudentDetails(id: string): void {
    this.studentDetailsToDisplay$ = this.studentService.getStudentById(id);
  }

  deleteStudent(refreshStudentList: string): void {
    this.studentService.deleteStudentById(refreshStudentList)
      .pipe(tap(() => {
        // refresh list of student after remove
        this.getStudentList();
      }))
      .subscribe();
  }


}
