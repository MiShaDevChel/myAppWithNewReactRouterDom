import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { children } from '../../router'
import AuthStatus from '../AuthStatus'
import { createNavItemsData, tabsMap } from './utils'

const Navigation = () => {
  const location = useLocation()
  return (
    <Navbar bg='light' data-bs-theme='light'>
      <Container>
        <Nav className='me-auto'>
          {createNavItemsData(children).map((tab) => (
            <Nav.Link
              key={tab.path}
              as={RouterLink}
              to={tab.path as string}
              className={location.pathname === (tab.path as string) ? 'active' : ''}>
              {tabsMap[tab.id as keyof typeof tabsMap]}
            </Nav.Link>
          ))}
          <AuthStatus />
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
