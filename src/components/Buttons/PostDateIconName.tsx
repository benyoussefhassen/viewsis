//import liraries
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LockYellowIcon} from '../../assets/images';
import {MyThemeColors} from '../../theme/Theme';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../utils/PixelSize';

type Props = {
  name?: string;
  nameColor?: string;
  date?: string;
  dateColor?: string;
  dotColor?: string;
  lock?: boolean;
};
// create a component
const PostDateIconName = ({
  name,
  nameColor,
  date,
  dateColor,
  dotColor,
  lock = false,
}: Props) => {
  return (
    <View style={styles.container}>
      {lock && <LockYellowIcon />}
      {name && (
        <Text style={{...styles.nameTxt, color: nameColor}}>{name}</Text>
      )}
      <Text style={{...styles.txtDot, color: dotColor}}>•</Text>
      <Text style={{...styles.dateTxt, color: dateColor}}>{date}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  lockIcon: {
    backgroundColor: MyThemeColors.yellow,
    paddingHorizontal: pixelSizeHorizontal(5),
    paddingVertical: pixelSizeVertical(2),
    borderRadius: 5,
    marginRight: pixelSizeHorizontal(4),
  },
  nameTxt: {
    fontSize: fontPixel(17),
    fontFamily: 'Lato',
    fontWeight: 'bold',
    marginHorizontal: pixelSizeHorizontal(5),
  },
  dateTxt: {
    fontSize: fontPixel(16),
    fontFamily: 'Lato',
    fontWeight: '500',
  },
  txtDot: {
    fontSize: fontPixel(18),
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
});

//
//make this component available to the app
export default PostDateIconName;
