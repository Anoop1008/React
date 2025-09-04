const User = (prop) => {
    return (
        <div className="user-card">
            <h1>Name : {prop.name}</h1>
            <h2>Location : {prop.Location}</h2>
            <h3>Contact : anoop.08_</h3>
        </div>
    );
};

export default User;