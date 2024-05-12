import Restaurantcards from "./Restaurantcards.js"
// import resList from "../utils/mockData.js"
import {useEffect, useState} from "react"
import Shimmer from "./Shimmer.js";

const Body = () => {

  // It is a state variable that holds the list of restaurants, and  it's initialized with an resList data in useState hook.
  // let [ListofRestaurant , setListofRestaurant] = useState(resList);

  let [ListofRestaurant , setListofRestaurant] = useState([]);

  //  Creating a copy of ListofRestaurant which is used for filtering restaurant list without losting the original data
  let [FilteredRestaurant , setFilteredRestaurant] = useState([]);

  // creating a useState to filter restaurant after searching some specific restuarants
  let [SearchText , setSearchText] = useState("");

  // if no dependency array => useEffect is called on every render
  // if there is nothing in dependency array = [] => useEffect is called on initial render(just once)
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    // optionalChaining
    setListofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setListofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  // Conditional Rendering
  if(ListofRestaurant.length === 0){
    return <Shimmer />
  }

  
  return(
    <div  className="bodyContainer">
      <div className="searchBar">
    {/* In value we pass the state variable name in which we have to set the value */}
        <input type="text" className="inputBox" value={SearchText} 
        onChange={(e)=>{
          setSearchText(e.target.value);
        }}></input>


        <button className="searchBtn" 
        onClick={()=>{
          const filteredRest = ListofRestaurant.filter(
            (res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase())
          )
          setFilteredRestaurant(filteredRest);
          setSearchText("")
          
        }}>
          Search</button>
          {/* setListofRestaurant(ListofRestaurant); */}


        <button className="filt-btn" onClick={() => {
          const filteredList = ListofRestaurant.filter(
            (res) => res.info.avgRating > 4.3
          ); 
          // setListofRestaurant(filteredList);
          setFilteredRestaurant(filteredList);
        }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="final-cards">
        
        {/* resList is replaced with ListofRestaurant bcz now we add resList data in a state variable ListofRestaurant */}
        {FilteredRestaurant.map((restaurant) => (
          <Restaurantcards key={restaurant.info.id} resData={restaurant} />
        )
        )}
      </div>
    </div>
  );
 };

  export default Body;