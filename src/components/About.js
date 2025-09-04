import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Our Website</h1>
            <h2>It is build using react and bundlers like parsel and it is on git also</h2>
            <User name = {"Anoop using prop"} Location = {"Chandigarh using prop"}/>
            <UserClass />
        </div>
    );
};

export default About;