import { compose } from '@reduxjs/toolkit'
import React, { memo } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useSelector } from 'react-redux'
import { Form as ReactRouterDomForm, useLocation, useNavigation } from 'react-router-dom'
import WithBack from '../../components/WithBack'
import { selectAuth } from '../../store/selectors'

const LoginPage = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const from = params.get('from') || '/'
  const navigation = useNavigation()
  const isLoggingIn = navigation.formData?.get('username') != null
  const { error } = useSelector(selectAuth)

  return (
    <WithBack>
      <h1>Авторизация</h1>
      <ReactRouterDomForm method='post' replace>
        <div>
          <input type='hidden' name='redirectTo' value={from} />
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Username</Form.Label>
            <Form.Control type='text' placeholder='Enter email' name='username' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' name='password' />
          </Form.Group>
          <Button type='submit' disabled={isLoggingIn}>
            {isLoggingIn ? 'Входим...' : 'Вход'}
          </Button>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </ReactRouterDomForm>
    </WithBack>
  )
}

export default compose(memo)(LoginPage)
