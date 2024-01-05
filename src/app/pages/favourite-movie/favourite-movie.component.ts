import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../../services/home-service.service';

@Component({
  selector: 'app-favourite-movie',
  templateUrl: './favourite-movie.component.html',
  styleUrl: './favourite-movie.component.css'
})

export class FavouriteMovieComponent implements OnInit{
  movies: any[] = [];
  fav: string[];

  constructor(private service: HomeServiceService) {
    this.fav = this.service.getFav();
    this.loadMovies();
  }

  ngOnInit(): void {

  }


  loadMovies() {
    for (const movieName of this.fav) {
      this.service.searchMovie(movieName).subscribe(
        (mov: any) => {
          this.movies.push(mov);
        }

      );
    }
  }
  

}