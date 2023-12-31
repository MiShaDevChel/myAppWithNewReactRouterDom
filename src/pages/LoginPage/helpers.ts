import { LoaderFunctionArgs, redirect } from 'react-router-dom'
import { store } from '../../store'
import { login } from '../../store/actions'

export async function loginAction({ request }: LoaderFunctionArgs) {
  const { dispatch } = store
  const formData = await request.formData()
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  const result = await dispatch(
    login({
      username,
      password
    })
  )

  return result.meta.requestStatus === 'fulfilled'
    ? redirect(formData.get('redirectTo') as string)
    : null
}

export async function loginLoader() {
  const { isAuth } = store.getState().auth
  return isAuth ? redirect('/') : null
}
