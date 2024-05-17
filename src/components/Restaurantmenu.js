import { useEffect, useState} from "react";


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
    }

    if(RestMenu === null){
        return <Shimmer />
      }

    const {name,cuisines,cloudinaryImageId,avgRating} = 
    RestMenu?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info

    const {costForTwo} = RestMenu.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info;
    return(
        <div className="restmenuitems">
            {/* <h1>{name}</h1>
            <p>{cuisines.join(",")}--{costForTwo}</p> */}
            <ul>
                <li>{cloudinaryImageId}</li>
                <li>Sandwich</li>
                <li>Pizza</li>
                <li>French Fries</li>
            </ul>
        </div>
    )
}
export default Restaurantmenu;