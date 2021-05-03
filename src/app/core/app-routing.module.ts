import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {RootModules} from './root-modules';
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: RootModules.STUDENT,
    loadChildren: () => import('src/app/features/student/student.module').then(m => m.StudentModule),
  },
  {path: '**', redirectTo: RootModules.STUDENT}
];

@NgModule({
  imports: [
    CommonModule,
    /**
     * enable lazy-loading with preload strategy
     * @see https://angular.io/guide/lazy-loading-ngmodules#preloading
     */
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
    }),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
