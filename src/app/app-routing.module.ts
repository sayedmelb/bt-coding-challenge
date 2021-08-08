import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CssAssignmentComponent } from './css-assignment/css-assignment.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'challenge-two', component: CssAssignmentComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
