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
        <div id="icons">
          <Badge count={1}>
            <Avatar
              id="avatar"
              size={40}
              icon={<ShoppingCartOutlined />}
              style={{ marginLeft: 0, cursor: "pointer" }}
            />
          </Badge>

          <Avatar
            id="avatar"
            size={40}
            icon={<UserOutlined />}
            style={{ marginLeft: 20, cursor: "pointer" }}
            className="md-0"
          />
        </div>
      </nav>
    </div>
  );
}
export default Header;
