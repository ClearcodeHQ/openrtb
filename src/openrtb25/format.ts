import { Extensible } from './common'

export interface Format extends Extensible {
  w?: number
  h?: number
  wratio?: number
  hratio?: number
  wmin?: number
}
