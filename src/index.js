import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import profileImage from "./assets/img/profile-image.webp";
//import { FileOutlined } from "@ant-design/icons";
import { Layout, BackTop, Divider, Typography, Row, Col, Image } from "antd";
import MediaQuery from "react-responsive";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BackTop />
    <Layout>
      <Header />
      <Hero />
      <Layout.Content style={{ padding: "4% 8% 4% 8%" }}>
        <Divider id="about" orientation="center">
          <Typography.Title level={1}>About</Typography.Title>
        </Divider>
        <Row justify="space-around">
          <Col md={12}>
            <Typography.Paragraph>
              I am currently an <i>computer engineering</i> student at{" "}
              <i>Ankara University, Turkey</i> who is interested in artificial
              intelligence, mathematics and quantum computing. I am also keen on
              competitive programming even though I am not good at it.
              <br />I love drawing, watching anime (I mostly love action and
              fantasy animes) and reading fantasy books.
            </Typography.Paragraph>
            <Typography.Paragraph>
              <i>Note: This is the alpha build of the website.</i>
            </Typography.Paragraph>
          </Col>
          <MediaQuery minWidth={768}>
            <Image
              src={profileImage}
              alt="image"
              width={"20%"}
              preview={false}
            />
          </MediaQuery>
          <MediaQuery maxWidth={767}>
            <Image
              src={profileImage}
              alt="image"
              width={"100%"}
              preview={false}
            />
          </MediaQuery>
        </Row>
        {/* <Divider id="resume" orientation="center">
                    <Typography.Title level={1}>Resume</Typography.Title>
                </Divider>
                <Col style={{ textAlign: "center" }}>
                    <Typography.Paragraph>
                        Here is a preview to my resume, it may be outdated but
                        you can contact me from LinkedIn for the latest version.
                    </Typography.Paragraph>
                    <Row justify="space-evenly" style={{ textAlign: "left" }}>
                        <Col>
                            <FileOutlined />
                            <Typography.Title level={2}>
                                Summary
                            </Typography.Title>
                            <Typography.Paragraph>
                                lorem ipsum
                            </Typography.Paragraph>
                        </Col>
                        <Col>
                            <Typography.Title level={2}>
                                Summary
                            </Typography.Title>
                        </Col>
                    </Row>
                </Col>

                <Divider id="contact" orientation="center">
                    <Typography.Title level={1}>Contact</Typography.Title>
                </Divider> */}
      </Layout.Content>
      <Footer />
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
