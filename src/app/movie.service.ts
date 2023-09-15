import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  api: string = 'c62cc8474b9cb08c293462160c1e6750'
  // https://api.themoviedb.org/3/movie/top_rated
  allMovies: any[] = [];
  constructor(private http: HttpClient) {}

  getAllMovies(pageNumber:number=1,language: string = 'en-US'): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.api}&language=${language}&page=${pageNumber}`
    );
  }
  getMovieById(movieId: number,language:string): Observable<any> {
    return this.http
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.api}&language=${language}
    `);
  }

  searchAllMovie(movieName: string): Observable<any> {
    if (movieName == '') {
      return this.getAllMovies();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.api}&query=${movieName}`
      );
    }
  }
}
