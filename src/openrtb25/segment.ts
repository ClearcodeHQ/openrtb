import { Extensible } from './common'

export interface Segment extends Extensible {
  id?: string
  name?: string
  value?: string
}
