import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Body.css';
import {connect} from "react-redux";
import Gist from "./Gist";
import Markdown from "markdown-to-jsx";

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {windowHeight: 0};

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ windowHeight: window.innerHeight});
  }

  render() {
    if (!this.props.selectedPost)
      return null;
    else
      return (
        <div className="post-container">
          <h1>{this.props.selectedPost.title}</h1>
          <Markdown options={{overrides: {gist: Gist }}}>{this.props.selectedPost.body}</Markdown>
        </div>
      );
  }
}

Body.propTypes = {
    selectedPost: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    selectedPost: state.selectedPost
  }
};

export default connect(mapStateToProps)(Body);