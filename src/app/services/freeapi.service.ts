import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class freeApiService{

  constructor(
    private HttpClient: HttpClient
  )
  {}
   getcomments(): Observable<any>{
     return this.HttpClient.get('https://jsonplaceholder.typicode.com/posts/1/comments')
   }
}
