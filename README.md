A Online Food Delivery Website Using React...

<h1>FlavorFLow ~ Streamline Food Delivery</h1>

# Run code
- npm start

# Config Driven UI
- The api that we fetch through swiggy.com is based on config driven UI that means the data is not same for other cities like if in Bengaluru there is 50% discount on KFC that doesn't mean other cities have same discount ...The data that come from backend the crousel(Rest.. Card Data) changed based on data that comes..

# HOOKS
    (Normal JS utility Function)
  - useState() -- State Variable in react
  - useEffect()

  - useState is use to modify the variable by rendering the whole component (Body) again but it refresh the only part that seems changed using useState variable

  - useEffect is consisting of two parameters one is a function and a array(dependency list). 
  - useEffect will render the page after the initial component body is rendered.

# Shimmer UI
 - We create shimmer as a duplicate UI that renders first when website loads after that the fetched api renders data on page that replace shimmer.
 - In simple words it is we Loads fake page before load api datas.

 # react-router-dom
  - helps to render many pages through a link
  - In createbrowserrouter we add path of page and element that we have to shown on that page
  - outlet takes the element according to path that we select

   # useParams()
  - It is used in Restaurantmenu.js to pass path id to resid in App.js which is currently open in browser

 # Components
  - Function Based Components -- It is a funcn that returns a piece of jsx
  - Class Based Components -- It is a class which extends react.component and it has render() method to return a piece of jsx
  - React.Component come from by importing react
  - componentDidMount use for api calls in class based components
  - First constructor then return renders after that componentDidMount renders


 # Class Based Component Lifecycle Diagram
 ![LifeCycle-Diagram](Class-based-component.png)


 # Control & UnControlled Components  (Lifting Step Up)
  - A component that is controlled by its parent component to perform an action called Controlled component

 # props Drilling

 # Redux
 - Redux is a state management library that helps to manage the state of the application
 - It works on data layer which syncs to UI layer
 - It is mandatory for large scale application
 - It is a library
 - Redux offers easy debugging
 - React-Redux and Redux-Toolkit are two libraries of redux
 - It has slices where each slice is connected to each component
 - ![Redux- Modification & Updation Diagram](Redux.png)

 # Redux-Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - Slice(cart slice)
  - Dispatch(action)
  - Selector

 # Types of testing(Developer)
 - Unit Testing
 - Integration Testing
 - End to End Testing - e2e Testing