import {Dimensions, PixelRatio} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

const Layout = {width: SCREEN_WIDTH, height: SCREEN_HEIGHT};

function normalize(size: number, based = 'width') {
  switch (based) {
    case 'height':
      return Math.round(PixelRatio.roundToNearestPixel(size * heightBaseScale));

    case 'width':
      return Math.round(PixelRatio.roundToNearestPixel(size * widthBaseScale));

    case 'fontSize':
      return Math.round(
        PixelRatio.roundToNearestPixel(
          (size * heightBaseScale) / PixelRatio.getFontScale(),
        ),
      );

    default:
      return Math.round(PixelRatio.roundToNearestPixel(size * heightBaseScale));
  }
}

//for width  pixel
const widthPixel = (size: number) => {
  return normalize(size, 'width');
};
//for height  pixel
const heightPixel = (size: number) => {
  return normalize(size, 'height');
};
//for font  pixel
const fontPixel = (size: number) => {
  return normalize(size, 'fontSize');
  //return heightPixel(size);
};
//for Margin and Padding vertical pixel
const pixelSizeVertical = (size: number) => {
  return heightPixel(size);
};
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size: number) => {
  return widthPixel(size);
};

export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  Layout,
};
