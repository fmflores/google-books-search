import React from "react";

class Book extends React.Component {
  handleSave = (event) => {
    event.preventDefault();
    const { title, authors, description, image, link, _id } = this.props;


    console.log({ title, authors, description, image, link, _id });

    fetch("/api/books", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, authors, description, image, link, _id })
      
    }).then(data => {
            console.log('Book saved.');
        })
        document.getElementById("btn-save").style.visibility = "hidden";
  }
  
  render() {
    return (
      <div className="card col-4">
        <img className="card-img-top" src={this.props.image} alt={this.props.title} />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">
            {this.props.description}
          </p>
          <a className="btn btn-primary" href={this.props.link} target="_blank"  rel="noopener noreferrer">
            More Info
          </a>
          <button type="button" className="btn btn-success" id="btn-save" onClick={this.handleSave}>Save Book</button>
        </div>
      </div>
    );
  }
}

export default Book;
