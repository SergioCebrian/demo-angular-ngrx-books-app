import { createReducer, on } from '@ngrx/store';
import { BooksActions } from '../actions/book.actions';
import { Book } from '../model/book.model';
import { BookInitialState } from '../state/book.state';

export const CollectionReducer = createReducer(
    BookInitialState,
    on(BooksActions.removeBook, (state, { bookId }) =>
    state.filter((id: unknown) => id !== bookId)
  ),
  on(BooksActions.addBook, (state: Book[] | any, { bookId }: { bookId: string }) => {
    if (state.indexOf(bookId) > -1) return state;
 
    return [...state, bookId];
  })
);