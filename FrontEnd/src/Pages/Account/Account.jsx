// import React, { useEffect } from "react";
// import axios from "axios";
import api from "../../services/axios";
import Headers from "../../Components/Header/Header";
import { Tabs, Layout, Menu, Divider, ConfigProvider } from "antd";
import {
  FaHistory,
  FaShoppingBag,
  FaSignOutAlt,
  FaUserCog,
  FaShippingFast,
  FaBox,
  FaUserAlt,
} from "react-icons/fa";
import "../../Components/SideMenu/SideMenu.css";

function Account() {
  // const fetchData = async () => {
  //   const res = await axios.post(api);

  //   console.log(res.data);
  // };
  console.log(api);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const contentAccount = [
    {
      key: 1,
      label: "Account",
      icon: <FaUserAlt />,
      children: [
        {
          key: 1.0,
          label: "Profile",
          icon: <FaUserCog />,
          path: "/profile",
        },
        {
          key: 1.1,
          label: "History",
          icon: <FaHistory />,
          path: "/profile/history",
        },
        {
          key: 1.2,
          label: "Order",
          icon: <FaShoppingBag />,
          path: "/profile/card",
        },
      ],
    },
    {
      key: 2,
      label: "Logout",
      icon: <FaSignOutAlt />,
      path: "#",
    },
  ];
  const handleMenuSelect = ({ item }) => {
    // Tìm item được chọn từ menu
    console.log(item);
    console.log(item.props);

    const selectedItem = item.props; // Props của menu chứa đầy đủ thông tin
    if (selectedItem.path) {
      // navigate(selectedItem.path);
      console.log(selectedItem.path);
    }
  };

  const { Content, Sider } = Layout;

  return (
    <Layout>
      <Headers />
      <Layout>
        <Sider
          width={200}
          style={{
            background: "#fff",
          }}
        >
          <Menu
            defaultSelectedKeys={["1.0"]}
            defaultOpenKeys={["1"]}
            className="custom-menu"
            mode="inline"
            items={contentAccount}
            onSelect={handleMenuSelect}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: "#fff",
              borderRadius: 10,
            }}
          >
            <Divider orientation="right">
              <h3>Orders</h3>
            </Divider>
            <ConfigProvider
              theme={{
                components: {
                  Tabs: {
                    colorPrimary: "var(--purple1)",
                    itemHoverColor: "var(--purple2)",
                    itemActiveColor: "var(--purple5)",
                  },
                },
              }}
            >
              <Tabs
                defaultActiveKey="1"
                inkBarColor="var(--purple5)"
                items={[FaBox, FaShippingFast].map((Icon, i) => {
                  const id = String(i + 1);
                  return {
                    key: id,
                    label: `Tab ${id}`,
                    children: `Tab ${id}`,
                    icon: <Icon />,
                  };
                })}
              />
            </ConfigProvider>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Account;
