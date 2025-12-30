import { RES_CARD_LOGO_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#e8d8d8ff",
};

const RestaurantCard = ({ resData }) => {
    const {
        cloudinaryImageId, 
        name,
        cuisines,
        avgRating,
        sla,
        costForTwo
    } = resData;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo"
                alt="res-logo"
                src={RES_CARD_LOGO_URL + cloudinaryImageId}
            />
            <h3 className="name-of-res">{name}</h3>
            <div className="cuisines">{cuisines.join(", ")}</div>
            <div className="about-res">
                <ul>
                    <li>{avgRating}</li>
                    <li>{sla.slaString}</li>
                    <li>{costForTwo}</li>
                </ul>
            </div>
        </div>
    );
};

export default RestaurantCard;