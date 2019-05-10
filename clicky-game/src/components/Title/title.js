import React from "react";
import "./title.css";

function Title (props) 
{ return <p className="title">{props.children}</p>;
}
export default Title;