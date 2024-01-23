import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { BiSolidColorFill } from "react-icons/bi";
import { TbPasswordUser } from "react-icons/tb";

const { Header, Sider, Content } = Layout;

const App = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical mb-5">
          {collapsed ? (
            <h1 className="text-white font-bold text-center py-5">R A</h1>
          ) : (
            <h1 className="text-white font-bold text-center py-5">
              React Assignment
            </h1>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={(data) => {
            navigate(data.key);
          }}
          items={[
            {
              key: "/counter",
              icon: <MdOutlineAddCircleOutline />,
              label: "Counter",
            },
            {
              key: "/bgchanger",
              icon: <BiSolidColorFill />,
              label: "BG Changer",
            },
            {
              key: "/passgenerator",
              icon: <TbPasswordUser />,
              label: "Password Generator",
            },
            {
              key: "/OtpGenerator",
              icon: <TbPasswordUser />,
              label: "OTP Generator",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
