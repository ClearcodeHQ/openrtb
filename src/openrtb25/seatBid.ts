import { Extensible, Flag } from './common'
import { Bid } from './bid'

export interface SeatBid extends Extensible {
  bid: Bid[]
  seat?: string
  group?: Flag
}
