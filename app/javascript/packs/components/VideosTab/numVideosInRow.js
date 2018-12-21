import $ from 'jquery';
import { isMobile, isTablet } from '../../util/viewportSize';

export default () => {
  if (isMobile()) { return 1 };
  if (isTablet()) { return 3 };

  const itemWidth = $('.tile').width();
  const containerWidth = $('.videos-rows').width();

  if (!itemWidth) { return 4 };

  return Math.floor(containerWidth / (itemWidth + 17));
}
