import { Layout } from "antd";
import AboutBrand from "./Components/AboutBrand";
import AboutBrandtagline from "./Components/AboutBrandtagline";
import AboutCompany from "./Components/AboutCompany";
import AboutMission from "./Components/AboutMission.jsx";
import { Headers } from "./Components/Headers.jsx";
import Highlights from "./Components/Highlights";
import { MenuList } from "./Components/MenuList.jsx";
import "./index.css";
const { Header, Sider, Content } = Layout;

function App() {
  return (
    <>
      <Layout
        style={{
          width: "100%",
        }}
      >
        <Layout>
          <Sider
            className="sidebar"
            style={{
              overflowY: "auto",
              height: "100vh",
              position: "fixed",
              scrollbarWidth: "none",
              background: "#ffff",
            }}
          >
            <div className="logo">
              <img src="/src/assets/Frame 12@2x.png" alt="" />
            </div>
            <MenuList />
          </Sider>
          <Header className="header-container">
            <Headers />
          </Header>
          <Content
            className="content"
            style={{
              width: "100%",
              margin: "90px 230px 0",
              marginRight: "10px",
              overflow: "initial",
            }}
          >
            <AboutBrand className="AboutBrand" />
            <Highlights className="Highlights" />
            <AboutCompany className="AboutCompany" />
            <AboutMission className="AboutMission" />
            <AboutBrandtagline />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
