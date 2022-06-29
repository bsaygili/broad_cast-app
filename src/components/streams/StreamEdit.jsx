import _ from "lodash";
import React, { Component } from "react";
import { fetchStream, editStream } from "../../actions/";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {
  componentDidMount = () => {
    this.props.fetchStream(9);
  };

  onSubmit = (formValues) => {
    this.props.editStream(9, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div className="ui active inline loader"></div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { stream: state.streams[9] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
