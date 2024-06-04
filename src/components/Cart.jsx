// import { useSelector } from "react-redux";
// import ItemList from "./ItemList"

// const Cart = () => {
//     const cartItems = useSelector((store) => store.cart.items)
//     return(
//         <div className="text-center m-5 p-3">
//             <h1 className="font-bold text-2xl">Cart</h1>
//             <div className="w-6/12 mx-auto my-9 border rounded-2xl ">
//                 <ItemList items={cartItems}/>
//             </div>
//         </div>
//     )
// }

// export default Cart;



import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }


    return (
        <div className="text-center m-5 p-3">
            <h1 className="font-bold text-2xl">Cart</h1>
            <button className="bg-red-600 text-white shadow-lg w-16 rounded-md text-sm mt-7 p-1
            hover:scale-105 active:scale-95 focus:outline-none"
             onClick={handleClearCart}>ClearCart</button>
            <div className="w-6/12 mx-auto my-9 border rounded-2xl">
                <ItemList items={cartItems} showAddButton={false} showRemoveButton={true} />
            </div>
        </div>
    );
};

export default Cart;
