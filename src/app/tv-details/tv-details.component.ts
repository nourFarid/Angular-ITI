import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvService } from './../tv.service';


@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
imagePath: string = 'https://image.tmdb.org/t/p/w500';

  selectTv: any

  language = 'en-US'
  id:any
  constructor(private route: ActivatedRoute, private tvService:TvService ) {}
  //lifecycle function
  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log(this.id);
    this.selectTv = this.tvService.getTvbyId(this.id,this.language).subscribe({
      next: (response) => {
        this.selectTv=response

    }})
  }
  changeLanguage() {
     this.language=this.language=='en-US'?'ar-SA':'en-US'
   this.selectTv = this.tvService.getTvbyId(this.id,this.language).subscribe({
      next: (response) => {
        this.selectTv=response

    }})
}
}
