import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {STUDENTS} from '../../mocks/students-mock';
import {HttpClient} from '@angular/common/http';
import {IStudents} from '@core/models/students.model';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students$ = of(STUDENTS);


  constructor(private httpClient: HttpClient) {
  }

  public getStudents(): Observable<IStudents[]> {
    return this.students$;
  }

  public getStudentById(idOfStudentToDelete: string): Observable<IStudents> {
    return this.students$.pipe(
      map((students: IStudents[]) => {
          return students.filter((student) => student.id === idOfStudentToDelete)[0];
        }
      )
    );
  }

  public deleteStudentById(idOfStudentToDelete: string): Observable<string> {
    this.students$ = this.students$.pipe(
      map((students) => students.filter(
        (student) => student.id !== idOfStudentToDelete
      ))
    );
    return of('success');

  }
}
