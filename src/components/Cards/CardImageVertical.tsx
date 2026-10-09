//import liraries
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {HomeScreenProp} from '../../navigations/StackNavigator';
import {MyThemeColors} from '../../theme/Theme';
import {Post} from '../../types/api.type';
import {
  fontPixel,
  heightPixel,
  Layout,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../utils/PixelSize';
import PostDateIconName from '../Buttons/PostDateIconName';

type Props = {
  post: Post;
};

// create a component
const CardImageVertical = ({post}: Props) => {
  const navigation = useNavigation<HomeScreenProp>();

  const onPostPress = (id: string, titre: string) => {
    navigation.navigate('PostDetailScreen', {
      id: id,
      title: titre,
    });
  };
  return (
    <Pressable
      style={styles.card}
      key={post.id_article}
      onPress={() =>
        onPostPress(post.id_article, post.titre ? post.titre : '')
      }>
      <Text numberOfLines={3} style={styles.cardTitle}>
        {post.titre}
      </Text>
      <Image
        resizeMode="stretch"
        source={{
          uri: post.lien_image_alaune,
        }}
        style={styles.cardImage}
      />

      <PostDateIconName
        name={post.sur_titre}
        nameColor={MyThemeColors.red}
        date={post.date}
        dateColor={MyThemeColors.red}
        dotColor={MyThemeColors.red}
        lock={!post.public}
      />
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: MyThemeColors.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: Layout.height * 0.35,
    width: Layout.width * 0.8,
    minHeight: heightPixel(350),
    minWidth: widthPixel(300),
    marginHorizontal: pixelSizeHorizontal(10),
    paddingVertical: pixelSizeVertical(15),
    paddingHorizontal: pixelSizeHorizontal(15),
    elevation: 5,
  },
  cardTitle: {
    color: MyThemeColors.black,
    fontSize: fontPixel(20),
    fontWeight: 'bold',
    fontFamily: 'Kadwa',
    marginBottom: pixelSizeVertical(15),
  },
  cardImage: {
    flex: 1,
    marginBottom: pixelSizeVertical(10),
    width: '100%',
    minHeight: heightPixel(200),
  },
});

//make this component available to the app
export default CardImageVertical;
