import logo from "../../assets/logo.png";
import "./header.css";
function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-left">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/galleries">Galleries</a>
          </li>
          <li>
            <a href="/stories">Stories</a>
          </li>
        </ul>

        <div className="logo">
          <img src={logo} alt="Logo" />
          <p>HRISIKESH CHAKRABORTY</p>
        </div>

        <ul className="nav-right">
          <li>
            <a href="/testimonials">Testimonials</a>
          </li>
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
