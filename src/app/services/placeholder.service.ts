import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/posts.model';

@Injectable({
  providedIn: 'root',
})
export class PlaceholderService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  #http = inject(HttpClient);

  getPosts(): Observable<Post[]> {
    return this.#http.get<Post[]>(`${this.apiUrl}/posts`);
  }
}
