// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { APIFramework, CreativeAttribute, Extensible } from './common'

export interface Native extends Extensible {
  request: string
  ver?: string
  api?: APIFramework[]
  battr?: CreativeAttribute[]
}
