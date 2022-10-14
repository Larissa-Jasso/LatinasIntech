import { CaretDownOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Image, Layout, Menu, Row } from "antd";
import React from "react";
import "./Navbar.scss";
import { Outlet } from "react-router-dom";
const { Header, Content } = Layout;

export default function Navbar() {
  return (
    <Layout>
      <Header className="first-header background-header">
        <Menu mode="horizontal" className="menu">
          <Menu.Item key="6">
            <Button type="primary" className="btn-donate" size="small">
              Donate
            </Button>
          </Menu.Item>
          <Menu.Item key="5">Tiendita</Menu.Item>
          <Menu.Item key="4">Blog</Menu.Item>
          <Menu.Item key="3">Chapters</Menu.Item>
          <Menu.SubMenu
            key="2"
            title="Founders & Investors"
            icon={<CaretDownOutlined />}
          >
            <Menu.Item key="Sub3">Submenu 3</Menu.Item>
            <Menu.Item key="Sub4">Submenu 4</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="1"
            title="Get Involved"
            icon={<CaretDownOutlined />}
          >
            <Menu.Item key="Sub1">Submenu 1</Menu.Item>
            <Menu.Item key="Sub2">Submenu 2</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Header>
      <Header className="second-header background-header" >
          <Avatar
            src={<Image src="/images/Logo.png" preview={false} />}
            className="logo"
            />
        <Menu mode="horizontal" className="menu">
          <Menu.Item key="13" icon={<CaretDownOutlined />}>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
          </Menu.Item>
          <Menu.Item key="12">
            <Avatar
              src={
                <Image
                  src="/images/Envelope.png"
                  style={{ width: "100%" }}
                  preview={false}
                />
              }
            />
          </Menu.Item>
          <Menu.Item key="11">LiT Community</Menu.Item>
          <Menu.SubMenu key="10" title="Level up" icon={<CaretDownOutlined />}>
            <Menu.Item key="Sub7">Submenu 7</Menu.Item>
            <Menu.Item key="Sub8">Submenu 8</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="9">Events</Menu.Item>
          <Menu.SubMenu
            key="8"
            title="LiT Recruit"
            icon={<CaretDownOutlined />}
          >
            <Menu.Item key="Sub5">Submenu 5</Menu.Item>
            <Menu.Item key="Sub6">Submenu 6</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="7">Dashboard</Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "50px",
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
}
