// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { Extensible, Flag } from './common'
import { Geo } from './geo'

export enum DeviceType {
  MobileTablet = 1,
  PersonalComputer = 2,
  ConnectedTV = 3,
  Phone = 4,
  Tablet = 5,
  ConnectedDevice = 6,
  SetTopBox = 7,
}

export enum ConnectionType {
  Unknown = 0,
  Ethernet = 1,
  WIFI = 2,
  CellularNetworkUnknownGeneration = 3,
  CellularNetwork2G = 4,
  CellularNetwork3G = 5,
  CellularNetwork4G = 6,
}

export interface Device extends Extensible {
  ua?: string
  geo?: Geo
  dnt?: Flag
  lmt?: Flag
  ip?: string
  ipv6?: string
  devicetype?: DeviceType
  make?: string
  model?: string
  os?: string
  osv?: string
  hwv?: string
  h?: number
  w?: number
  ppi?: number
  pxratio?: number
  js?: Flag
  geofetch?: Flag
  flashver?: string
  language?: string
  carrier?: string
  mccmnc?: string
  connectiontype?: ConnectionType
  ifa?: string
  didsha1?: string
  didmd5?: string
  dpidsha1?: string
  dpidmd5?: string
  macsha1?: string
  macmd5?: string
}
