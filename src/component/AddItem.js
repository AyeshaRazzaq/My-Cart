import React from 'react';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Pass the name as a string and price as a number
    this.props.AddItem(this.state.productName, parseFloat(this.state.productPrice));
  };

  handleNameChange = (e) => {
    this.setState({ productName: e.currentTarget.value });
  };

  handlePriceChange = (e) => {
    this.setState({ productPrice: e.currentTarget.value });
  };

  render() { 
    return (
      <form className='row' onSubmit={this.handleSubmit}>
        <div className="mb-3 col-4">
          <label htmlFor="inputname" className="form-label fw-bold fs-5">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputname"
            aria-describedby="name"
            name="productName"
            onChange={this.handleNameChange}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="price" className="form-label fw-bold fs-5">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={this.handlePriceChange}
            value={this.state.productPrice}
          />
        </div>  
        <button type="submit" className="btn btn-primary col-1 my-3">
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;
