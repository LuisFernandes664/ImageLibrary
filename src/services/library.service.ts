import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favorite } from "src/app/details-image/favorite";

@Injectable()
export class LibraryService {
    constructor(private http: HttpClient) { }

    numPageAtual1: number = 1;
    proxPag1 : number = this.numPageAtual1+1;
    anteriorPag1: number = this.numPageAtual1-1;
    totalPage1: number;
    
    private urlApi: string = 'https://api.unsplash.com/photos?per_page=50&page='+this.numPageAtual1+'&order_by=latest&fit=crop&w=500&h=500&';
    
    private apiKey: string = 'client_id=dd4e1cb73ca3a1036d4e98d26f72a439141dc17039e1ae79b7bc2a23f3488578';

    ImagesFav: any = [];

    searchNow: string;

    unsplashUrl: string = 'https://api.unsplash.com';
    search: string = '/search/photos';
    searchQuery: string = '&query=';
    pagesize: string = '&per_page=50'

    
    getSearchedImages(query: string): Observable<any> {
        const searchedUrl = this.unsplashUrl + this.search + this.apiKey + this.searchQuery + query + this.pagesize;
        console.log(this.http.get(searchedUrl))
        return this.http.get(searchedUrl);
      }

    getImages(page): Observable<any>{
        let fullUrl: string = 'https://api.unsplash.com/photos?per_page=50&page='+page+'&order_by=latest&fit=crop&w=500&h=500&'+this.apiKey
        console.log(fullUrl);
        return this.http.get(fullUrl)
    }

    getImagesById(id: string): Observable<any> { 
        return this.http.get(`https://api.unsplash.com/photos/${id}?` + this.apiKey);
    }

    retrieveBySearch(search: string, page:number): Observable<any> { 
        this.searchNow = search;
        console.log(`https://api.unsplash.com/search/photos?query=${this.searchNow}&per_page=50?&page=${page}&` + this.apiKey)
        return this.http.get(`https://api.unsplash.com/search/photos?query=${this.searchNow}&per_page=50?&page=${page}&` + this.apiKey);
    }


    retriveAll(): Favorite[]{
        return this.ImagesFav;
    }

    createFavorite(allParamsImage: any):void {
        this.ImagesFav.push(allParamsImage);
        console.log(allParamsImage);
        console.log(this.ImagesFav)
    }
    
    removeMovie(idfavorite: string) : void {
        let index: number;
    
        this.ImagesFav.forEach(function(ImagesFavorite, i){
          if(ImagesFavorite.id == idfavorite) {
            index = i
          }
        })
    
        this.ImagesFav.splice(index, 1);
    }

}









