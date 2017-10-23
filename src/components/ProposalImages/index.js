import React, { Component } from "react";
import PropTypes from "prop-types";
import { slice } from "lodash";
import { isFileValid } from "./helpers";

class ProposalImages extends Component {
  constructor(props) {
    super(props);

    this.onRemove = this.onRemove.bind(this);
  }

  onRemove(idx) {
    const files = slice(this.props.files);
    files.splice(idx, 1);
    this.props.onChange(files);
  }

  render() {
    const { files, readOnly, policy } = this.props;

    return (
      <div>
        {(files || []).map(({ name, mime, digest, payload, size }, idx) => (
          <div key={digest || idx}>
            <h5>{name}{readOnly ? null : isFileValid({ size, mime }, policy) ? null :  <span className="error">&nbsp;Errored</span> }</h5>
            <div className="attached-image-ct clearfloat">
              <img className="attached-image" alt={name} src={`data:${mime};base64,${payload}`} />
              {readOnly ? null : (
                <a className="attached-image-remove" onClick={() => this.onRemove(idx)} title="Remove image">✖</a>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

ProposalImages.propTypes = {
  files: PropTypes.array.isRequired,
  policy: PropTypes.object,
  readOnly: PropTypes.bool.isRequired,
};

ProposalImages.defaultProps = {
  readOnly: false,
  files: [],
};

export default ProposalImages;