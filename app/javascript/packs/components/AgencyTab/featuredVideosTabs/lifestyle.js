import React from 'react';

export default class LifestyleTabContents extends React.Component {
  render() {
    const {
      videos,
      showVideo
    } = this.props;

    const video1 = videos.find(video => video.facebook_id === '889188077900012');
    const video2 = videos.find(video => video.facebook_id === '888730047945815');

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
              <p>Views: 5.2M</p>
            </div>
            <div className='featured-video-video-metric'>
              <img src='/assets/agency/metric-icon-2.svg' />
              <p>Production time: 2 days</p>
            </div>
            <div className='featured-video-video-metric'>
              <img src='/assets/agency/metric-icon-3.svg' />
              <p>
                Our favourite comment:
                As a trans man (FTM) in the LGBT community I really love you showcased her accomplishments
                and stuff before you said she was trans! Goes to show that trans
                people don't have to be know for ONLY being trans ya know?
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
