import React, { Component } from 'react'
import LoginForm from './LoginForm'
import LoginIntro from './LoginIntro'
import { Row, Col } from 'antd'
import './login.scss'

class Login extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Row>
          <Col span={12} style={styles.left}>
            <div>
              <LoginIntro />
            </div>
          </Col>
          <Col span={12} style={styles.right}>
            <div>
              <LoginForm />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

const styles = {
  container: {
    position: 'relative',
    width: '100wh',
    minWidth: '1200px',
    height: '100vh',
    backgroundImage: `url(${require('./LoginForm/images/bg.jpg')})`
  },
  right: {
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignaItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '100vh'
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    alignaItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '100vh',
    color: '#fff'
  }
}

export default Login
