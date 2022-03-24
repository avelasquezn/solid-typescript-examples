export interface BookDiscount {
  getBookDiscount(): string
}

export class CookbookDiscount implements BookDiscount {
  public getBookDiscount(): string {
    const discount: string = '30% between Dec 1 and 24.'
    return discount
  }
}

export class BiographyDiscount implements BookDiscount {
  public getBookDiscount(): string {
    const discount: string = "50% on the subject's birthday."
    return discount
  }
}

export class DiscountManager {
  public processBookDiscount(discount: BookDiscount): void {}
}
