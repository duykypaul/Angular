import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
// import { fakeMovies } from '../fake-movies';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  constructor(private movieService: MovieService) { }

  getMoviesFromService() {
    // this.movies = this.movieService.getMovies();
    this.movieService.getMovies().subscribe(updatedMovies => this.movies = updatedMovies);
  }
  ngOnInit() {
    this.getMoviesFromService();
  }
  add(name: string, releaseYear: string) {
    name = name.trim();
    if (Number.isNaN(Number(releaseYear)) || !name || Number(releaseYear) === 0) {
      alert('Name must not be blank, Release year must be a number');
      return;
    }
    const newMovie: Movie = new Movie();
    newMovie.name = name;
    newMovie.releaseYear = Number(releaseYear);
    this.movieService.addMovie(newMovie)
      .subscribe(insertedMovie => {
        this.movies.push(insertedMovie);
      });
  }
  delete(id: number): void {
    this.movieService.deleteMovie(id).subscribe(_ => {
      this.movies = this.movies.filter(eachMovie => eachMovie.id !== id);
    })
  }

}
