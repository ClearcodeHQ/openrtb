// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { Banner } from './banner'
import { Extensible, Flag } from './common'
import { Metric } from './metric'
import { Video } from './video'
import { Audio } from './audio'
import { Native } from './native'
import { PMP } from './pmp'

export interface Imp extends Extensible {
  id: string
  metric?: Metric[]
  banner?: Banner
  video?: Video
  audio?: Audio
  native?: Native
  pmp?: PMP
  displaymanager?: string
  displaymanagerver?: string
  instl?: Flag
  tagid?: string
  bidfloor?: number
  bidfloorcur?: string
  clickbrowser?: Flag
  secure?: Flag
  iframebuster?: string[]
  exp?: number
}
