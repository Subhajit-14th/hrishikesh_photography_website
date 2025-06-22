import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <p className="logo-heading">WEDDING PHOTO STATION</p>
        <p className="sub-logo-name">HRISIKESH CHAKRABORTY</p>
      </div>

      <nav className="navbar">
        <ul className="nav-menu">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/galleries">Galleries</a>
          </li>
          <li>
            <a href="/stories">Stories</a>
          </li>
          {/* <li><a href="/testimonials">Testimonials</a></li> */}
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/enquire">Enquire</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
