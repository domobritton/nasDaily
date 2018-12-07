import React, { Component } from 'react';

export default class ScrollButton extends Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return (
          <div className='outer-scroll'>
            <button 
              title='Back to top' 
              className='scroll' 
              onClick={ () => { this.scrollToTop(); }}>
               <div className='up-arrow'>&#8593;</div>
               BACK TO TOP
            </button>
        </div>
        )
   }
}