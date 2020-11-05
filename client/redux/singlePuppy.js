// this is what fires off the thunk request and renders things on the page

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPuppies } from './index.js';

export class SinglePuppy extends Component {
  async componentDidMount() {
    //this.props.getPuppies comes from the mapDispatch func below
    await this.props.getPuppies();
  }

  render() {
    return (
      <div>
        {
          // place some components that render some stuff in here
        }
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    puppies: state.puppies,
  };
};

const mapDispatch = (dispatch) => {
  return {
    // "getPuppies:" below can be called whatever we want! fetchPuppies comes from redux/index.js
    getPuppies: () => dispatch(fetchPuppies()),
  };
};

export default connect(mapState, mapDispatch)(SinglePuppy);
