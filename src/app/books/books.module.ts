import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookComponent } from '../book/book.component';

@NgModule({
  declarations: [BooksComponent, BookComponent],
  imports: [CommonModule],
  exports: [BooksComponent, BookComponent],
})
export class BooksModule {}
