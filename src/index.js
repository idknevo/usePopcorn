import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
// import StarRating from "./StarRating";

// function Test(){
//   const [ movieRating,setMovieRating ] = useState(0);
//   return <>
//   <StarRating color="blue" onSetRating={setMovieRating}/>
//   <p>this movie was rated {movieRating} stars</p>
//   </>
// }

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={11}/>
    <StarRating maxRating={5} messages={["Terrible" , "Bad" , "Okay" , "Good" , "Amazing"]}/>
    <StarRating maxRating={5} className={"test"}/>
    <Test/>
    <StarRating maxRating={5}/> */}
    {/* <StarRating maxRating={10}/>
    <StarRating/> */}
  </React.StrictMode>
);
