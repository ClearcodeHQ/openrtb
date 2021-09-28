// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { Extensible } from './common'
import { SeatBid } from './seatBid'

export interface Response extends Extensible {
  id: string
  bidid?: string
  nbr?: number
  cur?: string
  cdata?: string
  seatbid?: SeatBid[]
}
