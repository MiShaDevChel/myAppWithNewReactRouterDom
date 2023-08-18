import { LoaderFunctionArgs, redirect } from 'react-router-dom'
import { store } from '../store'

export default function protectedLoader({ request }: LoaderFunctionArgs) {
  const { isAuth } = store.getState().auth

  if (!isAuth) {
    const params = new URLSearchParams()
    params.set('from', new URL(request.url).pathname)
    return redirect('/login?' + params.toString())
  } else {
    return null
  }
}
