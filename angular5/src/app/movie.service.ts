import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fakeMovies } from './fake-movies';
import { Movie } from '../models/movie';

import { MessageService } from './message.service';

//Get data asynchronously with Observable
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesURL = 'http://localhost:3000/movies';
  getMovies() : Observable<Movie[]> {
    // this.messageService.add(`${new Date().toLocaleString()}. Get movie list`);
    // return of(fakeMovies);
    return this.http.get<Movie[]>(this.moviesURL).pipe(
      tap(receivedMovies => console.log(`receivedMovies = ${JSON.stringify(receivedMovies)}`)),
      catchError(error => of([]))
    );
  }

  getMovieFromId(id: number): Observable<Movie>{
    // return of(fakeMovies.find(movie => movie.id === id));
    const url = `${this.moviesURL}/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(selectedMovies => console.log(`Selected movies = ${JSON.stringify(selectedMovies)}`)),
      catchError(error => of(new Movie()))
    );
  }
  updateMovie(movie: Movie): Observable<any>{
    // return of(fakeMovies.find(movie => movie.id === id));

    return this.http.put(`${this.moviesURL}/${movie.id}`, movie, httpOptions).pipe(
      tap(updateMovie => console.log(`Update movie = ${JSON.stringify(updateMovie)}`)),
      catchError(error => of(new Movie()))
    );
  }
  addMovie(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesURL, newMovie, httpOptions).pipe(
      tap((movie: Movie) => console.log(`inserted movie = ${JSON.stringify(movie)}`)),
      catchError(error => of(new Movie()))
    );
  }

  deleteMovie(id: number): Observable<Movie> {
    // return of(fakeMovies.find(movie => movie.id === id));
    const url = `${this.moviesURL}/${id}`;
    return this.http.delete<Movie>(url, httpOptions).pipe(
      tap(_ => console.log(`Deleted movie with id = ${id}`)),
      catchError(error => of(null))
    );
  }

  searchMovies(typedString: string): Observable<Movie[]> {
    if(!typedString.trim()) {
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.moviesURL}?name_like=${typedString}`).pipe(
      tap(foundedMovies => console.log(`foundedMovies = ${JSON.stringify(foundedMovies)}`)),
      catchError(error => of(null))
    );
  }

  constructor(private http: HttpClient, public messageService: MessageService) { }
}



