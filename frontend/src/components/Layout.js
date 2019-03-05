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

    this.state = {
      navVisible: false,
      windowHeight: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);

    setTimeout(() => this.setState({navVisible: true}), 50);

    this.props.getPostsData();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ windowHeight: window.innerHeight});
  }

  handleClick(event) {
    this.setState({navVisible: !this.state.navVisible})
  }

  render() {
    return (
      <div className='root-container'>
        <div className={this.state.navVisible? 'main-nav show' : 'main-nav'} style={{minHeight: this.state.windowHeight}}>
          <NavMenu/>
        </div>
        <div className='rectangle'>
          <div className={this.state.navVisible? 'circle rotate' : 'circle'} onClick={this.handleClick}>
            <img src={arrow_icon}/>
          </div>
        </div>
        <div className='main-content' style={{maxHeight: this.state.windowHeight}}>
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