import $ from 'jquery';
import { isMobile } from '../../util/viewportSize';

export default () => {
  if (isMobile) { return 3 };

  const itemWidth = $('.video-item').width();
  const containerWidth = $('.videos-rows').width();

  if (!itemWidth) { return 4 };

  return Math.floor(containerWidth / itemWidth);
}
