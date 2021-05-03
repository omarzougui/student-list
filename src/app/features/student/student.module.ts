import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentComponent} from './student-list/student/student.component';
import {StudentListComponent} from './student-list/student-list.component';
import {RouterModule, Routes} from '@angular/router';
import {StudentRoutes} from './sudent.routes';
import {SharedModule} from '@shared/shared.module';
import { StudentDetailsComponent } from './student-details/student-details.component';


const routes: Routes = [
  {
    path: StudentRoutes.LIST,
    component: StudentListComponent
  },
  {
    path: '',
    redirectTo: StudentRoutes.LIST,
    pathMatch: 'full',
  }
];

@NgModule({
  declarations: [StudentComponent, StudentListComponent, StudentDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class StudentModule {
}
