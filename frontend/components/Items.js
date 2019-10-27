import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;
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

class Items extends Component {
  render () {
    return (
      <Center>
        <p>Items!</p>
          {/* Only child of Query Component must be a function */}
        <Query query={ALL_ITEMS_QUERY}>
          { ({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error: {error.message}</p>
            return <ItemsList>{data.items.map(item => <p key={item.id}>{item.title}</p>)}</ItemsList>;
          } }
        </Query>
      </Center>
    );
  }
}

export default Items;