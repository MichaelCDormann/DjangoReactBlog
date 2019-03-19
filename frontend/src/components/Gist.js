import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Gist extends Component {
	constructor(props) {
		super(props);

		this.iframeRef = React.createRef();
	}


	componentDidMount() {
    this.updateIframe();

		// this.iframeRef.onload = () => {
		// 	this.iframeRef.contentWindow.postMessage('hello', "*");
		// }
  }

  componentDidUpdate(prevProps) {
    this.updateIframe();
  }

  updateIframe() {
  	const url = `https://gist.github.com/${this.props.url}.js`;

    // const { id, file } = this.props;

    const iframe = this.iframeRef;

    //let doc = iframe.document || iframe.contentDocument || iframe.contentWindow.document;
	  let document = iframe.contentDocument;

	  const script = `<script type="text/javascript" src="${url}"></script>`;
	  const content = `<html><head><base target="_parent"></head><body>${script}</body></html>`;
		document.open();
		document.writeln(content);
		document.close();
    // const gistScript = `<script type="text/javascript" src="${url}"></script>`;
    // const styles = '<style>*{font-size:12px;}</style>';
    // const elementId = file ? `gist-${id}-${file}` : `gist-${id}`;
    // const resizeScript = `onload="parent.document.getElementById('${elementId}').style.height=document.body.scrollHeight + 'px'"`;
    // const iframeHtml = `<html><head><base target="_parent">${styles}</head><body ${resizeScript}>${gistScript}</body></html>`;
		//
    // doc.open();
    // doc.writeln(iframeHtml);
    // doc.close();
  }

  render() {
    return (
      <iframe width='100%' height='100%' frameBorder={0} ref={(f) => this.iframeRef = f}/>
    );
  }
}

export default Gist;