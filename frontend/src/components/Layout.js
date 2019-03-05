import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Layout.css';
import NavMenu from "./NavMenu";
import Body from "./Body";
import arrow_icon from '../assets/arrow_icon2.png';
import { connect } from "react-redux";
import { getPostsData } from "../store/Posts";


class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {navVisible: false};

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({navVisible: true}), 50);

    this.props.getPostsData();
  }

  handleClick(event) {
    this.setState({navVisible: !this.state.navVisible})
  }

  render() {
    return (
      <div className='root-container'>
        <div className={this.state.navVisible? 'main-nav show' : 'main-nav'}>
          <NavMenu/>
        </div>
        <div className='rectangle'>
          <div className={this.state.navVisible? 'circle rotate' : 'circle'} onClick={this.handleClick}>
            <img src={arrow_icon}/>
          </div>
        </div>
        <div className='main-content'>
          <Body/>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  getPostsData: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPostsData: () => dispatch(getPostsData())
  }
};

export default connect(null, mapDispatchToProps)(Layout);