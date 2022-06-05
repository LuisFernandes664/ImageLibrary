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

    public searchNow: string;


    getImages(): Observable<any>{
        let fullUrl: string = this.urlApi +this.apiKey
        return this.http.get(fullUrl)
    }

    getImagesById(id: number): Observable<any> { 
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









