import { Extensible } from './common'

export interface Publisher extends Extensible {
  id?: string
  name?: string
  cat?: string[]
  domain?: string
}
