import React from "react";
import { Layout, Row, Col, Space, Typography, Button, Divider } from "antd";
import splash_bg from "../../assets/img/splash-bg.webp";
import {
  Github,
  Gitlab,
  Linkedin,
  Kaggle,
  Codeforces,
} from "@icons-pack/react-simple-icons";
const splashMainTitleStyle = {
  color: "rgb(54, 54, 54)",
  margin: "1%",
};
const splashDescriptionTitleStyle = {
  color: "rgb(255, 255, 255)",
  margin: "1%",
};

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <>
      <Layout.Content
        style={{
          padding: "8% 8% 4% 8%",
          backgroundImage: ` url(${splash_bg}) `,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Row justify="center">
          <Col style={{ textAlign: "center" }}>
            <Space direction="vertical" style={{ display: "flex" }}>
              <Title level={1} style={splashMainTitleStyle}>
                Melike Vurucu
              </Title>
              <Title italic={true} level={2} style={splashMainTitleStyle}>
                melikechan
              </Title>
            </Space>

            <Divider />
            <Paragraph style={splashDescriptionTitleStyle}>
              A computer engineering student who is interested in quantum
              computing, AI and competitive programming.
            </Paragraph>
            <Space justify="center">
              <Button
                shape="circle"
                size="large"
                icon={
                  <Github
                    title="Github"
                    style={{ verticalAlign: "text-bottom" }}
                  />
                }
                href="https://github.com/melikechan"
                target="_blank"
              />
              <Button
                shape="circle"
                size="large"
                icon={
                  <Gitlab
                    title="Gitlab"
                    style={{ verticalAlign: "text-bottom" }}
                  />
                }
                href="https://gitlab.com/melikechan"
                target="_blank"
              />
              <Button
                shape="circle"
                size="large"
                icon={
                  <Linkedin
                    title="LinkedIn"
                    style={{ verticalAlign: "text-bottom" }}
                  />
                }
                href="https://linkedin.com/in/melikevurucu"
                target="_blank"
              />
              <Button
                shape="circle"
                size="large"
                icon={
                  <Codeforces
                    title="Codeforces"
                    style={{ verticalAlign: "text-bottom" }}
                  />
                }
                href="https://codeforces.com/profile/melikechan"
                target="_blank"
              />
              <Button
                shape="circle"
                size="large"
                icon={
                  <Kaggle
                    title="Kaggle"
                    style={{ verticalAlign: "text-bottom" }}
                  />
                }
                href="https://kaggle.com/melikechan"
                target="_blank"
              />
            </Space>
          </Col>
        </Row>
      </Layout.Content>
    </>
  );
};
export default Hero;
