import React from "react";

export default function ArticleImage(props){
    return <img src={props.img} className="article-img-top" alt={props.alt} />;
}