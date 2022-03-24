export class BookDelivery {
  private titles: string
  private userID: number

  public getDeliveryLocations(): void {}
}

export class HardcoverDelivery extends BookDelivery {
  public getDeliveryLocations(): void {}
}

export class AudiobookDelivery extends BookDelivery {
  public getDeliveryLocations(): void {
    /* can't be implemented */
  }
}
