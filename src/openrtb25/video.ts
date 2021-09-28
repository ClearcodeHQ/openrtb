// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { Banner } from './banner'
import { AdPosition, APIFramework, CompanionType, ContentDeliveryMethod, CreativeAttribute, Extensible, Flag, Protocol, StartDelay } from './common'

export enum VideoPlacementType {
  InStream = 1,
  InBanner = 2,
  InArticle = 3,
  InFeed = 4,
  InterstitialSliderFloating = 5,
}

export enum VideoLinearity {
  LinearInStream = 1,
  NonLinearOverlay = 2,
}

export enum PlaybackMethod {
  PageLoadSoundOn = 1,
  PageLoadSoundOff = 2,
  ClickSoundOn = 3,
  MouseOverSoundOn = 4,
  EnteringViewportSoundOn = 5,
  EnteringViewportSoundOff = 6,
}

export enum PlaybackCessationMode {
  VideoCompletionOrTerminatedByUser = 1,
  LeavingViewportOrTerminatedByUser = 2,
  LeavingViewportUntilVideoCompletionOrTerminatedByUser = 3,
}

export interface Video extends Extensible {
  mimes: string[]
  minduration?: number
  maxduration?: number
  protocols?: Protocol[]
  protocol?: Protocol
  w?: number
  h?: number
  startdelay?: StartDelay
  placement?: VideoPlacementType
  linearity?: VideoLinearity
  skip?: Flag
  skipmin?: number
  skipafter?: number
  sequence?: number
  battr?: CreativeAttribute[]
  maxextended?: number
  minbitrate?: number
  maxbitrate?: number
  boxingallowed?: Flag
  playbackmethod?: PlaybackMethod[]
  playbackend?: PlaybackCessationMode
  delivery?: ContentDeliveryMethod[]
  pos?: AdPosition
  companionad?: Banner[]
  api?: APIFramework
  companiontype?: CompanionType[]
}
