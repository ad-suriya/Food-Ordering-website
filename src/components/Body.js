import { useEffect, useState } from "react";
import Rescard from "./Rescard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restaurantList, setrestaurantlist] = useState([]); // ✅ Fix 1
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0697174&lng=80.2432839&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setrestaurantlist(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants); // ✅ Fix 2
  }
if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="Filter">
        <button
          className="filter"
          onClick={() => {
            const filteredList = restaurantList.filter( // ✅ Fix 3
              (res) => res.info.avgRating > 4.0
            );
            setrestaurantlist(filteredList); // ✅ Fix 4
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="Search">
        <input 
          type ="text" 
          className = "search-box"
        />
        <button>Search</button>
      </div>
      </div>
      <div className="res-contain">
        {restaurantList.map((restaurant) => ( // ✅ Fix 5
          <Rescard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;