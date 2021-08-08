import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  store(data: any) {
    return this.httpClient.post(this.baseUrl + 'posts', data).pipe(map(
      (response) => {
        return response;
      }
    ))
  }
  getPost(id: number) {
    return this.httpClient.get(this.baseUrl + 'posts/' + id).pipe(map(
      (response) => {
        return response;
      }
    ))
  }
  getAllPost() {
    return this.httpClient.get(this.baseUrl + 'posts').pipe(map(
      (response) => {
        return response;
      }
    ))
  }
  updatePost(data: any, id: number) {
    return this.httpClient.put(this.baseUrl + 'posts/' + id, data).pipe(map(
      (response) => {
        return response;
      }
    ))

  }
  deletePost(id: number) {
    return this.httpClient.delete(this.baseUrl + 'posts/' + id).pipe(map(
      (response) => {
        return response;
      }
    ))
  }
}


