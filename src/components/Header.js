import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';


const Header = () => {
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store)=>store.cart.items)
  console.log(cartItems)

  return(
    <div className="flex justify-between bg-pink-200 content-center shadow-xl m-0.5 rounded-xl">
      <div className="flex">
        <img className="w-32 h-32 rounded-full p-4" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"></img>
        {/* <h1 className='restName'>Welcome To My Foodz</h1> */}
        <div className='flex items-center pl-3'>
        <h1 className=' italic font-bold text-2xl'>FlavorFlow ~ </h1>
        <h1 className="italic text-xl">Streamline Food Delivery</h1>
        </div>
      </div>
      <div className="flex items-center">
        <ul className="flex mt-6">
          <li className='text-lg mr-12'>OnlineStatus: {onlineStatus ?  '✅' : '🔴'}</li>

          {/* if i use anchor tag then it loads the whole page but Link tag that comes from react-router-dom loads only updated body part of the page */}
          <li className='text-lg mr-12'><Link to="./">Home</Link></li>
          <li className='text-lg mr-12'><Link to="./about">About</Link></li>
          <li className='text-lg mr-12'><Link to="./contact">Contact</Link></li> 
          <li className='text-lg mr-12'>
            <div className='flex'>
            <Link to="./cart">
            <img className="w-11 h-11 rounded-full mb-1.5" src="https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg"></img>
            </Link>
            <div className='bg-black text-white w-5 h-5 rounded-full justify-center'><p className='text-sm text-center'>{cartItems.length}</p></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )};

  export default Header;