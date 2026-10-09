//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import ButtonArrowIcon from '../../../../../../components/Buttons/ButtonArrowIcon';
import ButtonHashTagItem from '../../../../../../components/Buttons/ButtonHashTagItem';
import PostDateIconName from '../../../../../../components/Buttons/PostDateIconName';
import {useAppSelector} from '../../../../../../hooks/store.hooks';
import {HomeScreenProp} from '../../../../../../navigations/StackNavigator';
import {HomeSlideHashtags} from '../../../../../../store/reducers/home/home.type';
import {MyThemeColors} from '../../../../../../theme/Theme';
import {PostsApiType} from '../../../../../../types/api.type';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../../../../../utils/PixelSize';

// create a component

const SlideHashtags = () => {
  const slideHashtagsState = useAppSelector(state => state.home.slideHashtags);

  const [activeTag, setActiveTag] = useState<HomeSlideHashtags>(
    slideHashtagsState[0],
  );
  const onPress = (id: string) => {
    const index = slideHashtagsState.findIndex(t => t.id === id);
    if (index > -1) {
      setActiveTag(slideHashtagsState[index]);
    }
  };

  const navigation = useNavigation<HomeScreenProp>();

  const onPostPress = (id: string, titre: string) => {
    navigation.navigate('PostDetailScreen', {
      id: id,
      title: titre,
    });
  };
  if (slideHashtagsState) {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.containerScrollView} horizontal={true}>
          {slideHashtagsState.map(tag => {
            return (
              <ButtonHashTagItem
                id={tag.id}
                key={tag.id}
                navigate={false}
                titre={tag.titre}
                onPress={onPress}
                active={activeTag ? activeTag.id === tag.id : false}
              />
            );
          })}
        </ScrollView>
        {activeTag && (
          <>
            <ButtonArrowIcon
              id={activeTag.id}
              titre={activeTag.titre}
              type={PostsApiType.PostTag}
              label={'Voir tous les articles # ' + activeTag.titre}
            />

            <View style={styles.postsList}>
              {activeTag.posts?.map(post => {
                return (
                  <Pressable
                    style={styles.postPressable}
                    key={post.id_article}
                    onPress={() =>
                      onPostPress(post.id_article, post.titre ? post.titre : '')
                    }>
                    <Text style={styles.postTitle}>{post.titre}</Text>
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
              })}
            </View>
          </>
        )}
      </View>
    );
  } else {
    return null;
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: pixelSizeVertical(15),
  },
  containerScrollView: {
    paddingVertical: pixelSizeVertical(10),
  },

  postsList: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingHorizontal: pixelSizeHorizontal(25),
    paddingBottom: pixelSizeVertical(20),
    width: '100%',
  },
  postPressable: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderColor: MyThemeColors.red,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: pixelSizeVertical(10),
    width: '100%',
  },
  postTitle: {
    color: MyThemeColors.black,
    fontSize: fontPixel(17),
    fontFamily: 'Kadwa',
    fontWeight: 'bold',
    marginBottom: pixelSizeVertical(5),
  },
});

//make this component available to the app
export default SlideHashtags;
