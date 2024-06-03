import Restaurantcards from "./Restaurantcards.js"
// import resList from "../utils/mockData.js"
import {useEffect, useState} from "react"
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { REST_API } from "../utils/constants.js";
import useOnlineStatus from "../utils/useOnlineStatus.jsx"

const Body = () => {

  // It is a state variable that holds the list of restaurants, and  it's initialized with an resList data in useState hook.
  // let [ListofRestaurant , setListofRestaurant] = useState(resList);

  const [ListofRestaurant , setListofRestaurant] = useState([]);
  // console.log(ListofRestaurant);

  //  Creating a copy of ListofRestaurant which is used for filtering restaurant list without losting the original data
  const [FilteredRestaurant , setFilteredRestaurant] = useState([]);

  // creating a useState to filter restaurant after searching some specific restuarants
  let [SearchText , setSearchText] = useState("");

  // const addPromotedLabel = withPromotedLabel(Restaurantcards);

  // if no dependency array => useEffect is called on every render
  // if there is nothing in dependency array = [] => useEffect is called on initial render(just once)
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
    const data = await fetch(REST_API);
    const json = await data.json();
    // console.log(json);
    // optionalChaining
    setListofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setListofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }  

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1 className="justify-center text-center">U are offline</h1>

  // Conditional Rendering
  if(ListofRestaurant.length === 0){
    return <Shimmer />
  }

  
  return(
    <div  className="bg-slate-400 mt-2.5 m-0.5 rounded-xl">
      <div className="flex justify-center m-1.5 p-3">
    {/* In value we pass the state variable name in which we have to set the value */}
        <input type="text" className=" mt-3 h-10 w-96 rounded-full text-base indent-3.5 outline-none focus:border-indigo-500 focus:ring-indigo-400 transition-colors duration-200 ease-in-out focus:ring-2" value={SearchText} 
        onChange={(e)=>{
          setSearchText(e.target.value);
        }}></input>


        <button className="bg-yellow-100 hover:bg-yellow-200 mx-3 mt-3 h-9 w-20 rounded-full hover:scale-105 active:scale-95 focus:outline-none" 
        onClick={()=>{
          const filteredRest = ListofRestaurant.filter(
            (res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase())
          )
          setFilteredRestaurant(filteredRest);
          setSearchText("")
          
        }}>
          Search</button>
          {/* setListofRestaurant(ListofRestaurant); */}


        <button className=" bg-yellow-100 hover:bg-yellow-200 mt-3 mx-3 h-9 w-48 rounded-full hover:scale-105 active:scale-95 focus:outline-none" 
        onClick={() => {
          const filteredList = ListofRestaurant.filter(
            (res) => res.info.avgRating > 4.3
          ); 
          // setListofRestaurant(filteredList);
          setFilteredRestaurant(filteredList);
        }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap my-6 ml-12">
        {/* resList is replaced with ListofRestaurant bcz now we add resList data in a state variable ListofRestaurant */}
        {FilteredRestaurant.map((restaurant) => (
          <Link 
          className="rest-detail"
          key={restaurant.info.id}
          to={"/restaurant/"+ restaurant.info.id}>
            {/* Adding promoted label to restaurant cards */}
            {/* {restaurant.info.promoted ? (
              <addPromotedLabel resData={restaurant} />) : (<Restaurantcards resData={restaurant} />)
            } */}
           <Restaurantcards resData={restaurant} />
          </Link>
        )
        )}
      </div>
    </div>
  );
 };

  export default Body;