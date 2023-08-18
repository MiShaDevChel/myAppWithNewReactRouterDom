import { compose } from '@reduxjs/toolkit'
import React, { memo } from 'react'
import Image from 'react-bootstrap/Image'
import { Outlet } from 'react-router-dom'
import { withLayout } from '../../hoc/withLayout'

function Main() {
  return (
    <>
      <h1>Главная</h1>
      <Image src='https://loremflickr.com/180/180' roundedCircle />
      <Outlet />
    </>
  )
}
export default compose(memo, withLayout)(Main)
