import { Request } from './request'

export interface BidRequest {
  openrtb: {
    ver: string
    domainspec?: string
    domainver: string
    request: Request
  }
}
