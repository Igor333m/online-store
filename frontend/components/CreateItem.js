import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import ggl from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0
  }

  handleChange = (e) => {
    const { name, type, value} = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  }

  render() { 
    return (
      <Form>
        <fieldset>
          <label htmlFor="title">
            Title
            <input
            type="text"
            id="title"
            name="title"
            placeholder="title"
            required
            value={this.state.title}
            onChange={this.handleChange} />
          </label>
          <label htmlFor="price">
            Price
            <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            required
            value={this.state.price}
            onChange={this.handleChange} />
          </label>
          <label htmlFor="description">
            Description
            <textarea
            id="description"
            name="description"
            placeholder="Enter A Description"
            required
            value={this.state.description}
            onChange={this.handleChange} />
          </label>
        </fieldset>
      </Form>
    );
  }
}
 
export default CreateItem;