import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookCollectionComponent } from './components/book-collection/book-collection.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BooksService } from './components/book-list/book-list.service';
import { BooksActions, BookAPIActions } from './store/actions/book.actions';
import { Book } from './store/model/book.model';
import { selectBookCollection, selectBooks, selectTotalBookCollection } from './store/selectors/book.selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    BookCollectionComponent,
    BookListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  books$: Observable<readonly Book[]> = this.store.select(selectBooks);
  bookCollection$: Observable<readonly Book[]> = this.store.select(selectBookCollection);
  totalBookCollection$: Observable<number> = this.store.select(selectTotalBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }
 
  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(
    private booksService: BooksService,
    private store: Store<{ books: Book[] }>
  ) {}

  ngOnInit() {
    this.store.dispatch({ type: '[Books Page] Load Books' });

    // Without NGX Effects
    /*this.booksService
        .getBooks()
        .subscribe((books) =>
          this.store.dispatch(BookAPIActions.retrievedBookList({ books }))
        );*/
  }

}
