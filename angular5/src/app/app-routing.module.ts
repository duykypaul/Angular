import { Movie } from './../models/movie';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'movies', component: MoviesComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }