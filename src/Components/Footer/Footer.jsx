import "./Footer.css";
function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        padding: "5px ",
        color: "white",
        // margin: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "30px",
        }}
      >
        <p>USEFUL LINKS</p>
        <p>NEWSLETTER</p>
        <p>CONTACT</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <div>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Help</li>
            <li>Faq</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <li>Trending Outfits</li>
            <li>Trending Shoes</li>
            <li>Trending Watches</li>
            <li>Trending Slippers</li>
            <li>Trending Bags</li>
            <li>Trending Electronics</li>
          </ul>
        </div>
        <div>
          <ul 
           style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}>
            <li>Email</li>
            <li>Whatsapp</li>
            <li>Instagram</li>
            <li>Facbook</li>
            <li>twitter</li>
            <li>LinkedIn</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
      <hr />
      <h2 style={{textAlign:"center"}}>Shop.co Revised Reverse 2025 ©</h2>
    </div>
  );
}
export default Footer;
