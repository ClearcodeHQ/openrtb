import { Extensible, IQGMediaRating, Flag } from './common'
import { Data } from './data'
import { Producer } from './producer'

export enum ProductionQuality {
  Unknown = 0,
  ProfessionallyProduced = 1,
  Prosumer = 2,
  UserGenerated = 3,
}

export enum ContentContext {
  Video = 1,
  Game = 2,
  Music = 3,
  Application = 4,
  Text = 5,
  Other = 6,
  Unknown = 7,
}

export interface Content extends Extensible {
  id?: string
  episode?: number
  title?: string
  series?: string
  season?: string
  artist?: string
  genre?: string
  album?: string
  isrc?: string
  producer?: Producer
  url?: string
  cat?: string[]
  prodq?: ProductionQuality
  videoquality?: ProductionQuality
  context?: ContentContext
  contentrating?: string
  userrating?: string
  qagmediarating?: IQGMediaRating
  keywords?: string
  livestream?: Flag
  sourcerelationship?: Flag
  len?: number
  language?: string
  embeddable?: Flag
  data?: Data[]
}
