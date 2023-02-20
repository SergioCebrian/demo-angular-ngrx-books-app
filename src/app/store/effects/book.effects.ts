import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import { BooksService } from 'src/app/components/book-list/book-list.service';
import { BookAPIActions } from '../actions/book.actions';
import { Book } from '../model/book.model';

@Injectable()
export class BooksEffects {

  loadBookies$ = createEffect(() => this.actions$.pipe(
    // ofType(BookAPIActions.loadBooks),
    ofType('[Books Page] Load Books'),
    switchMap(() => this.booksService.getBooks()
      .pipe(
        map((books: Book[]) => ({ type: '[Books API] Books Loaded Success', payload: books })),
        tap(data => {
            console.log('Books: ', data.payload);
            this.store.dispatch(BookAPIActions.retrievedBookList({ books: data.payload }))
        }),
        // catchError(() => EMPTY)
        catchError(() => of({ type: '[Books API] Books Loaded Error' }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private booksService: BooksService,
    private store: Store
  ) {}
}