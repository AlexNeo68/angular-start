import { Injectable } from '@angular/core';
import { Book } from '../types/books';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Array<Book> = [];
  constructor() {}
  addToCart(book: Book): void {
    this.cart.push(book);
  }
  get() {
    return this.cart;
  }
  removeFromCart(book: Book): void {
    this.cart = this.cart.filter((b) => b.name !== book.name);
  }
}
