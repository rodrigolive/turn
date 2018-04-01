import React from "react";
import { Layout, Menu, Icon } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Scheduler from "./scheduler.jsx";

const Welcome = () => (
    <div>
        <h2>Welcome you!</h2>
    </div>
);
const Jobs = () => <div>Jobs here</div>;

export default class Main extends React.Component {
    state = {
        collapsed: false
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };
    render() {
        return (
            <Layout style={{ background: "#fff" }}>
                <Sider
                    collapsed={this.state.collapsed}
                    style={{
                        overflow: "auto",
                        height: "100vh",
                        position: "fixed",
                        left: 0,
                        background: "#fff"
                    }}>
                    <div className="logo" style={{ textAlign: "center" }}>Turn</div>
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        style={{ background: "#fff", height: "100%" }}>
                        <Menu.Item key="1">
                            <Link to="/jobs">
                                <Icon type="user" />
                                <span className="nav-text">Jobs</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/scheduler">
                                <Icon type="user" />
                                <span className="nav-text">Scheduler</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/rules">
                                <Icon type="user" />
                                <span className="nav-text">Rules</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/packages">
                                <Icon type="user" />
                                <span className="nav-text">Packages</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/artifacts">
                                <Icon type="user" />
                                <span className="nav-text">Artifacts</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/environments">
                                <Icon type="user" />
                                <span className="nav-text">Environments</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to="/system">
                                <Icon type="user" />
                                <span className="nav-text">System</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <Header className="header">
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
                        <div style={{ padding: 24, background: "#fff" }}>
                            <Switch>
                                <Route exact path="/jobs" render={Jobs} />
                                <Route exact path="/scheduler" component={Scheduler} />
                            </Switch>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
