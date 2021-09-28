// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { App } from './app'
import { AuctionType, Extensible, Flag } from './common'
import { Device } from './device'
import { Imp } from './imp'
import { Regs } from './regs'
import { Site } from './site'
import { Source } from './source'
import { User } from './user'

export interface BidRequest extends Extensible {
  id: string
  imp: Imp[]
  site?: Site
  app?: App
  device?: Device
  user?: User
  test?: Flag
  at?: AuctionType
  tmax?: number
  wseat?: string[]
  bseat?: string[]
  allimps?: Flag
  cur?: string[]
  wlang?: string[]
  bcat?: string[]
  badv?: string[]
  bapp?: string[]
  source?: Source
  regs?: Regs
}
