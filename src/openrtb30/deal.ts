import { AuctionType, Extensible } from './common'

export interface Deal extends Extensible {
  id: string
  flr?: number
  flrcur?: string
  at?: AuctionType
  wseat?: string[]
  wadomain?: string[]
}
