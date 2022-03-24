export class Book {
  private title: string
  private author: string

  public getTitle(): string {
    return this.title
  }

  public setTitle(title: string): void {
    this.title = title
  }

  public getAuthor(): string {
    return this.author
  }

  public setAuthor(author: string): void {
    this.author = author
  }

  public toString(): string {
    return `Book (title: ${this.title}, author: ${this.author})`
  }
}

export class InventoryView {
  private book: Book

  public constructor(book: Book) {
    this.book = book
  }

  public getBook(): Book {
    return this.book
  }

  public searchBook(): void {
    console.log('SRP - Searching Book...')
  }
}

let book: Book = new Book()
book.setTitle('Design Patterns')
book.setAuthor('Erich Gamma, Richard Helm, John Vlissides, Ralph Johnson')
console.log(book)
let inventoryView: InventoryView = new InventoryView(book)
inventoryView.searchBook()
