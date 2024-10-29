import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <h2 className="logo-app">
          Nexa<span>Blog</span>
        </h2>
        <p className="menu-item">Logout</p>
      </nav>
    </header>
  );
};

export default Header;