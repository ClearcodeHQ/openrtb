import { Response } from './response'

export interface BidResponse {
  openrtb: {
    ver: string
    domainspec?: string
    domainver: string
    response: Response
  }
}
