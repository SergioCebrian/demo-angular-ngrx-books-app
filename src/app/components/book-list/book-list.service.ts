import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from 'src/app/store/model/book.model';

@Injectable({ providedIn: 'root' })
export class BooksService {
  
  constructor(
    private http: HttpClient
  ) {}

  getBooks(): Observable<Array<Book>> {
    // this.http.get<{ items: Book[] }>
    return this.http.get(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      ).pipe(map((books: any) => books.items || []));
  }
}