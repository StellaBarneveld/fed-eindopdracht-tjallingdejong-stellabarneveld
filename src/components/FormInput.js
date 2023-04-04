import React from "react";

class FormInput extends React.Component {
  state = {
    quote: "",
    image: ""
  };

  addValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addNewQuote = e => {
    e.preventDefault();
    const newquote = {
      id: 4,
      quote: this.state.quote,
      image: this.state.image
    };
    this.props.newQuote(newquote);
  };

  render() {
    const { quote, image } = this.state;
    return (
      <div>
        <form onSubmit={this.addNewQuote}>
          <input
            type="image"
            name="image"
            onChange={this.addValue}
          />
          <textarea
            type="text"
            name="quote"
            onChange={this.addValue}
          />
          <button>add quote</button>
        </form>
      </div>
    );
  }
}

export default FormInput;
