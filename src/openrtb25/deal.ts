import { AuctionType, Extensible } from './common'

export interface Deal extends Extensible {
  id: string
  bidfloor?: number
  bidfloorcur?: string
  at?: AuctionType
  wseat?: string[]
  wadomain?: string[]
}
