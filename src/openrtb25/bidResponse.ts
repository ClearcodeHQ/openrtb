// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { Extensible } from './common'
import { SeatBid } from './seatBid'

export enum NoBidReasonCode {
  UnknownError = 0,
  TechnicalError = 1,
  InvalidRequest = 2,
  KnownWebSpider = 3,
  SuspectedNonHumanTraffic = 4,
  CloudDataCenterProxyIP = 5,
  UnsupportedDevice = 6,
  BlockedPublisherOrSite = 7,
  UnmatchedUser = 8,
  DailyReaderCapMet = 9,
  DailyDomainCapMet = 10,
}

export interface BidResponse extends Extensible {
  id: string
  seatbid?: SeatBid[]
  bidid?: string
  cur?: string
  customdata?: string
  nbr?: NoBidReasonCode
}
