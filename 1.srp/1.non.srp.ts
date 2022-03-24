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

  public searchBook(): void {
    console.log('Non SRP - Searching Book...')
  }

  public toString(): string {
    return `Book (title: ${this.title}, author: ${this.author})`
  }
}

let book: Book = new Book()
book.setTitle('Design Patterns')
book.setAuthor('Erich Gamma, Richard Helm, John Vlissides, Ralph Johnson')
console.log(book)
book.searchBook()
