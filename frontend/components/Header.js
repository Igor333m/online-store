import Nav from './Nav'

const Header = () => (
  <div>
    <div className="bar">
      <a href="">Online Store</a>
      <Nav />
    </div>
    <div className="sub-bar"></div>
    <p>Search</p>
    <div>Cart</div>
  </div>
);

export default Header;