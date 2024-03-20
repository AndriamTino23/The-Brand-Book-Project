import {
  LogoutOutlined,
  ProfileOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Menu, Select } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
export function Headers() {
  return (
    <>
      <div className="header">
        <div className="nav-left">
          <input type="search" placeholder="search" />
          <SearchOutlined className="search-icon" />
        </div>
        <div className="nav-right">
          <img src="/src/assets/icon.png" alt="notification-icon" />
          <div className="select-language">
            <Select
              defaultValue="English"
              style={{
                width: 140,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "English",
                  label: "English",
                },
                {
                  value: "French",
                  label: "French",
                },
                {
                  value: "China",
                  label: "China",
                },
              ]}
            />
          </div>
          <div className="user">
            <Menu mode="inline">
              <Menu.SubMenu
                key="user"
                icon={<Avatar icon={<UserOutlined />} />}
                title="User"
              >
                <Menu.Item key="01" icon={<ProfileOutlined />}>
                  Profile
                </Menu.Item>
                <Menu.Item key="02" icon={<SettingOutlined />}>
                  Settings
                </Menu.Item>
                <Menu.Item key="03" icon={<LogoutOutlined />}>
                  Logout
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}
