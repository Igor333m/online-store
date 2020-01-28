import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import Item from './Item';

// Gets ID from the url ID
const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id,
      title,
      description,
      price,
      largeImage
    }
  }
`;

class SingleItem extends React.Component {
  render() { 
    return ( 
      <Query query={SINGLE_ITEM_QUERY} variables={{
        id: this.props.id
      }}>
        {({error, loading, data}) => {
          if (error) return <Error error={error} />
          if (loading) return <p>Loading!!!</p>
          if (!data.item) return <p>No Item Found for {this.props.id}</p>
          console.log(data)
          return <Item item={data.item}></Item>
        }}
      </Query>
    );
  }
}
 
export default SingleItem;