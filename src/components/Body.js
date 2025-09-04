import RestaurantCard from "./RestaurantCard";
import resList from "../config/resData"; // No use of now
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {

    const[listOfRestaurants, setListOfRestaurants] = useState([]); // State variable for rendering
    const[filteredRestaurant, setfilteredRestaurant] = useState([]); // State variable for search
    
    const [searchText, setsearchText] = useState(""); //State variable
    
    //If no dependency array ==> useEffect is called on every render.
    //If dependency array is empty = [] ==> useEffect is called on initial render only(just once)
    //If dependency array is [btnName] ==> useEffect us called everytime btnName changes. 
    useEffect(() => {
        fetchData();
    }, []);
 
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.701567&lng=76.765273&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);        
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);        
    };

    //Conditional rendering :-
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body"> 
            <div className="filter"> 
                <div className="search">
                    <input type="text" className="search-box" value = {searchText} onChange={(e) => {setsearchText(e.target.value)}}/>
                    <button className="search-button" onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setfilteredRestaurant(filteredRestaurant);
                            }}
                        >
                            Search
                        </button>
                </div> 
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating >= 4.3);
                    setfilteredRestaurant(filteredList);  
                    }}
                >
                Top Rated Restaurants
                </button>
            </div>
            <div className="res-container"> 
                {filteredRestaurant.map((restaurant) => (
                   <Link key = {restaurant.info.id} to = {"/restaurant/" + restaurant.info.id}><RestaurantCard resData={restaurant.info} /></Link>
                ))}
            </div>        
        </div>
    );
};

export default Body;