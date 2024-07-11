import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data,showItems,setShowIndex}) => {
    console.log(data);
    // console.log(showItems)
    // const [showItems, setshowItems] = useState(false)
   

    const handleClick = () => {
        // setshowItems(!showItems)
        setShowIndex();
        console.log("Clicked")
    }

    return(
        <div className="w-screen">
        <div className="w-10/12 md:w-6/12 mx-auto my-6 shadow-xl bg-gray-100 p-4 rounded-lg">
                    {/* head */}
        <div className="flex justify-between cursor-pointer"
        onClick={handleClick}>

            <span className="font-semibold md:font-bold">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
            {/* Accordion Body */}
            </div>
            {showItems && <ItemList key={data?.itemCards?.card?.info?.id} items={data.itemCards} />}
        </div>
        </div>
    )
}
export default RestaurantCategory;