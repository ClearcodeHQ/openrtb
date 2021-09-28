// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { APIFramework, CreativeAttribute, Extensible, IQGMediaRating, Protocol } from './common'

export interface Bid extends Extensible {
  id: string
  impid: string
  price: number
  nurl?: string
  burl?: string
  lurl?: string
  adm?: string
  adid?: string
  adomain?: string[]
  bundle?: string
  iurl?: string
  cid?: string
  crid?: string
  tactic?: string
  cat?: string[]
  attr?: CreativeAttribute[]
  api?: APIFramework
  protocol?: Protocol
  qagmediarating?: IQGMediaRating
  language?: string
  dealid?: string
  w?: number
  h?: number
  wratio?: number
  hratio?: number
  exp?: number
}
