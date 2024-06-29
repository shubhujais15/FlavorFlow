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
    <div className="flex justify-between bg-pink-200 content-center shadow-xl m-0.5 rounded-xl">
      <div className="flex">
        <img className="w-32 h-32 rounded-full p-4" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" alt="logo" />
        <div className='flex items-center pl-3'>
          <h1 className=' italic font-bold text-2xl'>FlavorFlow ~ </h1>
          <h1 className="italic text-xl">Streamline Food Delivery</h1>
        </div>
      </div>
     
      {user && <div className='flex-wrap'>
        <div className='my-2 ml-[320px]'>
            <div className='text-sm ml-[350px]'>{onlineStatus ? 'Online: ✅' : 'offline: 🔴'}</div>
        </div>
      <div className="flex items-center ml-[260px]">
        <ul className="flex mt-5">
          <li className='text-lg font-serif mr-12'><Link to="/home">Home</Link></li>
          <li className='text-lg font-serif mr-12'><Link to="/home/about">About</Link></li>
          <li className='text-lg font-serif mr-12'><Link to="/home/contact">Contact</Link></li>
          <li className='text-lg mr-12'>
            <div className='flex'>
              <Link to="/home/cart">
                <img className="w-11 h-11 rounded-full mb-[7px] active:scale-95 focus:outline-none"
                 src="https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg" alt="cart" />
              </Link>
              <div className='bg-black text-white w-5 h-5 rounded-full justify-center'>
                <p className='text-sm text-center'>{cartItems.length}</p>
              </div>
              <img onClick={handleSignOut} className="w-11 h-11 rounded-full mb-[7px] ml-8 cursor-pointer active:scale-95 focus:outline-none" 
              src="https://static.vecteezy.com/system/resources/previews/006/606/705/non_2x/sign-out-logout-icon-in-circle-line-vector.jpg" alt="LogOut" />
            </div>
          
          </li>
        </ul>
      </div>
      </div>}
    </div>
  );
};

export default Header;
