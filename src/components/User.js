const User = (props) => {
    return (
        <div className="user-card">
            <h1>Name : {props.name}</h1>
            <h2>Location : {props.Location}</h2>
            <h3>Contact : anoop.08_</h3>
        </div>
    );
};

export default User;