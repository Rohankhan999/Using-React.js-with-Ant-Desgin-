import React, { useState } from "react";
import { Button, Drawer, Card, Modal } from "antd";
// import { BorderBottomOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";

import "./Hero.css";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const { Meta } = Card;
  return (
    <div style={{ backgroundColor: "#DDDDDD", padding: "50px 20px" }}>
      <h1
        style={{ fontSize: "48px", marginBottom: "20px", textAlign: "center" }}
      >
        Welcome to <span style={{ color: "#ff4d4f" }}>Shop.Co</span>
      </h1>
      <p
        style={{
          fontSize: "20px",
          color: "#444",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        At <strong>Shop.Co</strong>, we believe shopping should be simple,
        joyful, and full of possibilities. Whether you're looking to upgrade
        your wardrobe, find the perfect gift, or treat yourself to something
        special — we've got it all under one roof. With a carefully curated
        collection of products, stylish accessories, and quality you can trust,
        we're here to make your everyday shopping feel like a celebration.
      </p>
      <p
        style={{
          fontSize: "20px",
          color: "#444",
          marginTop: "20px",
          maxWidth: "800px",
          margin: "20px auto",
          textAlign: "center",
        }}
      >
        So sit back, explore, and enjoy the experience. Because at{" "}
        <strong>Shop.Co</strong>, it's not just about what you buy — it's about
        how it makes you feel. 💖
      </p>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <Button
          type="primary"
          size="large"
          onClick={showDrawer}
          style={{
            marginBottom: "20px",
            backgroundColor: "#ff4d4f",
            borderColor: "#ff4d4f",
          }}
        >
          Start Shopping Now
        </Button>
      </div>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <img
          src="data:image/png;base64,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"
          alt="sponsers"
          width={650}
          style={{
            borderRadius: "10px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></img>
        <p
          style={{
            fontSize: "20px",
            color: "#444",
            marginTop: "20px",
            maxWidth: "800px",
            margin: "20px auto",
          }}
        >
          Looking for top brands? Shop.co has it all under one roof! From
          world-famous shoe brands like Nike, Adidas, Puma, Reebok, Skechers,
          Converse, Vans, Timberland, Clarks, and New Balance, to a wide
          selection of fashion and lifestyle products — Shop.co is your one-stop
          destination. Whether you're shopping for men, women, or kids, you'll
          find everything from stylish footwear, trendy clothing, premium
          accessories, to even the latest electronics and gadgets. With so many
          options and trusted brands, Shop.co makes shopping convenient,
          reliable, and exciting.
        </p>
      </div>
      <div>
        <h1
          style={{
            fontSize: 38,
            textAlign: "center",
            marginTop: "50",
            marginBottom: "60",
          }}
          sty
        >
          Trending Products of <span style={{ color: "#ff4d4f" }}>Shop.Co</span>
        </h1>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Card
          hoverable
          style={{ width: 300, height: "auto", margin: "20px auto" }}
          cover={
            <img
              alt="example"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpaDg22sJwCLDwF0S5mWv-i-dXRZamnCj8CA&s"
            />
          }
        >
          <Meta
            title="Black Beast Max 270"
            description="Black-Casuales Sneakers For Men Italiano Leather Casual Shoes Luxury Brand Office Shoes Men Fashion....... and Luxury "
          />
          <Button
            type="primary"
            onClick={showModal}
            style={{
              height: "auto",
              marginTop: "20px",
              padding: "25",
              paddingTop: "10",
              paddingBottom: "10",
              fontSize: "15px",
              backgroundColor: "#FF4D4F",
            }}
          >
            Add to Cart
          </Button>
          <Modal
            title="Confirmation"
            okText="Yes"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Sure Want to add in a Cart</p>
          </Modal>
        </Card>
        <Card
          hoverable
          style={{ width: 300, height: "auto", margin: "20px auto" }}
          cover={
            <img
              alt="example"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DCtgWaEr7Hpkrh6ZcU3bNJ8OvGDfdOvUCg&s"
            />
          }
        >
          <Meta
            title="Black Loin 818"
            description="Men Business Formal Shoes Man Oxford Casual Shoes Men Brand Black Classic Comfortable Fashion Derby Luxury Leather Shoes"
          />
          <Button
            type="primary"
            onClick={showModal}
            style={{
              height: "auto",
              marginTop: "20px",
              padding: "25",
              paddingTop: "10",
              paddingBottom: "10",
              fontSize: "15px",
              backgroundColor: "#FF4D4F",
            }}
          >
            Add to Cart
          </Button>
          <Modal
            title="Confirmation"
            okText="Yes"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Sure Want to add in a Cart</p>
          </Modal>
        </Card>
        <Card
          hoverable
          style={{ width: 300, height: "auto", margin: "20px auto" }}
          cover={
            <img
              alt="example"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWo6nLGTb6yXen-hcjxDww5Pk1NuiQ2h4UIg&s"
            />
          }
        >
          <Meta
            title="Brown SNAZON SHOES"
            description="Luxury Fashion Men's Shoes New Genuines Leather Casual Shoes Luxury Brand Business Loafers For Men Driving Shoes"
          />
          <Button
            type="primary"
            onClick={showModal}
            style={{
              height: "auto",
              marginTop: "20px",
              padding: "25",
              paddingTop: "10",
              paddingBottom: "10",
              fontSize: "15px",
              backgroundColor: "#FF4D4F",
            }}
          >
            Add to Cart
          </Button>
          <Modal
            title="Confirmation"
            okText="Yes"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Sure Want to add in a Cart</p>
          </Modal>
        </Card>
      </div>

      <Drawer
        title=" Welcome to Shop.co Products"
        onClose={onClose}
        open={open}
      >
        <p>Mens</p>
        <p>Womens</p>
        <p>Kids</p>
        <p>Accessories</p>
        <p>Shoes</p>
        <p>Watches</p>
        <p>Electronics</p>
        <p>Bags</p>
        <p>Cosmetics</p>
      </Drawer>
    </div>
  );
}

export default Hero;
