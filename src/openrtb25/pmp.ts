// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { Extensible, Flag } from './common'
import { Deal } from './deal'

export interface PMP extends Extensible {
  // eslint-disable-next-line camelcase
  private_auction: Flag
  deals: Deal[]
}
