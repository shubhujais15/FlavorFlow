const Restaurantcards = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,locality,avgRating} = resData?.info;
    return(
      <div className="restaurantCardItems">
        <img className="restPic" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}></img>
        <h5>{name}</h5>
        <p>{cuisines.join(", ")}</p>   
        <p>{locality}</p>
        <p>{avgRating}</p>
      </div>
    )
  }

  export default Restaurantcards;