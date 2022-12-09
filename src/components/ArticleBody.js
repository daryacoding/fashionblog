export default function ArticleBody(props) {
    console.log("this is props:", props);
    return (
        <div className="article-body">
        <h5 className="article-title">{props.title}</h5>
        <p className="article-text">{props.text}</p>
        </div>
    );
}