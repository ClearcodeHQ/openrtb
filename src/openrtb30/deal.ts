// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { AuctionType, Extensible } from './common'

export interface Deal extends Extensible {
  id: string
  flr?: number
  flrcur?: string
  at?: AuctionType
  wseat?: string[]
  wadomain?: string[]
}
