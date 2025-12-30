import Shimmer from "./src/components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./src/utils/useRestaurantMenu";

const RestaurantMenu = () => {

        const {resId} = useParams();
        
        const resInfo = useRestaurantMenu(resId);

        if(resInfo === null) return <Shimmer />;

        const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;    

        const {itemCards}= resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (resInfo === null) ? <Shimmer /> : (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <div className="sexy-nigga">
                <ul>
                    {itemCards.map((menu) => 
                        <li key={menu.card.info.id}>
                            {menu.card.info.name} - {" Rs. "}{menu.card.info.price / 100 || menu.card.info.defaultPrice / 100}</li>
                        )}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;