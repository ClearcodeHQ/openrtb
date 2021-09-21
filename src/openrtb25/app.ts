import { Extensible, Flag } from './common'
import { Content } from './content'
import { Publisher } from './publisher'

export interface App extends Extensible {
  id?: string
  name?: string
  bundle?: string
  domain?: string
  storeurl?: string
  cat?: string[]
  sectioncat?: string[]
  pagecat?: string[]
  ver?: string
  privacypolicy?: Flag
  paid?: Flag
  publisher?: Publisher
  content?: Content
  keywords?: string
}
