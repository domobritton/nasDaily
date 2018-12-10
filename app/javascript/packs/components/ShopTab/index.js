import React, { Component } from 'react';
import { Line } from 'rc-progress'
import FacebookPlayer from 'react-facebook-player';
import ReactModal from 'react-modal';
import $ from 'jquery';
import classnames from 'classnames';
import { isNull } from 'lodash';
import { modalStyles } from '../VideosTab/constants';
import facebookAppId from '../../util/facebookAppId';
import ShopTabForm from './Form';
import { isMobile } from '../../util/viewportSize';
import { Image } from 'cloudinary-react';
import Header from '../App/Header'

export default class ShopTab extends Component {
    constructor() {
      super()

      this.state = {
        openedModal: false,
        showForm: false,
        showTshirtOnMobile: false,
        percent: null,
        tabOnMobile: 'video'
      }

      this.navigateToSaltyGuys = this.navigateToSaltyGuys.bind(this)
      this.onBuyButtonClick = this.onBuyButtonClick.bind(this)
      this.setPercent = this.setPercent.bind(this);
      // this.shareOnFacebook = this.shareOnFacebook.bind(this);
    }

    navigateToSaltyGuys() {
      const { percent } = this.state;
      if (!percent) { return }

      window.location.href = `http://shop.nasdaily.com/?percentage=${percent}`;
    }

    setPercent(p) {
      const actualPercent = p && p > 100 ? 100 : p;

      this.setState({percent: actualPercent, showTshirtOnMobile: true});

      isMobile() && scrollTo(0, 0);
    }

    get form() {
        return (
          <div className='form-wrapper'>
            <ShopTabForm
              ref={(r) => this.formElement = r}
              setPercent={this.setPercent}
            />
          </div>
        );
      }

    onBuyButtonClick() {
      if (this.formElement) {
        this.formElement.onSubmit({preventDefault: () => {}}) && this.navigateToSaltyGuys();
      } else {
        this.navigateToSaltyGuys();
      }
    }


    get tshirtTab() {
      const { showForm, showTshirtOnMobile } = this.state;

      if (showTshirtOnMobile) {
        return this.tshirtWithProgressBar;
      } else {
        return this.form;
      }
    }

    get imageText() {
      const { percent } = this.state 
  
      return (
        <div className="show-percent">
          <div className="percent-bar">
            <Line percent={percent}
            strokeWidth="10"
            trailWidth='0'
            strokeLinecap='square' strokeColor="#87B04E" />
          </div>
          {percent ? <p>{percent}% LIFE</p> : <p>0% LIFE</p>}
          <div className="browse-button">
          <a className='browse' href='https://nasdaily.com'>
          <img src='/assets/shopping_cart_icon.svg' />
            Browse Shop
          </a>
          </div>
        </div>
      )
    }

    render () {
      return (
        <div className="nd-shop">
          <Header />
          <div className="nd-upper">
            <div className="upper-info">
              <h1><span>T</span> SHOP</h1>
              <p>Try our calculator below to <br />see how much of your life has passed!</p>
              <div className="arrow-box">
                  <div className="arrow-tail">
                  <hr />
                  </div>
                  <div className="arrow">
                  </div>
              </div>
              { this.form }
            </div>
            <div className="image-wrapper">
              <div className="image-text">
                { this.imageText }
              </div>
              <Image 
                publicId="Nas_Daily_Tshirt_qljlzo"
                className="nas-tshirt" />
            </div>
          </div>
          <div className="nd-lower">
          <div className="works-circle">
          <p>HOW THIS WORKS?</p>
          <div className='up-arrow'>&#8593;</div>
          </div>
            <h2>WHAT THIS MEANS:</h2>
            <div className="description">
              <p>Nas Daily wears the same t-shirt every day. The t-shirt shows how much of his life is over based on his current age. It helps him realize that life is finite and we should use time wisely.</p>
            </div>
          </div>
        </div>
      )
    }
}

