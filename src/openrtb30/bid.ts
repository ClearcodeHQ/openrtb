// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { Extensible, RawRecord } from './common'
import { Macro } from './macro'

export interface Bid extends Extensible {
  id?: string
  item: string
  price: string
  deal?: string
  cid?: string
  tactic?: string
  purl?: string
  burl?: string
  lurl?: string
  exp?: number
  mid?: string
  macro?: Macro[]
  media?: RawRecord
}
