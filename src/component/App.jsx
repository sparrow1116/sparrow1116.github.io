import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router'

import Head from './head'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const Sider = React.createClass({
  getInitialState() {
    return {
      theme: 'dark',
      current: '1'
    };
  },
  render() {
    return (
      <div className="content_body">
        <Head></Head>
        <div className="side_by">
            <Menu theme={this.state.theme}
                  defaultOpenKeys={['1']}
                  selectedKeys={[this.state.current]}
                  mode="inline">
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                <MenuItemGroup title="分组1">
                  <Menu.Item key="1"><Link to="/key1">选项1</Link></Menu.Item>
                  <Menu.Item key="2"><Link to="/key2">选项2</Link></Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="分组2">
                  <Menu.Item key="3">选项3</Menu.Item>
                  <Menu.Item key="4">选项4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
                <Menu.Item key="5">选项5</Menu.Item>
                <Menu.Item key="6">选项6</Menu.Item>
                <SubMenu key="sub3" title="三级导航">
                  <Menu.Item key="7">选项7</Menu.Item>
                  <Menu.Item key="8">选项8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>小知识点</span></span>}>
                <Menu.Item key="9"><Link to="/case/pubsub"> pubsub：双向数据绑定</Link></Menu.Item>
                <Menu.Item key="10">选项10</Menu.Item>
                <Menu.Item key="11">选项11</Menu.Item>
                <Menu.Item key="12">选项12</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        {this.props.children}
        </div>
    );
  }
});

export default Sider;
