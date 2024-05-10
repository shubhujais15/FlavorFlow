import {Link} from 'react-router-dom';

const Header = () => (
    <div className="mainHeader">
      <div className="logoNdname">
        <img className="mainLogo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"></img>
        <h1 className='restName'>Welcome To My Foodz</h1>
      </div>
      
      <div className="navBar">
        <ul className="navbarList">
          {/* if i use anchor tag then it loads the whole page but Link tag that comes from react-router-dom loads only updated body part of the page */}
          <li><Link to="./">Home</Link></li>
          <li><Link to="./about">About</Link></li>
          <li><Link to="./contact">Contact</Link></li> 
          <li>
            <Link to="./cart">
            <img className="cartLogo" src="https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg"></img>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  export default Header;