import {MENU_API} from "./constants"
import { useState,useEffect } from "react";

const useRestaurantmenu = (resid) => {

    const [RestMenu , setRestMenu] = useState(null);
    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resid);
        const json = await data.json();
        console.log(json); 
        setRestMenu(json.data)
    };
    return(RestMenu);
}

export default useRestaurantmenu;