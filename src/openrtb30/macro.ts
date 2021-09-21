import { Extensible } from './common'

export interface Macro extends Extensible {
  key: string
  value?: string
}
