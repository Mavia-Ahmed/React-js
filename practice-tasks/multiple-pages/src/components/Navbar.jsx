import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo"><img style={{filter: "brightness(0) invert(1)", height: "30px", width: "60px", marginBottom: "-7px"}} src="./src/assets/logo-white.png" alt=""  /><span>Khan estate</span></div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};


export default Navbar;
