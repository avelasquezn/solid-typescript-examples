export class CookbookDiscount {
  public getCookbookDiscount(): string {
    const discount: string = '30% between Dec 1 and 24.'
    return discount
  }
}

export class DiscountManager {
  public processCookbookDiscount(discount: CookbookDiscount): void {}
}
