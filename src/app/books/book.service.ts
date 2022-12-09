import { Injectable } from '@angular/core';
import { Book } from '../types/books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  books: Book[] = [
    {
      image:
        'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      name: 'Clean Code',
      author: 'Robert C. Martin',
      amount: 700,
    },
    {
      image: 'https://m.media-amazon.com/images/I/51A8l+FxFNL.jpg',
      name: 'The Pragmatic Programmer: 20th Anniversary Edition, 2nd Edition: Your Journey to Mastery',
      author: 'David Thomas',
      amount: 800,
    },
  ];

  getBooks() {
    return this.books;
  }
}
