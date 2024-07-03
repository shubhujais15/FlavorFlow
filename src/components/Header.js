import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import useOnlineStatus from '../utils/useOnlineStatus';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user)
  const cartItems = useSelector((store) => store.cart.items);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/home");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);
  
  return (
    <div className="flex flex-col md:flex-row justify-between bg-pink-200 content-center shadow-xl m-0.5 rounded-xl">
      <div className="flex">
        <img className="w-32 h-32 rounded-full p-4" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" alt="logo" />
        <div className='flex md:flex-row flex-col items-center pl-3 mt-8 md:mt-0'>
          <h1 className=' italic font-bold text-2xl'>FlavorFlow ~ </h1>
          <h1 className="italic text-xl">Streamline Food Delivery</h1>
        </div>
      </div>
     
      {user && <div className='md:flex-wrap'>
        <div className='my-1 md:my-2 ml-[320px]'>
            <div className='hidden md:inline-block text-sm ml-[350px]'>{onlineStatus ? 'Online: ✅' : 'offline: 🔴'}</div>
        </div>
      <div className="flex items-center ml-10 md:ml-[260px]">
        <ul className="flex md:mt-5">
          <li className='md:text-lg font-serif md:ml-0 md:mr-12'><Link to="/home">Home</Link></li>
          <li className='md:text-lg font-serif ml-5 md:ml-0 md:mr-12'><Link to="/home/about">About</Link></li>
          <li className='md:text-lg font-serif ml-5 mr-5 md:ml-0 md:mr-12'><Link to="/home/contact">Contact</Link></li>
          <div className='mb-'>
          <li className='text-lg ml-4 md:ml-0 md:mr-12'>
            <div className='flex mb-2 md:mb-0'>
              <Link to="/home/cart">
                <img className="w-11 h-11 rounded-full md:rounded-full md:mb-[7px] active:scale-95 focus:outline-none"
                 src="https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg" alt="cart" />
              </Link>
              <div className='bg-black text-white w-5 h-5 rounded-full justify-center'>
                <p className='text-sm text-center'>{cartItems.length}</p>
              </div>
              <img onClick={handleSignOut} className="w-11 h-11 rounded-full md:mb-[7px] ml-6 mr-2 md:mr-0 md:ml-8 cursor-pointer active:scale-95 focus:outline-none" 
              src="https://static.vecteezy.com/system/resources/previews/006/606/705/non_2x/sign-out-logout-icon-in-circle-line-vector.jpg" alt="LogOut" />
            </div>
          
          </li>
          </div>
        </ul>
      </div>
      </div>}
    </div>
  );
};

export default Header;
