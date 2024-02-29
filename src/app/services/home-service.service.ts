import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  

  constructor(private http:HttpClient) { }

  favMovies:string[]=[];


  baseurl ="https://api.themoviedb.org/3";

  apikey = "08cc33bd5ae3a747598ce2ad84376e66";

    // https://www.omdbapi.com/?t=batman&apikey=a5ef1268  -- this is the correct api

    urlO = 'https://www.omdbapi.com';

    //  https://www.omdbapi.com/?apikey=a5ef1268&s=movie&type=movie&page=1

  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  getAllMovie():Observable<any>{

    return this.http.get(`${this.urlO}?apikey=a5ef1268&s=movie&type=movie&page=1`)
  }



  searchMovie(movie: any): Observable<any> {
    // console.log(movie);
    
    return this.http.get(`${this.urlO}/?t=${movie}&apikey=a5ef1268`);
  }

  

  addMovies(mov:any){
    this.favMovies.push(mov);
  }

  getFav(){
    return this.favMovies;
  } 

}
