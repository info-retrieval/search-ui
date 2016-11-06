import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  constructor(private http: Http) {}

  getAllDocs(from:string) {
    return this.makeRequest('list?from=' + from);
  }

  getDocsFromSearch(query:String) {
    return this.makeRequest('search?term=' + query);
  }

  private makeRequest(path: string) {
    // let params = new URLSearchParams();
    // params.set('per_page', '100');

    let url = 'http://127.0.0.1:8000/search/' + path;
    return this.http.get(url);
  }
}