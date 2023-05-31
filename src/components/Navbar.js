const Navbar = ({ allItems }) => {
  return (
    <div id="navbar__con">
      <div id="nav__">
        <h1 id="logo">
          THE SHEGE SHOP
          <span style={{ display: "block", fontSize: "12px", color: "#959595" }}>
            BY BENJAMIN NKEM
          </span>
        </h1>

        <nav>
          <ul>
            <a href="/">Explore</a>
            <a href="/">Sign Up</a>
            <a href="/" className="view_cart_link" data-items-added={allItems}>
              Items
            </a>
            <a href="/">Login</a>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
