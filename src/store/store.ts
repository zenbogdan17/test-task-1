import { books as booksList } from '../constans/books';

import { makeAutoObservable } from 'mobx';

class store {
  selectedOption: string = '';
  books = booksList;
  sorted = false;
  totalCount = 0;
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  handleSelectChange(value: string) {
    this.selectedOption = value;
  }

  sortToPrise() {
    if (!this.sorted) {
      this.books.sort((a, b) => b.price - a.price);
      this.sorted = true;
    } else {
      this.books.reverse();
      this.sorted = false;
    }
  }

  handlerTotalCount(count: number) {
    this.totalCount = count;
  }
}

const myStore = new store();

export default myStore;
