import React from 'react'
import {Route} from 'react-router-dom'
import {Layout} from 'antd';

const {Header, Footer, Sider, Content} = Layout;

export const UserLoginTemplate = (props) => {
    let {Component, ...restRoute} = props;
    return <Route {...restRoute} render={(propsRoute) => {
        return <>
            <Layout>
                <Sider width="66vw" style={{height: '100vh', backgroundImage:'url(https://picsum.photos/1000)', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                </Sider>
                <Content>
                    <Component {...propsRoute}/>
                </Content>
            </Layout>
        </>
    }} />
}