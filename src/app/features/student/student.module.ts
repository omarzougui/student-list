import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentComponent} from './student-list/student/student.component';
import {StudentListComponent} from './student-list/student-list.component';
import {RouterModule, Routes} from '@angular/router';
import {StudentRoutes} from './sudent.routes';


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
  declarations: [StudentComponent, StudentListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class StudentModule {
}
