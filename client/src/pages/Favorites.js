import React from "react";
import Book from "../components/Book";

class Favs extends React.Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        this.setState({
          savedBooks: data
        });
      });
  }

  render() {
    return (
        <div className="row">
        {this.state.savedBooks.map((book) => (
            <Book
                key={book._id}
                id={book._id}
                title={book.title}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
            />
        ))}
        </div>
    )
  }
}

export default Favs;
