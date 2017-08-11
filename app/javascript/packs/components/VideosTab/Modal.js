import React from 'react';
import ReactModal from 'react-modal';
import FacebookPlayer from 'react-facebook-player';
import { modalStyles } from './constants';
import facebookAppId from './facebookAppId';

export default class Modal extends React.PureComponent {
  render() {
    const { videoId, onClose } = this.props;


    return (
      <ReactModal
        isOpen={!!videoId}
        contentLabel="Modal"
        onRequestClose={onClose}
        style={modalStyles}
        className='react-modal'
      >
        {
          !!videoId
          ? (
              <FacebookPlayer
                appId={ facebookAppId() }
                videoId={ videoId }
                id={ `facebook-player-${videoId}` }
              />
          )
          : null
        }
      </ReactModal>
    );
  }
}
