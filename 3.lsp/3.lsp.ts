export class BookDelivery {
  private title: string
  private userID: number
}

export class OfflineDelivery extends BookDelivery {
  public getDeliveryLocations(): void {}
}

export class OnlineDelivery extends BookDelivery {
  public getSoftwareOptions(): void {}
}

export class HardcoverDelivery extends OfflineDelivery {
  public getDeliveryLocations(): void {}
}

export class AudiobookDelivery extends OnlineDelivery {
  public getSoftwareOptions(): void {}
}
