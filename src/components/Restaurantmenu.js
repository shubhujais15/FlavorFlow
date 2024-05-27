// import ShimmerMenu from "./Shimmer";
// import { useParams } from "react-router-dom";
// import useRestaurantmenu from "../utils/useRestaurantmenu"
// import RestaurantCategory from "./RestaurantCategory";
// import { useState } from "react";

// const Restaurantmenu = () => {

//     const [showIndex ,setShowIndex] = useState(null);
//     const [showItems , setShowItems] = useState(false);
    
//     const {resid} = useParams();
//     // console.log(resid)

//     const RestMenu = useRestaurantmenu(resid);

//     if(RestMenu === null)
//         return <ShimmerMenu />;
      
//     const { name, cuisines , costForTwo } = RestMenu?.cards[2]?.card?.card?.info;

//     // const {itemCards} = RestMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card; 

//     const categories = RestMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//         (c)=>
//         c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     )

   

//     return(
//         <div className="text-center">
//             <h1 className="font-bold my-6 text-2xl">{name}</h1>
//             <p className="font-semibold text-lg">{cuisines.join(", ")} -- ₹{costForTwo/100}</p>
//             <p>
//                 {categories.map((category,index) => (
//                 <RestaurantCategory 
//                 key={category?.card?.card?.itemCards?.card?.info?.id} 
//                 data={category?.card?.card} 
//                 showItems={index === showIndex ? true : false}
//                 setShowIndex = {() => setShowIndex(index)}
//                 />))}
//             </p>


//             {/* <ul>
//                 {itemCards.map(item => <li key={item.card.info.name}>{item.card.info.name}</li>)}
//                 <li>{itemCards[0]?.card?.info?.name}</li>
//             </ul> */}

//         </div>
//     )
// }
// export default Restaurantmenu;

import ShimmerMenu from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const Restaurantmenu = () => {
    const [showIndex, setShowIndex] = useState(null);
    // console.log(showIndex)
    
    const { resid } = useParams();
    const RestMenu = useRestaurantmenu(resid);

    if (RestMenu === null) return <ShimmerMenu />;
      
    const { name, cuisines, costForTwo } = RestMenu?.cards[2]?.card?.card?.info;

    const categories = RestMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories)
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-semibold text-lg">{cuisines.join(", ")} -- ₹{costForTwo / 100}</p>
            <div>
                {categories.map((category, index) => (
                    <RestaurantCategory 
                        key={category?.card?.card?.title} 
                        data={category?.card?.card} 
                        showItems={index === showIndex}
                        setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Restaurantmenu;
