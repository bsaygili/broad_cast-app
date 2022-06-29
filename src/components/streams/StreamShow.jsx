import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from "flv.js";

class StreamShow extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount = () => {
    const id = 10;
    this.props.fetchStream(id);
    this.buildPlayer();
  };
  componentDidUpdate = () => {
    this.buildPlayer();
  };
  componentWillUnmount = () => {
    this.player.destroy();
  };

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    const id = 10;
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div className="ui active inline loader"></div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video ref={this.videoRef} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[10] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
