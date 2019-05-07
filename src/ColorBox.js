import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.css';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(()=> this.setState({ copied: false }), 1500);
    })
  }
  render() {
    const { name, background, paletteId, id, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.3;
    return (
      <CopyToClipboard text={ background } onCopy={ this.changeCopyState } >
        <div className="ColorBox" style={{ background }}>
          <div 
            className={`copy-overlay ${copied && "show"}`} 
            style={{ background }} 
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1 className={isDarkColor? "light-text" : "dark-text"}>Copied!</h1>
            <p className={isDarkColor? "light-text" : "dark-text"}>{ background }</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor? "light-text" : "dark-text"}>{name}</span>
            </div>
            <button className={`copy-button ${isDarkColor? "light-text" : "dark-text"}`}>Copy</button>
          </div>
          {showLink&&(
            <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
              <span className={`see-more ${isDarkColor? "light-text" : "dark-text"}`}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;