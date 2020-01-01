import React, { Component } from 'react';
import { Layout, Menu} from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

class CustomLayout extends Component{
    render(){
        return (
        <Layout>
            <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                <div className="logo">
                    <Link to={'/'}/>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1">
                        <Link to='/'>Игротека</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '50px', marginTop: 64}}>
                <div style={{background: '#fff', padding: 24, minHeight: 380}}>
                    {this.props.children}
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Created by DrZak</Footer>
        </Layout>
        )
    }
}

export default CustomLayout;
