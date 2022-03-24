export interface BookAction {
  seeReviews(): void
}

export interface HardcoverAction extends BookAction {
  searchSecondhand(): void
}

export interface AudioAction extends BookAction {
  listenSample(): void
}

export class HardcoverUI implements HardcoverAction {
  public seeReviews(): void {}
  public searchSecondhand(): void {}
}

export class AudiobookUI implements AudioAction {
  public seeReviews(): void {}
  public listenSample(): void {}
}
