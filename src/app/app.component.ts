import { Component } from '@angular/core';
import { HomeServiceService } from './services/home-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieCrud';

  constructor(private service:HomeServiceService,private route:Router){}

  search(data:string){
    const k=data.search;
    // console.log(k);
    
    this.service.searchMovie(k).subscribe((result)=>{
      
      this.route.navigate(['/movie-details',k]);
      
    })
  }
}

//// movie/details/:id