# OpenRTB
## Overview

This is a Node.js library with OpenRTB [v2.5](https://www.iab.com/wp-content/uploads/2016/03/OpenRTB-API-Specification-Version-2-5-FINAL.pdf) and [v3.0](https://github.com/InteractiveAdvertisingBureau/openrtb/blob/master/OpenRTB%20v3.0%20FINAL.md) types. Library allows to build and validate OpenRTB objects.

## Installation
For npm:
* `npm i @clearcodehq/openrtb --save-dev`

For yarn:
* `yarn add @clearcodehq/openrtb --dev`

## Usage
To use the OpenRTB v2.5 types, import the package into your file:

```typescript
import { OpenRTB25 } from '@clearcodehq/openrtb'

const request: OpenRTB25.BidRequest = {
  id: '0123456789ABCDEF',
  imp: [],
}

const response: OpenRTB25.BidResponse = {
  id: '0123456789ABCDEF',
  seatbid: [
    {
      bid:[
        {
          id: "3388668784683234620",
          impid: "1234",
          price: 0.01594973499743546,
          adm: "<div>test</div>",
          adid: "1234",
          adomain: [
            "https://example.com"
          ],
          iurl: "https://example.com/cr?id=1234",
          cid: "1234",
          crid: "1234",
          w: 160,
          h: 600,
        }
      ],
      seat: "bidder"
    }
  ],
  cur: "EUR"
}
```

The same with OpenRTB v3.0 types:

```typescript
import { OpenRTB30 } from '@clearcodehq/openrtb'

const request: OpenRTB30.BidRequest = {
  openrtb: {
    ver: '3.0',
    domainspec: 'adcom',
    domainver: '1.0',
    request: {
      id: "0123456789ABCDEF",
    },
  }
}

const response: OpenRTB30.BidResponse = {
  openrtb: {
    ver: '3.0',
    domainspec: 'adcom',
    domainver: '1.0',
    response: {
      id: "0123456789ABCDEF",
      bidid: "0011223344AABBCC",
      seatbid: [
        {
          seat: "XYZ",
          bid: [
            {
              id: "yaddayadda",
              item: "1",
              deal: "1234",
              price: 1.50,
              macro: [
                {
                  key: "TIMESTAMP",
                  value: "1127987134"
                },
                {
                  key: "CLICKTOKEN",
                  value: "A7D800F2716DB"
                }
              ],
            }
          ]
        }
      ]
    }
  }
}
```