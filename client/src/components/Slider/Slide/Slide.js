import React, { Component } from "react";

import classes from "./Slide.module.css";

// import testLogo from "../../../assets/images/indiana-jones-hdclearlogo.png";

class Slide extends Component {
  state = {
    showTitle: false,
    logoUrl: null,
    mobile: false
  };

  componentDidMount() {
    if (window.innerWidth <= 500) {
      this.setState({ mobile: true });
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 500) {
        this.setState({ mobile: true });
      } else {
        this.setState({ mobile: false });
      }
    });
  }

  render() {
    return (
      <div className={classes.SlideContainer}>
        <div className={classes.SlideInfo}>
          {this.props.logoUrl ? (
            <div className={classes.LogoImg}>
              <img src={this.props.logoUrl} alt="" />
            </div>
          ) : (
            <div className={classes.Title}>
              <h1>{this.props.title}</h1>
            </div>
          )}
          {this.props.caption ? (
            <div className={classes.CaptionContainer}>
              <h2 className={classes.Caption}>{this.props.caption}</h2>
            </div>
          ) : (
            <div className={classes.CaptionContainer} />
          )}

          {this.props.overview ? (
            <div className={classes.Overview}>{this.props.overview}</div>
          ) : null}
        </div>
        <img
          alt=""
          className={classes.SliderImage}
          //src={"http://image.tmdb.org/t/p/w780/" + this.props.bgImage}
          src={this.props.bgImage}
        />
      </div>
    );
  }
}

export default Slide;
