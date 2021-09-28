// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { Extensible } from './common'
import { Bid } from './bid'

export interface SeatBid extends Extensible {
  seat?: string
  package?: number
  bid: Bid[]
}
