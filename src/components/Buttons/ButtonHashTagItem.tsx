//import liraries
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {HomeScreenProp} from '../../navigations/StackNavigator';
import {MyThemeColors} from '../../theme/Theme';
import {PostsApiType} from '../../types/api.type';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../utils/PixelSize';

type Props = {
  id: string;
  titre: string;
  active: boolean;
  navigate?: boolean;
  onPress?: (id: string) => void;
};
// create a component
const ButtonHashTagItem = ({
  id,
  titre,
  active,
  navigate = true,
  onPress,
}: Props) => {
  const navigation = useNavigation<HomeScreenProp>();

  const onHashTagPress = () => {
    onPress && onPress(id);
    if (navigate) {
      navigation.navigate('PostsListScreen', {
        id: id,
        titre: titre,
        type: PostsApiType.PostTag,
      });
    }
  };
  return (
    <Pressable
      onPress={() => onHashTagPress()}
      style={{
        ...styles.button,
        opacity: active ? 1 : 0.4,
      }}
      key={id}>
      <Text style={styles.hashtag}>#</Text>
      <Text style={styles.title}>{titre}</Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    backgroundColor: MyThemeColors.white,
    borderColor: MyThemeColors.red,
    borderWidth: 1.5,
    elevation: 3,
    borderRadius: 5,
    paddingVertical: pixelSizeVertical(7),
    paddingHorizontal: pixelSizeHorizontal(20),
    marginHorizontal: pixelSizeHorizontal(7),
    minWidth: widthPixel(100),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: MyThemeColors.red,
    fontSize: fontPixel(14),
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
  hashtag: {
    color: MyThemeColors.black,
    fontSize: fontPixel(15),
    fontFamily: 'Lato',
    fontWeight: 'normal',
  },
});

//make this component available to the app
export default ButtonHashTagItem;
