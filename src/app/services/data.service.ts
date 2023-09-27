import { HttpClient , HttpErrorResponse  } from '@angular/common/http';
import { Injectable , Inject } from '@angular/core';
import {  Observable, catchError, throwError } from 'rxjs';
import { Post } from '../interfaces/post.interface';


@Injectable()
export class DataService {

constructor(private http : HttpClient , @Inject('API_URL') private url:string) { }

private handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
      errorMessage =`Backend returned code ${error.status}, body was: `, error.error;
  }
  // Return an observable with a user-facing error message.
  errorMessage += ' Something bad happened; please try again later.' ;
  return throwError(() => new Error('Something bad happened; please try again later.'));
}


// call the data from the api
getAll(): Observable<Post[]>{
  return this.http.get<Post[]>(this.url)
    .pipe(
      catchError(this.handleError)
    );
}



create(resource:any): Observable<Post[]>{
   return this.http.post<Post[]>(this.url, resource)
   .pipe(catchError(this.handleError));
}

update(resource:any): Observable<Post[]>{
  return this.http.put<Post[]>(this.url + '/' + resource.id, resource)
  .pipe(
    catchError(this.handleError)
    );
}

delete(resource: any){
  return this.http.delete(this.url + '/' + resource.id)
  .pipe(
    catchError(this.handleError)
  );
}

}

