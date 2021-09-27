import { Extensible, Flag } from './common'
import { Deal } from './deal'

export interface PMP extends Extensible {
  // eslint-disable-next-line camelcase
  private_auction: Flag
  deals: Deal[]
}
