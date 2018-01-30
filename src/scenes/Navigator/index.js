/**
 * Created by wangna on 2018/1/26.
 */
import React, { PureComponent } from 'react';
import { Link } from 'react-router'
import { Layout, Menu, Icon } from 'antd';
const { Content, Sider, Header } = Layout;
const SubMenu = Menu.SubMenu;

export default class Navigator extends PureComponent {

    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Link to="/admin/pack">
                                <Icon type="pie-chart" />
                                <span>pack</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="admin/card">
                                <Icon type="desktop" />
                                <span>card</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>User</span></span>}
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>Team</span></span>}
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '10px 16px' }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}