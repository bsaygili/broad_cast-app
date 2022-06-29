import React, { Component } from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends Component {
  componentDidMount = () => {
    this.props.fetchStream(10);
  };
  renderActions() {
    const { id } = 10;
    return (
      <>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui red button"
        >
          Delete
        </button>
        <Link to="/" className="ui primary button">
          Cancel
        </Link>
      </>
    );
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title} ?`;
  }

  render() {
    if (!this.props.stream) {
      return <div className="ui active inline loader"></div>;
    }
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[10] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
