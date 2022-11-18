import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private freeApiService: freeApiService){
  }

  listcomments!: comments[];
  ngOnInit(){
    this.freeApiService.getcomments().subscribe(
      data=>{
       this.listcomments = data;
      }
    );
  }
}


//https://www.youtube.com/watch?v=rdLJNGZvlAA
//https://jsonplaceholder.typicode.com/posts/1/comments
