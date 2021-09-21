import { Flag, APIFramework, CreativeAttribute, Extensible, Protocol, StartDelay, ContentDeliveryMethod, CompanionType } from './common'
import { Banner } from './banner'

export enum FeedType {
  MusicService = 1,
  FMAMBroadcast = 2,
  Podcast = 3,
}

export enum VolumeNormalizationMode {
  None = 0,
  AdVolumeAverageNormalizedToContent = 1,
  AdVolumePeakNormalizedToContent = 2,
  AdLoudnessNormalizedToContent = 3,
  eCustomVolumeNormalizationMode = 4,
}

export interface Audio extends Extensible {
  mimes: string[]
  minduration?: number
  maxduration?: number
  protocols?: Protocol[]
  startdelay?: StartDelay
  sequence?: number
  battr?: CreativeAttribute[]
  maxextended?: number
  minbitrate?: number
  maxbitrate?: number
  delivery?: ContentDeliveryMethod[]
  companionad?: Banner[]
  api?: APIFramework[]
  companiontype?: CompanionType[]
  maxseq?: number
  feed?: FeedType
  stitched?: Flag
  nvol?: VolumeNormalizationMode
}
