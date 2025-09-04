import { useEffect, useState } from "react";
import Shimmer from "./src/components/Shimmer";
import { useParams } from "react-router-dom";
import { menu_API } from "./src/config/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    useEffect(() => {
        fetchMenu();
    },[]);

        const fetchMenu = async () => {
            const data = await fetch(
               menu_API + resId
            );
        
            const json = await data.json();
            setResInfo(json.data);
        };

        if(resInfo === null) return <Shimmer />;

        const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

        const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


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