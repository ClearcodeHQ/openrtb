import { Extensible } from './common'

export interface Source extends Extensible {
  tid?: string
  ts?: number
  ds?: string
  dsmap?: string
  cert?: string
  digest?: string
  pchain?: string
}
