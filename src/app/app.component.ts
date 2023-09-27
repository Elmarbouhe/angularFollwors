import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onFavoriteChanged(args : any){
    console.log("Favorite Changed: "+ args);
  }

  title = 'courses';
  post ={
    title : "Title",
    isFavorite : false
  }

}
