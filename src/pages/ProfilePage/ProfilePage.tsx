import { compose } from '@reduxjs/toolkit'
import React, { memo } from 'react'
import { Button, Card } from 'react-bootstrap'
import { withLayout } from '../../hoc/withLayout'

const ProfilePage = () => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant='top' src='https://loremflickr.com/180/180' />
    <Card.Body>
      <Card.Title>Заголовок</Card.Title>
      <Card.Text>
        Небольшой пример текста, который будет основываться на названии карты и составлять основную
        часть карты. содержание.
      </Card.Text>
      <Button variant='primary'>Иди куда-нибудь</Button>
    </Card.Body>
  </Card>
)

export default compose(memo, withLayout)(ProfilePage)
