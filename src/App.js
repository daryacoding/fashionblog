import Header from "./components/Header";
import Article from "./components/Article"
import Footer from "./components/Footer";
import articlesArr from "./data"

const articles = articlesArr.map((ele, idx) => {
    return (
        <Article 
            key={idx}
            title={ele.title}
            img={ele.img}
            text={ele.text}
        />
    );
});

console.log(articles)

export default function App() {
    return (
        <div className="App">
            <Header />
            <section className="articles">{articles}</section>
            <Footer />
        </div>
    );
}