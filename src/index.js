import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function BookList() {
	return (
		<section className="bookList">
			<Book /> 
			<Book />
			<Book />
			<Book />
		</section>
	);
}

const Book = () => {
	const url =
		"https://m.media-amazon.com/images/I/51sVzc2P-5L._SX258_BO1,204,203,200_QL70_ML2_.jpg";
	const title = "İnsanlığımı Yitirirken";
	const author = "Osamu Dazai";
	return (
		<article className="book">
			<img src={url} alt={title} />
			<h2>{title}</h2>
			<h3>{author}</h3>
		</article>
	);
};

// const Person = () => <h1>Fatih</h1>;
// const Message = () => {
// 	return <h2>Hello</h2>;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
