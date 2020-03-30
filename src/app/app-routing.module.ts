import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

const routes: Routes = [
  {
    path: 'workflows',
    children: [
      { path: 'one', component: View1Component },
      { path: 'two', component: View2Component },
      { path: '**', redirectTo: 'one' }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/workflows/one' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [
    View1Component,
    View2Component
  ];
}
