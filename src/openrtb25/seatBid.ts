// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { Extensible, Flag } from './common'
import { Bid } from './bid'

export interface SeatBid extends Extensible {
  bid: Bid[]
  seat?: string
  group?: Flag
}
