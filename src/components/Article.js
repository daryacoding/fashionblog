import React from "react";

//create the component
export default function Article(props) {
    return (
        <div className="article">
            <h5 className="article-title">{props.title}</h5>
            <img src={props.img} className="article-img-top" alt={props.alt} />
            <p className="article-text">{props.text}</p>
        </div>
        );
}