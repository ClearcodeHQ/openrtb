// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { Extensible, Flag } from './common'
import { Content } from './content'
import { Publisher } from './publisher'

export interface App extends Extensible {
  id?: string
  name?: string
  bundle?: string
  domain?: string
  storeurl?: string
  cat?: string[]
  sectioncat?: string[]
  pagecat?: string[]
  ver?: string
  privacypolicy?: Flag
  paid?: Flag
  publisher?: Publisher
  content?: Content
  keywords?: string
}
