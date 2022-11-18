import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Posts } from "../classes/posts";

@Injectable()
export class freeApiService{

  constructor(
    private HttpClient: HttpClient
  )
  {}
   getcomments(): Observable<any>{
     return this.HttpClient.get('https://jsonplaceholder.typicode.com/posts/1/comments')
   }

   getcommentsByParameter(): Observable<any>{
    let params1 = new HttpParams().set('userId', '1');
    return this.HttpClient.get('https://jsonplaceholder.typicode.com/posts', {params: params1})
   }

   post(opost:Posts): Observable<any>{
    return this.HttpClient.post('https://jsonplaceholder.typicode.com/posts', opost)
   }
}
