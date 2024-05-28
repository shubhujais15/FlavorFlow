
const ItemList = ({items}) => {
    console.log(items);
     return(
          <div>
            {items.map((item) => (
                <div key={item.card.info.id} 
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    
                    <div className="w-10/12">
                    <div className="py-2">
                        <span className="text-lg">{item.card.info.name}</span>
                        <span>-- ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div> 
                <div className="w-2/12 p-4">
                    <img className="w-full rounded-lg m-2" 
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId}>
                    </img>
                    <button className="ml-6 p-1 bg-black text-white shadow-lg w-12 rounded-md text-sm ">Add+</button>
                    </div>
                </div> 
            ))}
          </div>
    )
}
export default ItemList;



   