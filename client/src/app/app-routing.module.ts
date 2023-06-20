import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CreateThoughtComponent } from './create-thought/create-thought.component';

const routes: Routes = [
  { path: "landing", component: LandingComponent },
  { path: "create", component: CreateThoughtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
