// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { Extensible } from './common'
import { Data } from './data'
import { Geo } from './geo'

export enum Gender {
  Male = 'M',
  Female = 'F',
  Other = 'O',
}

export interface User extends Extensible {
  id?: string
  buyeruid?: string
  yob?: number
  gender?: Gender
  keywords?: string
  customdata?: string
  geo?: Geo
  data?: Data[]
}
