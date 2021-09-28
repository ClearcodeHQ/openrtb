// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { Extensible, Flag } from './common'
import { Content } from './content'
import { Publisher } from './publisher'

export interface Site extends Extensible {
  id?: string
  name?: string
  domain?: string
  cat?: string[]
  sectioncat?: string[]
  pagecat?: string[]
  page?: string
  ref?: string
  search?: string
  mobile?: Flag
  privacypolicy?: Flag
  publisher?: Publisher
  content?: Content
  keywords?: string
}
