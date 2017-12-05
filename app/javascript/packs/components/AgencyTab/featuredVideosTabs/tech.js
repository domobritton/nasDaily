import React from 'react';

export default class TechTabContents extends React.Component {
  render() {
    const {
      videos,
      showVideo
    } = this.props;

    const video1 = videos.find(video => video.facebook_id === '932626440222842');
    const video2 = videos.find(video => video.facebook_id === '892342700917883');

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
              <p>Views: 173K</p>
            </div>
            <div className='featured-video-video-metric'>
              <img src='/assets/agency/metric-icon-2.svg' />
              <p>Production time: 2 days</p>
            </div>
            <div className='featured-video-video-metric'>
              <img src='/assets/agency/metric-icon-3.svg' />
              <p>
                Our favourite comment: Thanks you Dolapo for representing Nigeria well.
                God bless you.. thanks Nas for restoring hope that there’s still good in this world.
              </p>
            </div>
          </div>
        </div>
        <div className='nd-agency-featured-video-tab-video-item'>
          <div className='featured-video-video-metrics-container'>
            <div className='featured-video-video-metric'>
              <img src='/assets/agency/metric-icon-1.svg' />
              <p>Views: 12M views</p>
            </div>
            <div className='featured-video-video-metric'>
              <img src='/assets/agency/metric-icon-2.svg' />
              <p>Production time: 2 hours</p>
            </div>
            <div className='featured-video-video-metric'>
              <img src='/assets/agency/metric-icon-3.svg' />
              <p>
                Our favourite comment: Take my money Takuro😍 How can I buy this device?
                This is my most favorite video Nas Daily. Well done👊
              </p>
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
