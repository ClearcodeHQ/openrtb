// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { AuctionType, Extensible, Flag, RawRecord } from './common'
import { Item } from './item'
import { Source } from './source'

export interface Request extends Extensible {
  id: string
  test?: Flag
  tmax?: number
  at?: AuctionType
  cur?: string[]
  seat?: string[]
  wseat?: Flag
  cdata?: string
  source?: Source
  item?: Item[]
  package?: Flag
  context?: RawRecord
}
