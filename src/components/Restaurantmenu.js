import { useEffect, useState} from "react";


const Restaurantmenu = () => {
    let [RestMenu , setRestMenu] = useState(null);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json();
        console.log(json);
        setRestMenu(json.data)
    }
    // if(RestMenu === null){
    //     return <Shimmer />
    //   }

    // const {name,cuisines,cloudinaryImageId,costForTwo,avgRating} = 
    // RestMenu?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info

    // const {name,cuisines,costForTwo} = RestMenu.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info;
    return(
        <div className="restmenuitems">
            {/* <h1>{name}</h1>
            <p>{cuisines.join(",")}--{costForTwo}</p> */}
            <ul>
                {/* <li>{cloudinaryImageId}</li> */}
                <li>Sandwich</li>
                <li>Pizza</li>
                <li>French Fries</li>
            </ul>
        </div>
    )
}
export default Restaurantmenu;