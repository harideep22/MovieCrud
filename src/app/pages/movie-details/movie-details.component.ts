import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HomeServiceService } from '../../services/home-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  constructor(private route:ActivatedRoute,private service:HomeServiceService){}

  favMovie:string="";

  mov:any;
  movie="";
  ngOnInit() {
    // Subscribe to route params changes
    this.route.params.subscribe(res => {
      this.movie = res['id'];

      // Fetch movie details based on the new route parameter
      this.service.searchMovie(this.movie).subscribe((data) => {
        this.mov = data;
        console.log(this.mov);
      });
    });

  }

  addFav(){
    this.service.addMovies(this.mov.Title);
    // console.log(this.service.getFav().length);
  }



}
