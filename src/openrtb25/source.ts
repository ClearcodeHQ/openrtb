import { Extensible, Flag } from './common'

export interface Source extends Extensible {
  fd?: Flag
  tid?: string
  pchain?: string
}
