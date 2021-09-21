import { Extensible, Flag } from './common'
import { Deal } from './deal'

export interface PMP extends Extensible {
  private_auction: Flag
  deals: Deal[]
}
