import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Book } from '../types/books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: Book = {} as Book;

  isInCart: boolean = false;

  constructor(private cartService: CartService) {}

  addToCart() {
    this.isInCart = true;
    this.cartService.addToCart(this.book);
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.removeFromCart(this.book);
  }
}