// export default class ShopTab extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       openedModal: false,
//       showForm: false,
//       showTshirtOnMobile: false,
//       percent: null,
//       tabOnMobile: 'video'
//     }

//     this.navigateToSaltyGuys = this.navigateToSaltyGuys.bind(this);
//     this.onBuyButtonClick = this.onBuyButtonClick.bind(this);
//     this.setPercent = this.setPercent.bind(this);
//     this.shareOnFacebook = this.shareOnFacebook.bind(this);
//   }

//   navigateToSaltyGuys() {
//     const { percent } = this.state;

//     if (!percent) { return }

//     window.location.href = `http://shop.nasdaily.com/?percentage=${percent}`;
//   }

//   get videoModal() {
//     const {
//       openedModal,
//     } = this.state;

//     return (
//       <ReactModal
//         isOpen={openedModal}
//         contentLabel="Modal"
//         onRequestClose={() => { this.setState({openedModal: false}); scrollTo(0,0);}}
//         style={modalStyles}
//         className='react-modal'
//       >
//         <FacebookPlayer
//           appId={ facebookAppId() }
//           videoId={ '877310772421076' }
//           id={ 'video-id-877310772421076' }
//           onReady={(_id, player) => { player.unmute(); player.play() }}
//         />
//       </ReactModal>
//     );
//   }

//   get storyLandingSection() {
//     const { videos } = this.props;

//     const tshirtVideo = videos.find(video => video.facebook_id === '877310772421076');

//     return (
//       <div className='landing--left-content'>
//         <h2 className='story-header'>
//           <span className='yellow-color'>
//             The
//           </span> Story
//         </h2>
//         <p>Watch the video behind the story of Nas Daily T-shirts</p>
//         <a
//           className='shop-cta hide-on-small'
//           onClick={() => this.setState({openedModal: true})}
//         >
//           Watch now
//         </a>
//         <div
//           className="tile show-on-small-only"
//           onClick={() => this.setState({openedModal: true})}
//         >
//           <div className="tile__media">
//             <img
//               className="tile__img"
//               src={ tshirtVideo.full_picture }
//               alt="HOW OLD ARE YOU?"
//             />
//           </div>
//           <div className="tile__details">
//             <div className="tile__title"/>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   get tshirtLandingSection() {
//     return (
//       <div className='landing--right-content'>
//         <h2 className='tshirt-header'>
//           <span className='yellow-color'>
//             The
//           </span> Tshirt
//         </h2>
//         <p>Click below to calculate and buy your new t-shirt</p>
//         <a
//           className='shop-cta'
//           onClick={() => { this.setState({showForm: true}); scrollTo(0,0);}}
//         >
//           Buy now
//         </a>
//       </div>
//     );
//   }

//   get doneWithLife() {
//     const { percent } = this.state;

//     if (!percent && percent !== 0) { return }

//     return (
//       <label className='done-with-life'>
//         You are {percent}% done with life
//       </label>
//     );
//   }

//   get facebookShareButton() {
//     return (
//       <a
//         className='facebook-share-button'
//         onClick={this.shareOnFacebook}
//       >
//         Share on Facebook
//       </a>
//     );
//   }

//   onBuyButtonClick() {
//     if (this.formElement) {
//       this.formElement.onSubmit({preventDefault: () => {}}) && this.navigateToSaltyGuys();
//     } else {
//       this.navigateToSaltyGuys();
//     }
//   }

//   get buyButton() {
//     return (
//       <a
//         className='buy-button'
//         onClick={this.onBuyButtonClick}
//       >
//         Buy T-shirt
//       </a>
//     );
//   }

//   setPercent(p) {
//     const actualPercent = p && p > 100 ? 100 : p;

//     this.setState({percent: actualPercent, showTshirtOnMobile: true});

//     isMobile() && scrollTo(0, 0);
//   }

