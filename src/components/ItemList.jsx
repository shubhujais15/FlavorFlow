import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items, showAddButton = true, showRemoveButton = false }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} 
                     className="m-1 py-1 md:p-2 md:m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    
                    <div className="w-10/12">
                        <div className="py-2">
                            <span className="text-md md:text-lg">{item.card.info.name}</span>
                            <span>-- ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100 }</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div> 
                    <div className="w-2/12 md:p-4">
                        <img className="w-full rounded-lg m-2" 
                             src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`} 
                             alt={item.card.info.name}
                        />
                        {showAddButton && (
                           <button className="ml-2 md:ml-3 p-1 bg-black text-white shadow-lg md:w-20 w-14 rounded-md text-sm transition transform duration-150 
                                       hover:scale-105 active:scale-95 focus:outline-none "
                           onClick={() => handleAddItem(item)}>
                           Add+
                       </button>
                        )}
                        {showRemoveButton && (
                            <button className="md:ml-4 my-1 md:my-0 p-1 bg-red-500 text-white shadow-lg w-16 md:w-16 rounded-md text-sm 
                            hover:scale-105 active:scale-95 focus:outline-none" 
                                    onClick={() => handleRemoveItem(item.card.info.id)}>
                                Remove
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;


   