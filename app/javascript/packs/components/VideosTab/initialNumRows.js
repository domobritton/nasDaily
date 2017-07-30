import { isMobile, isTablet } from '../../util/viewportSize';

export default () => {
  if (isMobile()) { return 6 };
  if (isTablet()) { return 4 };

  return 2;
}
