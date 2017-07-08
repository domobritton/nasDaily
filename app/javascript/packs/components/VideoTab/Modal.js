import React from 'react';
import ReactModal from 'react-modal';
import { modalStyles } from './constants';

export default class Modal extends React.Component {
  render() {
    const { videoId, onClose } = this.props;

    if (!videoId) { return null }

    return (
      <ReactModal
        isOpen={true}
        contentLabel="Modal"
        onRequestClose={onClose}
        style={modalStyles}
      >
        <div
          className="fb-video"
          data-href={ `https://www.facebook.com/facebook/videos/${videoId}/` }
          data-width={1280}
          data-show-text={false}
          data-autoplay={false}
          style={{ marginLeft: '-2px', maxWidth: 'calc(100% + 4px)' }}
        >
          <div className="fb-xfbml-parse-ignore">
            <blockquote cite={`https://www.facebook.com/facebook/videos/${videoId}/`}>
            </blockquote>
          </div>
        </div>
      </ReactModal>
    );
  }
}
