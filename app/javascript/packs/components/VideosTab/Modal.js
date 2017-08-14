import React from 'react';
import ReactModal from 'react-modal';
import FacebookPlayer from 'react-facebook-player';
import { findIndex } from 'lodash';
import { modalStyles } from './constants';
import facebookAppId from './facebookAppId';
import { Loader } from 'react-loaders';

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

  onPlayerFinished = () => {
    const { videos } = this.props;
    const { videoId, player } = this.state;

    let currentVideoIndex = findIndex(videos, (v) => v.facebook_id === videoId);

    if (currentVideoIndex >= videos.length - 1) { return }
    const nextVideoId = videos[currentVideoIndex + 1].facebook_id;

    this.setState({videoId: null}); // unmount facebook video player before playing next video
    this.setState({videoId: nextVideoId});
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
                onFinishedPlaying={this.onPlayerFinished}
              />
          )
          : null
        }
      </ReactModal>
    );
  }
}
