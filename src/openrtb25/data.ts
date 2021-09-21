import { Extensible } from './common'
import { Segment } from './segment'

export interface Data extends Extensible {
  id?: string
  name?: string
  segment?: Segment[]
}
