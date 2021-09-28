/// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { Response } from './response'

export interface BidResponse {
  openrtb: {
    ver: string
    domainspec?: string
    domainver: string
    response: Response
  }
}
