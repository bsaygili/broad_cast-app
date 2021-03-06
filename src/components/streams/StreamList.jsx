import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions/";
import { Link } from "react-router-dom";

class StreamList extends Component {
  componentDidMount = () => {
    this.props.fetchStreams();
  };

  renderAdmin = (stream) => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <div className="ui buttons">
            <Link to={`/streams/edit/${stream.id}`} className="button">
              EDIT
            </Link>
            <Link to={`/streams/delete/${stream.id}`} className="button">
              DELETE
            </Link>
          </div>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.title}
            </Link>

            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link className="ui button violet" to="/streams/new">
            Create Stream
          </Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
