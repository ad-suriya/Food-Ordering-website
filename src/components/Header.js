import { LOGO_URL } from "../Utils/constant";
const Header = () => {
  return (
    // Note: Use 'className' instead of 'class' in JSX
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          // Make sure this path is correct relative to where index.html lives
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;