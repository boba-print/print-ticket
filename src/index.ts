export interface PrintTicket {
  version: string; // v2.1
  layout: {
    order: LayoutOrder;
    nUp: NUp;
  };
  copies: number;
  duplex: Duplex;
  fitToPage: PageFitting;
  isColor: boolean;
  pageRanges: PageRange[];
  paperOrientation: PaperOrientation;
  paperSize: PaperSize;
}

export enum LayoutOrder {
  RIGHT_TO_DOWN = "RIGHT_TO_DOWN",
  DOWN_TO_RIGHT = "DOWN_TO_RIGHT",
}

export enum NUp {
  One = 1,
  Two = 2,
  Four = 4,
  Six = 6,
  Eight = 8,
  Nine = 9,
}

export enum Duplex {
  TWO_SIDE_LONG = "TWO_SIDE_LONG",
  TWO_SIDE_SHORT = "TWO_SIDE_SHORT",
  ONE_SIDED = "ONE_SIDED",
}

export enum PageFitting {
  FIT_TO_PAGE = "FIT_TO_PAGE",
  NO_FITTING = "NO_FITTING",
}

export interface PageRange {
  start: number;
  end: number;
}

export enum PaperOrientation {
  LANDSCAPE = "LANDSCAPE",
  PORTRAIT = "PORTRAIT",
  AUTO = "AUTO",
}

export enum PaperSize {
  A4 = "A4",
  A3 = "A3",
  A5 = "A5",
  B5 = "B5",
  B4 = "B4",
  Letter = "Letter",
  Ledger = "Ledger",
  Statement = "Statement",
  Legal = "Legal",
  Executive = "Executive",
}
