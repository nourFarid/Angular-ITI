import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  selectedmovie: any;
  language = 'en-US'
    id:any

  
  //Dependency Injection
  constructor(
    private route: ActivatedRoute,
    private movieServ: MoviesService
  ) {}
  //lifecycle function
  ngOnInit(): void {
     this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.movieServ.getMovieById(this.id,this.imagePath).subscribe({
      next: (response) => {
        console.log(response);
        this.selectedmovie = response;
      },
    });
  }
  changeLanguage() {
     this.language=this.language=='en-US'?'ar-SA':'en-US'
   this.selectedmovie = this.movieServ.getMovieById(this.id,this.language).subscribe({
      next: (response:any) => {
        this.selectedmovie=response

    }})
}
}
