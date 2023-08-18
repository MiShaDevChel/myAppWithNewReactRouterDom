import { wait } from '../utils'
import { IAuthService } from './types'

export const authService: IAuthService = {
  signin: () => wait(1000),
  signout: () => wait(1000)
}
