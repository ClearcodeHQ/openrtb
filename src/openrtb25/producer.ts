import { Extensible } from './common'

export interface Producer extends Extensible {
  id?: string
  name?: string
  cat?: string[]
  domain?: string
}
