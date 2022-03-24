export interface Product {
  seeReviews(): void
  getSample(): void
}

export class Book implements Product {
  public seeReviews(): void {}
  public getSample(): void {}
}

export class DVD implements Product {
  public seeReviews(): void {}
  public getSample(): void {}
}

export class Shelf {
  private product: Product

  public addProduct(product: Product): void {}
  public customizeShelf(): void {}
}
