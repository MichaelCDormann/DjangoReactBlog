import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Body.css';
import logo from "../logo.svg";
import {connect} from "react-redux";
import ReactMarkdown from "react-markdown";

class Body extends Component {
  render() {
    if (!this.props.selectedPost)
      return null;
    else
      return (
        <div className="post-container">
          <h1>{this.props.selectedPost.title}</h1>
          <ReactMarkdown source={this.props.selectedPost.body}/>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum fermentum turpis, non luctus ligula rhoncus non. In hac habitasse platea dictumst. Morbi gravida consequat lorem. Fusce venenatis laoreet arcu auctor congue. Aliquam sed tellus dolor. Nunc elementum ornare nisi sit amet lobortis. Praesent ultrices tempor sem, et fringilla arcu efficitur id. Etiam cursus tempus interdum. Vestibulum placerat commodo urna eu congue. Integer luctus dapibus arcu, sed volutpat nulla semper in.</p>

          <p>Praesent rutrum tristique elit, cursus tincidunt mi lobortis sed. Duis pharetra orci nec elit blandit porttitor. Integer consectetur mollis metus ut feugiat. Morbi mollis tempor volutpat. Pellentesque non ullamcorper dui. Suspendisse quam ligula, viverra at lacinia sit amet, placerat sit amet lorem. Curabitur sit amet orci lectus. Cras tristique, libero quis hendrerit dapibus, purus est porta lectus, sed bibendum augue leo ut mauris. Phasellus condimentum dui ipsum, feugiat ornare tellus pharetra ut. Integer ex sem, consequat eu neque nec, tristique efficitur neque. Maecenas interdum congue risus, quis lobortis dui fringilla at. In ac velit ullamcorper, pulvinar nunc eget, ullamcorper eros. Quisque condimentum fringilla auctor. Nulla consectetur feugiat ligula, sed facilisis felis bibendum sit amet. Donec orci elit, molestie et dui vitae, tincidunt fringilla arcu.</p>

          <p>Cras fermentum pellentesque rutrum. Nam eu felis id lectus venenatis consequat. Mauris viverra consectetur erat non vehicula. Quisque eu tincidunt risus. Suspendisse non ante in augue elementum dignissim eu eget nunc. Aliquam semper neque est, eget egestas turpis iaculis non. Nunc hendrerit velit diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt semper eleifend. Nam scelerisque augue at diam sodales efficitur. Proin tincidunt vulputate sapien, vitae iaculis dolor ultrices ac. Fusce sodales arcu eu nunc volutpat, ac tempus nibh mattis. Etiam gravida laoreet enim vitae dapibus.</p>

          <p>Vestibulum et posuere ligula. Mauris aliquam ex vitae est finibus malesuada in id mauris. Donec lobortis finibus tellus vel blandit. Sed tempus leo at nisi ultricies, eget mollis nisi ultricies. Donec pellentesque ipsum at quam hendrerit sagittis. Pellentesque sed risus metus. Sed laoreet augue non dolor maximus tempor. Maecenas ultrices, sem eu suscipit tincidunt, justo massa viverra leo, nec eleifend nibh nisl at magna. Curabitur varius leo dapibus nibh consectetur, nec accumsan ante pellentesque. Nam purus libero, pulvinar ut velit et, dictum molestie augue. Sed posuere sagittis metus id porta. Aliquam imperdiet metus a magna placerat, id congue nibh tempus. Proin pharetra sem in convallis convallis. Suspendisse et sapien a ipsum sagittis aliquet non nec dui. Ut erat augue, consectetur non mauris quis, viverra hendrerit leo. Mauris ultricies interdum purus et fringilla.</p>

          <p>Etiam porta nisl massa, a ultricies eros tempus id. Duis massa lacus, sollicitudin faucibus orci ultrices, dapibus interdum mi. Sed lectus mauris, placerat et felis vel, egestas aliquam odio. Curabitur ut lorem egestas, tempor nisi et, egestas turpis. Phasellus scelerisque lacus sit amet turpis finibus porta. In auctor dapibus eros, quis suscipit dui sodales vel. Maecenas eleifend porttitor faucibus. Fusce fringilla tellus nisi, nec suscipit ante tempus eu. Cras ipsum ligula, lobortis ac libero ut, faucibus aliquam orci. Donec urna mauris, tristique dictum euismod eu, consequat id ligula. Nullam euismod aliquam magna nec maximus. Aenean id ante quis ligula ullamcorper sollicitudin eget sit amet justo.</p>
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