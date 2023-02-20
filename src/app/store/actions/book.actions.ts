import { createAction, createActionGroup, props, emptyProps } from '@ngrx/store';
import { Book } from '../model/book.model';
// import { BOOK_ACTION_TYPES } from './book.actionTypes';

/*export const BooksActions = createAction(
    'Add Book',
    props<{ bookId: string }>()   
);*/

export const BooksActions = createActionGroup({
    source: 'Books',
    events: {
        'Add Book': props<{ bookId: string }>(),
        'Remove Book': props<{ bookId: string }>(),
    },
});

export const BookAPIActions = createActionGroup({
    source: 'Books API',
    events: {
        'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
        'Load Books': emptyProps(),
        'Books Loaded Success': props<{ books: ReadonlyArray<Book> }>,
        'Books Loaded Error': props<{ books: [] }>
    },
});