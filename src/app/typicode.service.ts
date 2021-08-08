import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, tap, map, last } from 'rxjs/operators';
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
@Injectable({
  providedIn: 'root',
})
export class TypicodeService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`).pipe(
      tap((response) => console.log(JSON.stringify(response))),
      catchError(this.handleError)
    );
  }
  getPosts(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/users/${userId}/posts`).pipe(
      tap((response) => console.log(JSON.stringify(response))),
      catchError(this.handleError)
    );
  }
  getComments(postId: number) : Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/comments/${postId}`).pipe(
      tap((response) => console.log(JSON.stringify(response))),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error || 'Server error');
  }
}
