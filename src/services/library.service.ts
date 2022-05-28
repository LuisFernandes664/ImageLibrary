import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LibraryService {
    constructor(private http: HttpClient) { }


    private urlApi: string = 'https://api.unsplash.com/photos?'
    private apiKey: string = 'client_id=dd4e1cb73ca3a1036d4e98d26f72a439141dc17039e1ae79b7bc2a23f3488578'


    getImages(){
        let fullUrl: string = this.urlApi +this.apiKey
        return this.http.get(fullUrl)
    }
}









