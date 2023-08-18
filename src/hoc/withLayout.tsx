import React, { ComponentType, FC } from 'react'
import { Col, Container } from 'react-bootstrap'
import Navigation from '../components/Nav/Nav'

export const withLayout = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const LayoutComponent: FC<P> = (props) => {
    return (
      <div className='layout'>
        <header>
          <Navigation />
        </header>
        <main>
          <Container>
            <Col>
              <WrappedComponent {...props} />
            </Col>
          </Container>
        </main>
        <footer>
          <Navigation />
        </footer>
      </div>
    )
  }

  return LayoutComponent
}
