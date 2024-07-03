const Restaurantcards = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,locality,avgRating} = resData?.info;
    return(
      <div className="md:mx-8 mx-4 my-6 p-2 h-[280px] md:h-[305px] w-[172px] md:w-[220px] rounded-xl md:rounded-lg bg-slate-50 transition-transform duration-500 transform scale-100 hover:scale-105">
        <img className="h-[100px] w-[132px] md:h-32 md:w-48 mx-[12px] md:mx-1.5 mt-2 rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
        <h5 className="ml-[12px] md:ml-1.5 mt-0.5 text-sm font-bold">{name}</h5>
        <p className="ml-[13px] md:ml-2.5 mt-1 text-sm">{cuisines.join(", ")}</p>   
        <p className="ml-[13px] md:ml-2.5 text-sm">{locality}</p>
        <p className="ml-[13px] md:ml-2.5 text-sm">{avgRating}</p>
      </div>
    )
  };

  // export const  withPromotedLabel =(Restaurantcards) => {
  //   return(props) => {
  //     return(
  //     <div>
  //     <label>Promoted</label>
  //     <Restaurantcards {...props} />
  //     </div>
  //   )
  // }}
   
  export default Restaurantcards;