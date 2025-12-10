import { useState } from "react";
import Rescard from "./Rescard";
import restlist from "../Utils/mockdata";
// const restaurantList2 = {
//   "restaurants": [
//     {
//       "info": {
//         "id": "16227",
//         "name": "Pizza Hut",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/435f6aa7-b0ba-428c-9905-17ce31f32604_16227.JPG",
//         "locality": "Anna Nagar",
//         "areaName": "Anna Nagar",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Pizzas"
//         ],
//         "avgRating": 3.2
//       }
//     },
//     {
//       "info": {
//         "id": "23741",
//         "name": "McDonald's",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/4062aa93-2a68-44c6-a9b2-58273b6c07c7_23741.JPG",
//         "locality": "Anna Nagar",
//         "areaName": "Anna Nagar",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Burgers",
//           "Beverages",
//           "Cafe",
//           "Desserts"
//         ],
//         "avgRating": 4.4
//       }
//     }
//   ]
// };
const Body=() => {
const [restaurantList,setrestaurantlist] = useState(restlist
);

  return(
    <div className="body" > 
      <div className="Filter">
          <button
            className="filter"
              onClick={() => {
              const filteredList = restaurantList.restaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setrestaurantlist({
                restaurants:filteredList
              });

            }}

            >
            Top Rated Restaurants
          </button>
          
      </div>
      <div className="res-contain">
        {restaurantList.restaurants.map((restaurant) => (  <Rescard key={restaurant.info.id} resData={restaurant} /> ))} 
      </div>

    </div>

  )
};
export default Body;