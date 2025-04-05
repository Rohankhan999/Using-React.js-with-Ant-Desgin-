import "./Header.css";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
function Header() {
  return (
    <div>
      <nav>
        <h1>Shop.Co</h1>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>
          <Badge count={1}>
            <Avatar size={45} icon={<ShoppingCartOutlined />} style={{ marginLeft: 20 , cursor: "pointer"}} />
          </Badge>

          <Avatar
            size={45}
            icon={<UserOutlined />}
            style={{ marginLeft: 20 , cursor: "pointer"}}
          />
        </div>
      </nav>
    </div>
  );
}
export default Header;
