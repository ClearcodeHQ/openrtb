import { Extensible } from './common'

export enum LocationType {
  GPSLocationServices = 1,
  IPAddress = 2,
  UserProvided = 3,
}

export enum IPLocationService {
  IP2location = 1,
  Neustar = 2,
  MaxMind = 3,
  NetAcuity = 4,
}

export interface Geo extends Extensible {
  lat?: number
  lon?: number
  type?: LocationType
  accuracy?: number
  lastfix?: number
  ipservice?: IPLocationService
  country?: string
  region?: string
  regionfips104?: string
  metro?: string
  city?: string
  zip?: string
  utcoffset?: number
}
