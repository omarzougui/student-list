import { of } from "rxjs";
import { STUDENTS } from "./students-mock";

export class StudentsService {
  public getStudents() {
    return of(STUDENTS);
  }

  public getStudentById(id: number) {
    return of(STUDENTS[0]);
  }

  public deleteStudentById(id: number) {
    // this.httpClient.post(url, {type: delete, id: id})
  }
}