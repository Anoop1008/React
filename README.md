# Namaste react..

# Parcel
- Dev build (Creates)
- Local server (hosts app)
- Refreshing our page automatically (HMR - Hot Module Replacement)
- HMR updates our given texts and given title from itsel,
    - We do not need to run "npx parcel index.html" again and again.

- Parcel uses File watching algorithm to do HMR, which is written in c++.
- By doing so... The build in time will reduce because parcel is doing caching.
- Image optimization

# JSX
- JSX is not HTML inside Js.
- JavaScript Syntax or JavaScript Like Syntax.
- JSX, REACT AND HTML... All are different.
- We can create React element using core react as well as using jsx syntax.
- JSX syntax in more human friendly and readable

# Difference in working of react core and JSX...
- const heading = React.createElement(
    "h1", 
    {id : "heading"}, 
    "Namaste React"
);
- In above code which is core react code....
    => React.createElement gives => React Element which is an Js Obj which is then rendered as => HTML element using root.render



- const jsxHeading = <h1 id = "heading"> Namaste React </h1>
- In this code
    => JSX code converts in using by babel => React.createElement which gives => React Element which is an Js Obj which is then rendered as => HTML element using root.render.
- Just an extra step at starting.



/** As a referece :
 * Header =>
 *  1. Logo
 *  2. Nav items (home , about us, cart)
 * 
 * Body =>
 *  1. Search
 *  2. Restaurant Container 
 *      - Restaurant card
 *          -IMG
 *          - NAME OF RES
 *          - START RATING
 *          - TIME OF DELIVERY
 *          - CUISINES
 * Footer =>
 *  1. Copyright
 *  2. Links
 *  3. Address
 *  4. Contact 
 */




//Important

# There are two types of export and import
1. default export import
 - export default name_of_component
 - import name_of_component from component_file_name (path)

2. named export import(if we want to export more than 1 thing from a file)
 - export const = ....... (anything)
 - import {component_file_name} from "../component_file_name(path)"

 # Two types of routing techniques
 1. Client side routing -> When by clicking a button, the button just fetches the data from other component that is already presen in our code in some another file.

 2. Server side routing -> When by clicking a button, the button refers to some api and fetches the data from there through a particular link.