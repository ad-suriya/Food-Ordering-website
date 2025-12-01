import restaurantList from "../Utils/mockdata";
import Rescard from "./Rescard";
const Body=() =>{
  return(
    <div className="body" > 
      <div className="Search">
        Search
      </div>
      <div className="res-contain">
        {restaurantList.restaurants.map((restaurant) => (  <Rescard key={restaurant.info.id} resData={restaurant} /> ))} 
      </div>

    </div>

  )
};
export default Body;