import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public Get(url: string) {
    return this.http
    .get(environment.baseUrl + url, this.GetHeaders())
  }

  public Post(url: string, data: any) {
    return this.http
    .post(environment.baseUrl + url, data, this.GetHeaders())
  }

  private GetHeaders() {
    const configs = {
      headers: new HttpHeaders()
    }
    return configs;
  }

}
