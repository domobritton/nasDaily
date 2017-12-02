import React from 'react';
import ReactModal from 'react-modal';
import FacebookPlayer from 'react-facebook-player';
import { modalStyles } from './constants';
import facebookAppId from '../../util/facebookAppId';

export default class Modal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      player: null,
      videoId: props.videoId
    }
  }

  onPlayerReady = (_id, player) => {
    this.setState({
      player: player,
    });

    player.unmute();
    player.play();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.videoId !== nextProps.videoId) {
      this.setState({ videoId: nextProps.videoId });
    }
  }

  render() {
    const { onClose } = this.props;
    const { videoId } = this.state;

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
                id={ `video-id-${videoId}` }
                onReady={this.onPlayerReady}
              />
          )
          : null
        }
      </ReactModal>
    );
  }
}
