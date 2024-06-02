import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body.js"
import Header from "./components/Header.js"
import About from "./components/About.js"
import Contact from  "./components/Contact.js"
import Error from "./components/Error.js";
import Restaurantmenu from "./components/Restaurantmenu.js";
import { createBrowserRouter , RouterProvider ,Outlet} from  'react-router-dom'
import { Provider } from "react-redux";
import appStore from "./utils/appStore.jsx";
import Cart from "./components/Cart.jsx";

const FinalApp = () => (
  <div className="container">
  <Provider store={appStore}>  {/* Dispatch action */}
    <Header />
    <Outlet /> 
    {/* <Body /> */}
  </Provider>
  </div>
);

const appRouter = createBrowserRouter([
  { path: "/",                //First it loads the FinalApp & when there is outlet then it replace the the children with it & loads it
    element: <FinalApp/>,
    children:[
      { path: "/",            //if my path is / then load my element <Body />
        element: <Body/> 
      },
      { path: "/about",            //if my path is about then load my element <About/>
        element: <About/> 
      },
      { path: "/contact",            //if my path is /contact then load my element <Contact/>
        element: <Contact/> 
    },
    {
      path: "/restaurant/:resid",
      element: <Restaurantmenu/>
    },
    {
      path: "/cart",
      element: <Cart/>
    }
    ],
    errorElement: <Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FinalApp />);
root.render(<RouterProvider router={appRouter}/>);
