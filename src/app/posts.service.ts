import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://127.0.0.1:8000/hgetall_hash?key=10-10-21';

  getPosts() {
  return this.http.get(this.configUrl);

  }
}
