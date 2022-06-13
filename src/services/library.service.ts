import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LibraryService {
    constructor(private http: HttpClient) { }


    /*private urlApi: string = 'https://api.unsplash.com/photos?per_page=50&page=1&order_by=latest&';*/
    /*private urlApi: string = 'https://api.unsplash.com/photos?per_page=50&order_by=latest&';*/

    private urlApi: string = 'https://api.unsplash.com/photos?per_page=50&order_by=latest&fit=crop&w=500&h=500&';
    
    private apiKey: string = 'client_id=dd4e1cb73ca3a1036d4e98d26f72a439141dc17039e1ae79b7bc2a23f3488578';


    searchNow: string;

    unsplashUrl: string = 'https://api.unsplash.com';
    search: string = '/search/photos';
    searchQuery: string = '&query=';
    pagesize: string = '&per_page=30'

    
    getSearchedImages(query: string): Observable<any> {
        const searchedUrl = this.unsplashUrl + this.search + this.apiKey + this.searchQuery + query + this.pagesize;
        console.log(this.http.get(searchedUrl))
        return this.http.get(searchedUrl);
      }

    getImages(): Observable<any>{
        let fullUrl: string = this.urlApi +this.apiKey
        return this.http.get(fullUrl)
    }

    getImagesById(id: string): Observable<any> { 
        return this.http.get(`https://api.unsplash.com/photos/${id}?` + this.apiKey);
    }

    retrieveBySearch(search: string): Observable<any> { 
        this.searchNow = search;
        //https://api.unsplash.com/photos?page=1&order_by=latest&fit=crop&w=500&h=500&query=&client_id=dd4e1cb73ca3a1036d4e98d26f72a439141dc17039e1ae79b7bc2a23f3488578

        https://api.unsplash.com/search/photos?query=carros&client_id=dd4e1cb73ca3a1036d4e98d26f72a439141dc17039e1ae79b7bc2a23f3488578

        console.log(`https://api.unsplash.com/search/photos?query=${search}&` + this.apiKey)
        //return this.http.get(`${this.urlApi}query=${search}&` + this.apiKey);
        return this.http.get(`https://api.unsplash.com/search/photos?query=${search}&` + this.apiKey);
    }

}









