import React from 'react'
import { Button } from 'react-bootstrap'
import { useFetcher, useRouteLoaderData } from 'react-router-dom'

export default function AuthStatus() {
  const { isAuth } = useRouteLoaderData('root') as { isAuth: boolean }
  const { formData, Form } = useFetcher()

  if (!isAuth) {
    return null
  }

  const isLoggingOut = formData != null

  return (
    <Form method='post' action='/logout'>
      <Button variant='primary' type='submit' disabled={isLoggingOut}>
        {isLoggingOut ? 'Выходим...' : 'Выйти'}
      </Button>
    </Form>
  )
}
