// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { Extensible } from './common'

export interface Source extends Extensible {
  tid?: string
  ts?: number
  ds?: string
  dsmap?: string
  cert?: string
  digest?: string
  pchain?: string
}
