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
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../utils/PixelSize';
import PostDateIconName from '../Buttons/PostDateIconName';

type Props = {
  post: Post;
};
// create a component
const CardPostListItem = ({post}: Props) => {
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
      <PostDateIconName
        name={post.sur_titre}
        nameColor={MyThemeColors.red}
        date={post.date}
        dateColor={MyThemeColors.red}
        dotColor={MyThemeColors.red}
        lock={!post.public}
      />
      <Text style={styles.cardTitle}>{post.titre}</Text>
      <Image
        source={{
          uri: post.lien_image_alaune,
        }}
        style={styles.cardImage}
      />
      <Text style={styles.cardHeadline}>{post.headline} </Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //width: '100%',
    flex: 1,
    /*borderColor: MyThemeColors.gray1,
    borderTopWidth: 1,
    borderBottomWidth: 1,*/
    marginHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(15),
  },
  cardTitle: {
    fontSize: fontPixel(21),
    fontFamily: 'Kadwa',
    fontWeight: 'bold',
    marginVertical: pixelSizeVertical(10),
    color: MyThemeColors.black,
  },
  cardHeadline: {
    fontSize: fontPixel(15),
    fontFamily: 'Lato',
    fontWeight: '500',
    marginVertical: pixelSizeVertical(10),
    color: MyThemeColors.black,
  },
  cardImage: {
    width: '100%',
    height: heightPixel(250),
    resizeMode: 'stretch',
  },
});

//make this component available to the app
export default CardPostListItem;
