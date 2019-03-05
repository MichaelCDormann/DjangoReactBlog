import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Nav, NavItem} from "react-bootstrap";
import {connect} from "react-redux";
import {getSpecificPost} from "../store/Posts";


class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {
    this.props.getSpecificPost(event.target.id);
  }

  render() {
    return (
      <Nav bsStyle='pills' stacked>
        <h1>Test React Site</h1>
        <hr/>
        {this.props.posts.map((post) => {
          return (
            <NavItem key={post.id} id={post.id} onClick={this.handleClick}>
              {post.title}
            </NavItem>
          )})}
      </Nav>
    );
  }
}

NavMenu.propTypes = {
  posts: PropTypes.array,
  getSpecificPost: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSpecificPost: (id) => dispatch(getSpecificPost(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);