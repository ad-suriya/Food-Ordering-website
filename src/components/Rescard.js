import { CDN_URL } from "../Utils/constant";
const Rescard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData.info;
  
  return (
    <div className="res-card">
      <img 
        alt="res-logo" 
        className="res-Logo" 
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default Rescard;