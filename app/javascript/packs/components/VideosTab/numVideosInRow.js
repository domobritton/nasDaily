import $ from 'jquery';
import { isMobile } from '../../util/viewportSize';
import { isTablet } from '../../util/viewportSize';

export default () => {
  if (isMobile()) { return 1 };
  if (isTablet()) { return 2 };

  const itemWidth = $('.tile').width();
  const containerWidth = $('.videos-rows').width();

  if (!itemWidth) { return 4 };

  return Math.floor(containerWidth / (itemWidth + 17));
}
