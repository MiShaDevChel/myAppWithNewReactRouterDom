export interface IAuthService {
  signin(): Promise<unknown>
  signout(): Promise<unknown>
}
