export type RawRecord = Record<string, unknown>

export type Flag = 0 | 1

export interface Extensible {
  ext?: RawRecord
}

export enum AuctionType {
  FirstPrice = 1,
  SecondPrice = 2,
  AgreedPrice = 3,
}
