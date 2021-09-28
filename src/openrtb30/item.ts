// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { Extensible, Flag, RawRecord } from './common'
import { Deal } from './deal'
import { Metric } from './metric'

export interface Item extends Extensible {
  id: string
  qty?: number
  qtyflt?: number
  seq?: number
  flr?: number
  flrcur?: string
  exp?: number
  dt?: number
  dlvy?: number
  metric?: Metric[]
  deal?: Deal[]
  private?: Flag
  spec: RawRecord
}
