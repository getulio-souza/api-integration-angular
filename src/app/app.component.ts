import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Comments } from './classes/comments';
import { Posts } from './classes/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private freeApiService: freeApiService){
  }

  listcomments!: Comments[];
  listPosts!: Posts[]

  ngOnInit(){
    //calling api without params
    this.freeApiService.getcomments().subscribe(
      data=>{
       this.listcomments = data;
      }
    );

    //calling api with params
    this.freeApiService.getcommentsByParameter().subscribe(
      data=>{
        this.listPosts = data;
      }
    )
  }
}


//https://www.youtube.com/watch?v=rdLJNGZvlAA
//https://jsonplaceholder.typicode.com/posts/1/comments
