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

export enum FileOrientation {
  Portrait = "PORTRAIT",
  Landscape = "LANDSCAPE",
}

export class Mapper {
  static mapFromProps(
    layoutOrder: LayoutOrder,
    nUp: number,
    copies: number,
    duplex: Duplex,
    pageFitting: PageFitting,
    isColor: boolean,
    pageRangeString: string,
    paperOrientation: PaperOrientation
  ): PrintTicket {
    return {
      version: "v2.0",
      layout: {
        order: LayoutOrder[layoutOrder],
        nUp: this.nUpToEnum(nUp),
      },
      copies,
      duplex: Duplex[duplex],
      fitToPage: PageFitting[pageFitting],
      isColor: isColor,
      pageRanges: this.formatPageRanges(pageRangeString),
      paperOrientation: PaperOrientation[paperOrientation],
      paperSize: PaperSize.A4,
    };
  }

  private static nUpToEnum(nUp: number) {
    switch (nUp) {
      case 1:
        return NUp.One;
      case 2:
        return NUp.Two;
      case 4:
        return NUp.Four;
      case 6:
        return NUp.Six;
      case 8:
        return NUp.Eight;
      case 9:
        return NUp.Nine;
      default:
        return NUp.One;
    }
  }

  private static formatPageRanges(ranges: string): PageRange[] {
    if (ranges.length === 0) {
      return [];
    }
    return ranges.split(",").map(this.toRange);
  }

  private static toRange(range: string): PageRange {
    if (/^[0-9]+-[0-9]+$/.test(range)) {
      const pages = range.split("-");
      return { start: Number(pages[0]), end: Number(pages[1]) };
    }
    return { start: Number(range), end: Number(range) };
  }
}