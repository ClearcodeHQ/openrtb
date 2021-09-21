import { Extensible } from './common'
import { Bid } from './bid'

export interface SeatBid extends Extensible {
  seat?: string
  package?: number
  bid: Bid[]
}
