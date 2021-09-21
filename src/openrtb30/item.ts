import { Extensible, Flag, RawRecord } from './common'
import { Deal } from './deal'
import { Metric } from './metric'

export interface Item extends Extensible {
  id: string
  qty?: number
  qtyflt?: number
  seq?: number
  flr?: number
  flrcur?: string
  exp?: number
  dt?: number
  dlvy?: number
  metric?: Metric[]
  deal?: Deal[]
  private?: Flag
  spec: RawRecord
}
