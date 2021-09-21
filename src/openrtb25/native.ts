import { APIFramework, CreativeAttribute, Extensible } from './common'

export interface Native extends Extensible {
  request: string
  ver?: string
  api?: APIFramework[]
  battr?: CreativeAttribute[]
}
