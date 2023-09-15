import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
})
export class TvComponent implements OnInit {
  allTvs:any[]=[]
  allData: any[] = []
  language = 'en-US'
  totalTvs!: number
  tvPerPage: number = 20
  currentPage=1
imagePath: string = 'https://image.tmdb.org/t/p/w500';
 constructor(private tvService:TvService) {}

  private searchval: string = '';
  showTvDetails: boolean = true;

 set searchValue(value: string) {
    this.searchval = value;
    this.searchallTv(value);
  }
  ngOnInit(): void {
    this.tvService.getAllTvs(this.currentPage,this.language).subscribe({
      next: (response) => {
        console.log(response);
        this.allTvs = response.results
        this.allData = this.allTvs
        this.totalTvs=response.total_results

      }
    })
  }
 toggleDetails(tvId: number) {
    console.log(tvId);

    for (const item of this.allTvs) {
      if (item.id == tvId) {
        item.toggleDiscription = !item.toggleDiscription;
      }
    }
 }
  searchallTv(tvName: string) {

 this.tvService.searchAllTvs(tvName).subscribe({
      next: (response) => {
        console.log(response.results);
        this.allTvs = response.results
     this.allData = this.allTvs
    //  this.changeLanguage()

      }
    })
  }

  changeLanguage() {
    this.language=this.language=='en-US'?'ar-SA':'en-US'
 this.tvService.getAllTvs(this.currentPage,this.language).subscribe({
      next: (response) => {
        console.log(response.results);
        this.allTvs = response.results
        this.allData=this.allTvs

      }
    })
  }
  changePage(pageData:PageEvent) {
    this.currentPage = pageData.pageIndex + 1
    console.log(this.currentPage);
        // this.language=this.language=='en-US'?'ar-SA':'en-US'
 this.tvService.getAllTvs(this.currentPage,this.language).subscribe({
      next: (response) => {
        console.log(response.results);
        this.allTvs = response.results
        this.allData=this.allTvs

      }
    })
    
    }

}
