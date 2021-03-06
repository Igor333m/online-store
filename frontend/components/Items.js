import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';
import Paginaton from './Pagination';
import { perPage } from '../config';

// exported to search items to find deleted item
const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    items(first: $first, skip: $skip, orderBy: createAt_DESC) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

class Items extends Component {
  render () {
    return (
      <Center>
        <Paginaton page={this.props.page}/>
          {/* Only child of Query Component must be a function */}
        <Query query={ALL_ITEMS_QUERY} variables={{
          skip: this.props.page * perPage - perPage,
          first: perPage
        }}>
          { ({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error: {error.message}</p>
            return <ItemsList>
            {data.items.map(item => <Item item={item} key={item.id}></Item>)}
            </ItemsList>;
          } }
        </Query>
        <Paginaton page={this.props.page}/>
      </Center>
    );
  }
}

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6rem;
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
`;

export default Items;
export { ALL_ITEMS_QUERY };