//   shareOnFacebook() {
//     const { percent } = this.state;

//     const quote =
//       percent || percent === 0
//       ? `I'm ${percent}% done with life! Check out your percentage at nasdaily.com/shop`
//       : null;

//     FB.ui({
//       method: 'share',
//       href: 'https://www.nasdaily.com/shop',
//       hashtag: '#nasdaily',
//       quote: quote,
//     }, function(response){ console.log(response)});
//   }

//   get tshirtWithProgressBar() {
//     const { percent } = this.state;

//     return (
//       <div className='landing--right-content'>
//         <div className='tshirt-display-wrapper'>
//           <a
//             onClick={() => this.setState({percent: null, showTshirtOnMobile: false})}
//             className='arrow-back'
//           >
//             <Image
//               publicId="arrow_back_ekioqi.svg"
//               className='arrow-back-img'
//             />
//           </a>
//           <label
//             style={{fontSize: '40px', marginBottom: 0 }}
//           >
//             The <span className='yellow-color'>Result</span>
//           </label>
//           <div
//             className='tshirt-images-container'
//           >
//             <img
//               src='/assets/tshirt_life.png'
//               className="tshirt-image"
//             />
//             { !isNull(percent)
//               ? (
//                   <img
//                     className='percentage-bar-image'
//                     src={`/assets/percentages/${percent}.png`}
//                   />
//                 )
//               : (
//                 <img
//                   className='percentage-bar-image'
//                   src={`/assets/percentages/0_no_number.png`}
//                 />
//               )
//             }
//           </div>
//           { this.doneWithLife }
//           <div className='tshirt-cta-buttons' >
//             { this.facebookShareButton }
//             { this.buyButton }
//           </div>
//         </div>
//       </div>
//     );
//   }

//   get form() {
//     return (
//       <div className='form-wrapper'>
//         <ShopTabForm
//           ref={(r) => this.formElement = r}
//           setPercent={this.setPercent}
//         />
//       </div>
//     );
//   }

//   get leftSection() {
//     const { showForm } = this.state;

//     if (showForm) {
//       return this.form;
//     }

//     return this.storyLandingSection;
//   }

//   get tshirtTab() {
//     const { showForm, showTshirtOnMobile } = this.state;

//     if (showTshirtOnMobile) {
//       return this.tshirtWithProgressBar;
//     } else {
//       return this.form;
//     }
//   }

//   get mainSection() {
//     const { showForm, tabOnMobile } = this.state;

//     return (
//       <div>
//         <div className='show-on-small-only'>
//           {
//             tabOnMobile === 'video'
//             ? this.storyLandingSection
//             : this.tshirtTab
//           }
//         </div>
//         <div
//           className={classnames('landing hide-on-small', { 'show-form': showForm })}
//         >
//           <div className='landing--left'>
//             <div className='landing--left-background'/>
//             { this.leftSection }
//           </div>
//           <div className='landing--right'>
//             <div className='landing--right-background'/>
//             { showForm ? this.tshirtWithProgressBar : this.tshirtLandingSection }
//           </div>
//         </div>
//         <div className='tabs-container show-on-small-only'>
//           <div
//             className={classnames('tab', { active: tabOnMobile === 'video'})}
//             onClick={() => { this.setState({ tabOnMobile: 'video' }); scroll(0,0)}}
//           >
//             The Story
//           </div>
//           <div
//             className={classnames('tab', { active: tabOnMobile !== 'video'})}
//             onClick={() => { this.setState({ tabOnMobile: 'calculator' }); scroll(0,0)}}
//           >
//             The T-shirt
//           </div>
//         </div>
//       </div>
//     );
//   }

//   render() {
//     const { showFormOnMobile } = this.state;

//     return (
//       <div className='nd-shop'>
//       <Header />
//         { this.mainSection }
//         { this.videoModal }
//       </div>
//     );
//   }
// }
