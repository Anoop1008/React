import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);// it is compulsory to call super when we have constructor in class component. It calls the constructor of parent class
    }
//React.Component is parent class of UserClass.

    componentDidMount(){
        console.log("Child Component did mount");
        //API calls (we do API calls here because componentDidMount always runs after the render method which will render all the components ones).
        //Same as useEffect in functional components
    }

    render() {
        return (
            <div className="user-card">
                <h1>Name : {this.props.name}</h1>
                <h2>Location : {this.props.Location}</h2>
                <h3>Contact : anoop.08_</h3>
            </div>
        );
    };
};
//We cannot use this. without using super().

export default UserClass;
//This type of component is called as class based component. It is more complex than functional component. Thats why everyone use functional components