// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

import { AdPosition, APIFramework, CreativeAttribute, Extensible, Flag } from './common'
import { Format } from './format'

export enum BannerAdType {
  XHTMLTextAd = 1,
  XHTMLBannerAd = 2,
  JavaScriptAd = 3,
  Iframe = 4,
}

export enum ExpandableDirection {
  Left = 1,
  Right = 2,
  Up = 3,
  Down = 4,
  FullScreen = 5,
}

export interface Banner extends Extensible {
  format?: Format[]
  w?: number
  h?: number
  wmax?: number
  hmax?: number
  wmin?: number
  hmin?: number
  btype?: BannerAdType[]
  battr?: CreativeAttribute[]
  pos?: AdPosition
  mimes?: string[]
  topframe?: Flag
  expdir?: ExpandableDirection[]
  api?: APIFramework[]
  id?: string
  vcm?: Flag
}
