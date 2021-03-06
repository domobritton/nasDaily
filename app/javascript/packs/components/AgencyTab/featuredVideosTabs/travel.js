import React from 'react';

export default class TravelTabContents extends React.Component {
  render() {
    const {
      videos,
      showVideo
    } = this.props;

    const video1 = videos.find(video => video.facebook_id === '844086875743466');
    const video2 = videos.find(video => video.facebook_id === '818718828280271');

    return (
      <div className='nd-agency-featured-video-tab-content'>
        <div className='nd-agency-featured-video-tab-video-item'>
          <div className='featured-video-video-player'>
            <div
              className="tile"
              onClick={() => showVideo(video1.facebook_id)}
              onKeyPress={(e) => { e.key === 'Enter' && showVideo(video1.facebook_id) }}
            >
              <div className="tile__media">
                <img
                  className="tile__img"
                  data-id={video1.facebook_id}
                  src={video1.full_picture}
                  alt={video1.title}
                />
              </div>
              <div
                className="tile__details"
              >
                <div className="tile__title" />
              </div>
            </div>
          </div>
          <div className='featured-video-video-metrics-container'>
            <div className='featured-video-video-metric'>
              <img src='/assets/agency/metric-icon-1.svg' />
              <p>Views: 532K</p>
            </div>
            <div className='featured-video-video-metric'>
              <img src='/assets/agency/metric-icon-2.svg' />
              <p>Production time: 1.5 hours</p>
            </div>
            <div className='featured-video-video-metric'>
              <img src='/assets/agency/metric-icon-3.svg' />
              <p>
                Our Favourite comment: I blame you Nas for what I'm about to do next!!! [get a credit card]
              </p>
            </div>
          </div>
        </div>
        <div className='nd-agency-featured-video-tab-video-item'>
          <div className='featured-video-video-metrics-container'>
            <div className='featured-video-video-metric'>
              <img src='/assets/agency/metric-icon-1.svg' />
              <p>Something about metric 1</p>
            </div>
            <div className='featured-video-video-metric'>
              <img src='/assets/agency/metric-icon-2.svg' />
              <p>Something about metric 2</p>
            </div>
            <div className='featured-video-video-metric'>
              <img src='/assets/agency/metric-icon-3.svg' />
              <p>Something about metric 3</p>
            </div>
          </div>
          <div className='featured-video-video-player'>
            <div
              className="tile"
              onClick={() => showVideo(video2.facebook_id)}
              onKeyPress={(e) => { e.key === 'Enter' && showVideo(video2.facebook_id) }}
            >
              <div className="tile__media">
                <img
                  className="tile__img"
                  data-id={video2.facebook_id}
                  src={video2.full_picture}
                  alt={video2.title}
                />
              </div>
              <div
                className="tile__details"
              >
                <div className="tile__title" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
