import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { ViewPollComponent } from './view-poll/view-poll.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/create-poll',
    pathMatch: 'full'
}, {
  path: 'create-poll',
  component: CreatePollComponent
}, {
  path: 'view-poll',
  component: ViewPollComponent
}, {
  path: 'error',
  component: ForbiddenComponent
}, {
  path: '**',
  component: ForbiddenComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponentsMain = [CreatePollComponent, ViewPollComponent, ForbiddenComponent];
