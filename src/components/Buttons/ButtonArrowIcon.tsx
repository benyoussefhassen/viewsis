//import liraries
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {ArrowMoreIcon} from '../../assets/images';
import {HomeScreenProp} from '../../navigations/StackNavigator';
import {MyThemeColors} from '../../theme/Theme';
import {PostsApiType} from '../../types/api.type';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../utils/PixelSize';

type Props = {
  id: string;
  titre: string;
  label: string;
  type: PostsApiType;
};
// create a component
const ButtonArrowIcon = ({id, label, titre, type}: Props) => {
  const navigation = useNavigation<HomeScreenProp>();

  const onPress = () => {
    navigation.navigate('PostsListScreen', {
      id: id,
      titre: titre,
      type: type,
    });
  };
  return (
    <Pressable
      style={styles.navigationButton}
      key={id}
      onPress={() => {
        onPress();
      }}>
      <ArrowMoreIcon />
      <Text style={styles.navigationButtonTxt}>{label}</Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  navigationButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: pixelSizeVertical(10),
    elevation: 3,
  },
  navigationButtonTxt: {
    marginLeft: pixelSizeHorizontal(5),
    color: MyThemeColors.red,
    fontSize: fontPixel(15),
    fontFamily: 'Lato',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

//make this component available to the app
export default ButtonArrowIcon;
