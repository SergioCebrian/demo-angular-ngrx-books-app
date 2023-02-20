import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from 'src/app/store/model/book.model';

@Component({
  selector: 'app-book-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent {

  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();

}
