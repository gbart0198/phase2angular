import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: 'start', component: StartComponent},
  { path: 'quiz', component: QuizComponent, pathMatch: 'full'},
  { path: 'quiz/:id', component: QuizComponent, pathMatch: 'full'},
  { path: '', redirectTo: 'start', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
