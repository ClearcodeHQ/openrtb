// Copyright (C) 2021 by Clearcode <https://clearcode.cc>
// and associates (see AUTHORS).

// This module is part of OpenRTB and is released under
// the MIT License (MIT): http://opensource.org/licenses/MIT

export type Flag = 0 | 1

export interface Extensible {
  ext?: Record<string, unknown>
}

export enum APIFramework {
  VPAID10 = 1,
  VPAID20 = 2,
  MRAID1 = 3,
  ORMMA = 4,
  MRAID2 = 5,
  MRAID3 = 6,
}

export enum CreativeAttribute {
  AudioAdAutoPlay = 1,
  AudioAdUserInitiated = 2,
  ExpandableAutomatic = 3,
  ExpandableUserInitiatedClick = 4,
  ExpandableUserInitiatedRollover = 5,
  InBannerVideoAdAutoPlay = 6,
  InBannerVideoAdUserInitiated = 7,
  Pop = 8,
  ProvocativeOrSuggestiveImagery = 9,
  ShakyFlashingFlickeringExtremeAnimationSmileys = 10,
  Surveys = 11,
  TextOnly = 12,
  UserInteractive = 13,
  WindowsDialogOrAlertStyle = 14,
  HasAudioOnOffButton = 15,
  AdProvidesSkipButton = 16,
  AdobeFlash = 17,
}

export enum AdPosition {
  Unknown = 0,
  AboveTheFold = 1,
  MayOrMayNotBeInitiallyVisible = 2,
  BelowTheFold = 3,
  Header = 4,
  Footer = 5,
  Sidebar = 6,
  FullScreen = 7,
}

export enum Protocol {
  VAST10 = 1,
  VAST20 = 2,
  VAST30 = 3,
  VAST10Wrapper = 4,
  VAST20Wrapper = 5,
  VAST30Wrapper = 6,
  VAST40 = 7,
  VAST40Wrapper = 8,
  DAAST10 = 9,
  DAAST10Wrapper = 10,
}

export enum IQGMediaRating {
  All = 1,
  Over12 = 2,
  Mature = 3,
}

export enum StartDelay {
  PreRoll = 0,
  GenericMidRoll = -1,
  GenericPostRoll = -2,
}

export enum AuctionType {
  FirstPrice = 1,
  SecondPrice = 2,
  AgreedPrice = 3,
}

export enum ContentDeliveryMethod {
  Streaming = 1,
  Progressive = 2,
  Download = 3,
}

export enum CompanionType {
  Static = 1,
  HTML = 2,
  Iframe = 3,
}
