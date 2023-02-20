import { createReducer, on } from '@ngrx/store';
import { BookAPIActions } from '../actions/book.actions';
import { BookInitialState } from '../state/book.state';

export const BookReducer = createReducer(
    BookInitialState,
    on(BookAPIActions.retrievedBookList, (state, { books }) => books)
);