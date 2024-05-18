import { useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const Restaurantmenu = () => {
    let [RestMenu , setRestMenu] = useState(null);

    const {resid} = useParams();
    console.log(resid)
    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resid);
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