export class Book {
  seeReviews(): void {}
  readSample(): void {}
}

export class Shelf {
  private book: Book

  public addBook(book: Book): void {}
  public customizeShelf(): void {}
}
