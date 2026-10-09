//import liraries
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {HomeScreenProp} from '../../navigations/StackNavigator';
import {MyThemeColors} from '../../theme/Theme';
import {Post} from '../../types/api.type';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../utils/PixelSize';
import PostDateIconName from '../Buttons/PostDateIconName';

type Props = {
  item: Post;
  image?: boolean;
};

// create a component
const CardImageHorizontal = ({item, image = true}: Props) => {
  const navigation = useNavigation<HomeScreenProp>();

  const onPostPress = (id: string, titre: string) => {
    navigation.navigate('PostDetailScreen', {
      id: id,
      title: titre,
    });
  };
  return (
    <Pressable
      style={styles.container}
      key={item.id_article}
      onPress={() =>
        onPostPress(item.id_article, item.titre ? item.titre : '')
      }>
      {image && (
        <Image
          resizeMode="stretch"
          source={{
            uri: item.lien_image_alaune,
          }}
          style={styles.image}
        />
      )}
      <View style={styles.infoContainer}>
        <PostDateIconName
          name={item.sur_titre}
          nameColor={MyThemeColors.red}
          date={item.date}
          dateColor={MyThemeColors.red}
          dotColor={MyThemeColors.red}
          lock={!item.public}
        />
        <Text style={styles.titre}>{item.titre}</Text>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: MyThemeColors.gray2,
    width: '100%',
    paddingVertical: pixelSizeVertical(20),
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },

  image: {
    height: heightPixel(100),
    width: '37%',
    marginVertical: pixelSizeVertical(5),
    margin: pixelSizeHorizontal(5),
  },
  titre: {
    color: MyThemeColors.black,
    fontSize: fontPixel(17),
    fontFamily: 'Kadwa',
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default CardImageHorizontal;
