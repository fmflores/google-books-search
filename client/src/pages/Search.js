import React from "react";
import Book from '../components/Book';

class Search extends React.Component {
    state = {
        books: [],
        search: ''
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    books: data.items
                });
            });
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h4>Book Search</h4>
                    <p>Book</p>
                    <form>
                        <input
                            type="text"
                            id="search-input"
                            name="search"
                            onChange={this.handleInputChange}
                            value={this.state.search}
                            placeholder="Search for a book here"
                            style={{"width":"100%"}}
                        />
                        <button style={{ float: "right", marginTop: 10 }} className="btn btn-success" onClick={this.handleSubmit}>Search</button>
                    </form>

                    <div className="row">
                    {this.state.books.map((book) => (
                        <Book
                            key={book.id}
                            _id={book.id}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            link={book.volumeInfo.infoLink}
                        />
                    ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;