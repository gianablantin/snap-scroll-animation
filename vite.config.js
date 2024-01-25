import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

export default {
  base: '/snap-scroll-animation/',
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(
        browserslist('last 2 versions, >= 0.25%, not dead')
      ),
    },
  },
  build: {
    cssMinify: 'lightningcss',
  },
};
