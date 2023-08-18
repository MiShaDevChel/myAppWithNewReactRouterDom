import { compose } from '@reduxjs/toolkit'
import React, { memo } from 'react'
import WithBack from '../../components/WithBack'

const ErrorPage = () => (
  <WithBack>
    <h1>Упс!</h1>
    <p>Страница не найдена</p>
  </WithBack>
)

export default compose(memo)(ErrorPage)
