import React from 'react';
import { omit } from 'lodash';

export default class SliderArrow extends React.PureComponent {
  get className() {
    const { direction } = this.props;

    return direction === 'next' ? 'slider-next-arrow' : 'slider-prev-arrow';
  }

  render() {
    const { onClick } = this.props;

    if (!onClick) { return null; }

    return (
      <div
        {...omit(this.props, 'currentSlide', 'slideCount')}
        className={ this.className }
      />
    );
  }
}

