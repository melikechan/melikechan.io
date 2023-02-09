import React from "react";
import { Layout } from "antd";
const year = new Date().getFullYear();

const footerStyle = {
  backgroundColor: "rgb(222, 226, 230)",
  padding: "1%",
  textAlign: "center",
};

const Footer = () => {
  return (
    <>
      <Layout.Footer style={footerStyle}>
        <p>melikechan - {year}</p>
      </Layout.Footer>
    </>
  );
};

export default Footer;
