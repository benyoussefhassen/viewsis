//import liraries
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MyThemeColors} from '../../theme/Theme';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../utils/PixelSize';
type Props = {
  height?: number;
  color?: string;
  marginHorizontal?: number;
  marginVertical?: number;
};
// create a component
const ItemSeparatorView = ({
  height = 0,
  color = MyThemeColors.gray1,
  marginHorizontal = 0,
  marginVertical = 0,
}: Props) => {
  return (
    <View
      style={{
        ...styles.separator,
        height: heightPixel(height),
        backgroundColor: color,
        marginHorizontal: pixelSizeHorizontal(marginHorizontal),
        marginVertical: pixelSizeVertical(marginVertical),
      }}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  separator: {
    flex: 1,
  },
});

//make this component available to the app
export default ItemSeparatorView;
