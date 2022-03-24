export interface BookAction {
  seeReviews(): void
  searchSecondhand(): void
  listenSample(): void
}

class HardcoverUI implements BookAction {
  public seeReviews(): void {}
  public searchSecondhand(): void {}
  public listenSample(): void {
    /* can't be implemented */
  }
}

class AudiobookUI implements BookAction {
  public seeReviews(): void {}
  public searchSecondhand(): void {
    /* can't be implemented */
  }
  public listenSample(): void {}
}
