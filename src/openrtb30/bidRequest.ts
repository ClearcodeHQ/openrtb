// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { Request } from './request'

export interface BidRequest {
  openrtb: {
    ver: string
    domainspec?: string
    domainver: string
    request: Request
  }
}
