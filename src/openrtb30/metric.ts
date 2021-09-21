import { Extensible } from './common'

export interface Metric extends Extensible {
  type: string
  value: number
  vendor?: string
}
