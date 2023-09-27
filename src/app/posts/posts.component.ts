import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../interfaces/post.interface';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  errorMessage = '';                        // Message d'erreur
  status = true;                            // detecter si on est en mode edit ou en mode create
  posts: Post[] = [];                       // La liste des posts
  post  = {                                 // Le post courant
    id:0,
    title: '',
    user: '',
    body: '',
    userId: 0
  };

  constructor(private posteService : PostService) {}

  // appel de la methode getPost() du service
  ngOnInit(): void {
    this.getPosts();
  }

  // appel de la methode getPost() du service et affectation de la reponse dans la variable posts
  getPosts() { this.posteService.getAll().
    subscribe(Response => {
      this.posts = Response;
    }, (error) => {
      this.errorMessage = error ;
  });
  }

  // appel de la methode createPost() du service et creation d'un nouveau post
  createPost() {
    this.posteService.create(this.post).subscribe({
      next: (response: Post[]) => {
        this.posts.unshift(this.post);  // Add the new post to the beginning of the list
        this.post = {  // Clear the input fields
          id: 0,
          title: '',
          user: '',
          body: '',
          userId: 0
        };
      },
      error: (error: any) => {
        if (error.status === 400) {
          alert('Please check the fields.');
        } else {
          alert('An unexpected error occurred.');
          console.error(error);
        }
      }
    });
  }


  // appel de la methode updatePost() du service et mise a jour du post courant
  editPost(post:any){
    this.post = post;
    this.status = false;
  }

  // appel de la methode updatePost() du service et mise a jour du post courant
  updatePost(){
    this.posteService.update(this.post)
      .subscribe(response => {
        this.post  = {
          id:0,
          title: '',
          user: '',
          body: '',
          userId: 0
        }
      this.status = true ;
      },
      error => {
        alert('An unexpected error occurred.');
        console.log(error)
      });
  }

  // appel de la methode deletePost() du service et suppression du post courant
  deletePost(post: any) {
    this.posteService.delete(post)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }, error => {
          console.log(error)
      });
  }

}
