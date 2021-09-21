import { Extensible, RawRecord } from './common'
import { Macro } from './macro'

export interface Bid extends Extensible {
  id?: string
  item: string
  price: string
  deal?: string
  cid?: string
  tactic?: string
  purl?: string
  burl?: string
  lurl?: string
  exp?: number
  mid?: string
  macro?: Macro[]
  media?: RawRecord
}
