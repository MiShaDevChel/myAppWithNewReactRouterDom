import React, { FC, PropsWithChildren } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import styles from './WithBack.module.css'

const WithBack: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate()
  return (
    <div className={styles.withBackWrap}>
      <Container>
        <Button
          type='button'
          onClick={() => navigate('/', { replace: true })}
          className={styles.withBackBtnBack}>
          На главную
        </Button>
        <Row>
          <Col xs={12}>{children}</Col>
        </Row>
      </Container>
    </div>
  )
}

export default WithBack
