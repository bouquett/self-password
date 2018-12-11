import React, { Component } from 'react'
import { Input, Icon } from 'antd'

class LoginIntro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: ''
    }
  }
  emitEmpty = () => {
    this.userNameInput.focus()
    this.setState({ userName: '' })
  }

  onChangeUserName = e => {
    this.setState({ userName: e.target.value })
  }
  render() {
    const { userName } = this.state
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null

    return (
      <div className="loginForm">
        <h1>登陆</h1>
        <p>
          <Input
            placeholder="Enter your username"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)', width: '300px' }} />}
            suffix={suffix}
            value={userName}
            onChange={this.onChangeUserName}
            ref={node => (this.userNameInput = node)}
          />
        </p>
      </div>
    )
  }
}

export default LoginIntro
