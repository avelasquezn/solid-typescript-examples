export class Book {
  public seeReviews(): void {}
  public readSample(): void {}
}

export class DVD {
  public seeReviews(): void {}
  public watchSample(): void {}
}

export class Shelf {
  private book: Book
  private dvd: DVD

  public addBook(book: Book): void {}
  public addDVD(dvd: DVD): void {}
  public customizeShelf(): void {}
}
