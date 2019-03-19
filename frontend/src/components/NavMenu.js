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
      <div>
        <h1>Stuff I Do For Fun</h1>
        <hr/>
        <Nav bsStyle='pills' stacked>
          {this.props.posts.map((post) => {
            return (
              <NavItem key={post.id} id={post.id} onClick={this.handleClick} active={this.props.selectedPost && this.props.selectedPost.id === post.id}>
                {post.title}
              </NavItem>
            )})}
        </Nav>
      </div>
    );
  }
}

NavMenu.propTypes = {
  posts: PropTypes.array,
  selectedPost: PropTypes.object,
  getSpecificPost: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    selectedPost: state.selectedPost
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSpecificPost: (id) => dispatch(getSpecificPost(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);