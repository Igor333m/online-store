import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

class Deleteitem extends Component {
  render() { 
    console.log(this.props.id);
  return (
    <Mutation
      mutation={DELETE_ITEM_MUTATION}
      variables={{ id: this.props.id}}
      update={this.update}  
    >
      { (deleteItem, { error }) => (
        <button onClick={ () => {
          if (confirm('Are you sure you want to delete this item?')) {
            deleteItem();
          }
        }}>{this.props.children}</button>
      )}
    </Mutation>
  );
  }
}
 
export default Deleteitem;