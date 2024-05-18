import { useEffect, useState} from "react";
import Shimmer from "./Shimmer";


const Restaurantmenu = () => {
    let [RestMenu , setRestMenu] = useState(null);
  
    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=10575&catalog_qa=undefined&submitAction=ENTER"
        )
        const json = await data.json();
        console.log(json);
        setRestMenu(json.data)
    };

    if(RestMenu === null)
        return <Shimmer />;
      

    const { name, cuisines , costForTwo } = RestMenu?.cards[2]?.card?.card.info;
   

    const {itemCards} = RestMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return(
        <div className="restmenuitems">
            <h1>{name}</h1>
             <h5>{cuisines.join(",")}--{costForTwo}</h5>
            <ul>
                {itemCards.map(item => <li key={item.card.info.name}>{item.card.info.name}</li>)}
                {/* <li>{itemCards[0]?.card?.info?.name}</li> */}
            </ul>
        </div>
    )
}
export default Restaurantmenu;