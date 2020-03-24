import { Form, Icon, Input, Button } from 'antd';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import FakeAuth from '../services/FakeAuth'

class LoginForm extends Component {
    state = {
        redirectToRef:false
    };
    handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        FakeAuth.authenticate(() => {
            this.setState(() => ({redirectToRef: true}))
        });

      }
    });
  };


  render() {
    const { redirectToRef } = this.state;
    if (redirectToRef === true) {
        return <Redirect to={'/'}/>
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Пожалуйста введите логин!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Логин"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Пожалуйста введи пароль!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Пароль"
              />,
            )}
          </Form.Item>
          <div className={'login-btn'}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Войти
            </Button>
          </div>
        </Form>
    );
  }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default WrappedLoginForm;
