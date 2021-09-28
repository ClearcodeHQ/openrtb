// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

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
