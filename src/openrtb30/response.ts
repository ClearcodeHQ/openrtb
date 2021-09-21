import { Extensible } from './common'
import { SeatBid } from './seatBid'

export interface Response extends Extensible {
  id: string
  bidid?: string
  nbr?: number
  cur?: string
  cdata?: string
  seatbid?: SeatBid[]
}
