import {
  GoldTwoTone,
  InfoCircleTwoTone,
  SettingFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Menu } from "antd";
export function MenuList() {
  return (
    <>
      <Menu className="menu-bar" theme="light" mode="inline">
        <div className="menu-id">
          <Menu.Item>OUR IDENTITY</Menu.Item>
        </div>
        <Menu.SubMenu key="About" title="About" icon={<InfoCircleTwoTone />}>
          <Menu.Item key="Our-Company">Our Company</Menu.Item>
          <Menu.Item key="Boilerplate-copy">Boilerplate copy</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="Brand-Value" icon={<GoldTwoTone />}>
          Brand Values
        </Menu.Item>
        <div className="menu-id">
          <Menu.Item>KEY ELEMENTS</Menu.Item>
        </div>
        <Menu.SubMenu key="Logo" title="Logo">
          <Menu.Item key="The-Logo">The Logo</Menu.Item>
          <Menu.Item key="LogoMark">LogoMark</Menu.Item>
          <Menu.Item key="Clear-Space">Clear Space</Menu.Item>
          <Menu.Item key="use-cases">Special use Cases</Menu.Item>
          <Menu.Item key="backgrounds">Backgrounds</Menu.Item>
          <Menu.Item key="Usage">Usage</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="Colours" title="Colours">
          <Menu.Item key="Palette1">Core Palette</Menu.Item>
          <Menu.Item key="Palette2">Secondary Palette</Menu.Item>
          <Menu.Item key="Application">Application</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="Typography">Typography</Menu.Item>
        <Menu.Item key="Shapes">Brand shapes</Menu.Item>
      </Menu>

      <br />
      <br />
      <br />
      <br />

      <div className="set_log">
        <Menu className="menu-bar" theme="light" mode="inline">
          <Menu.Item key="settings" icon={<SettingFilled />}>
            Settings
          </Menu.Item>
          <Menu.Item
            key="logout"
            icon={<Avatar size="small" icon={<UserOutlined />} />}
          >
            Logout
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
}
