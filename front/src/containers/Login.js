import React, { Component } from 'react'
import { Row, Col  } from 'antd';
import LoginForm from '../components/LoginForm'

class LoginPage extends Component {

  render() {
    return (
        <div className={'login-page'}>
            <Row>
              <Col span={4} offset={10}>
                  <div className={'login-header'}>
                     Terra Admins
                  </div>
                  <LoginForm/>
              </Col>
            </Row>
        </div>
    );
  }
}


export default LoginPage
