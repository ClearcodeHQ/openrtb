import { AuctionType, Extensible, Flag, RawRecord } from './common'
import { Item } from './item'
import { Source } from './source'

export interface Request extends Extensible {
  id: string
  test?: Flag
  tmax?: number
  at?: AuctionType
  cur?: string[]
  seat?: string[]
  wseat?: Flag
  cdata?: string
  source?: Source
  item?: Item[]
  package?: Flag
  context?: RawRecord
}
