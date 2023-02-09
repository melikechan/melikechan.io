import React from "react";
import melikechanLogo from "../../assets/img/melikechan-logo.svg";
import "./Header.css";
import {
  MenuOutlined,
  UserOutlined,
  FileTextOutlined,
  MailOutlined,
} from "@ant-design/icons";
import MediaQuery from "react-responsive";
import { Breadcrumb, Button, Layout } from "antd";

const headerStyle = {
  height: "8%",
  padding: "1% 2%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: `rgb(233, 236, 239)`,
};

const Header = () => {
  return (
    <>
      <Layout.Header style={headerStyle}>
        <img
          className="header-logo"
          src={melikechanLogo}
          alt="melikechan-logo"
        />
        <nav>
          <MediaQuery minWidth={641}>
            <Button
              type="link"
              icon={<UserOutlined />}
              size="large"
              style={{
                fontSize: "1.2rem",
              }}
            >
              About
            </Button>
            <Button
              type="link"
              icon={<FileTextOutlined />}
              size="large"
              style={{
                fontSize: "1.2rem",
              }}
            >
              Resume
            </Button>
            <Button
              type="link"
              icon={<MailOutlined />}
              size="large"
              style={{
                fontSize: "1.2rem",
              }}
            >
              Contact
            </Button>
          </MediaQuery>

          <MediaQuery maxWidth={640}>
            <Breadcrumb>
              <MenuOutlined
                style={{ fontSize: "3rem", justifySelf: "right" }}
              />
            </Breadcrumb>
          </MediaQuery>
        </nav>
      </Layout.Header>
    </>
  );
};

export default Header;
