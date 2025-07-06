const parent = React.createElement("div",
    {id : "parent"},
    React.createElement("div",
        {id : "child"},
        React.createElement("h1", {}, "Hii... I am tag H1")
    )
);

// const parent1 = React.createElement("div",// Nested HTML structure using [].
//     {id : "parent"},
//     React.createElement("div",
//         {id : "child"},
//         [React.createElement("h1", {}, "I am H1"), React.createElement("h2", {}, "I am H2")]
//     )
// );



// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World using react!");// Takes three args..1. element...2. obj...3. what we have to print
const root1 = ReactDOM.createRoot(document.getElementById("root"));//Creates a root using DOM. roo1 is connected to root using getElementById.

root1.render(parent);// Renders everything inside root1 that we created earlier
// console.log(parent);

//{} -> is used to give attributes to our element... any number of attr.