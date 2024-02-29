import { Component } from '@angular/core';
import { HomeServiceService } from '../../services/home-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service: HomeServiceService) {

  
 }

 

  bannerResult: any = [];


  ngOnInit(): void {
    // this.bannerData();
    this.getAllMovies();

  }

  getAllMovies(){
    this.service.getAllMovie().subscribe((result)=>{
      // console.log(result.Search);

      this.bannerResult=result.Search;
      console.log(this.bannerResult);
    })
  }

// bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      
      this.bannerResult = result.results;
    });
  }

}
