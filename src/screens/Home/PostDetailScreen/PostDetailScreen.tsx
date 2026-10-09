//import liraries
import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {ClockCircleIcon} from '../../../assets/images';
import PostDateIconName from '../../../components/Buttons/PostDateIconName';
import FooterPolitisBestOf from '../../../components/Containers/FooterPolitisBestOf';
import HomeService from '../../../services/home.sevices';
import {MyThemeColors} from '../../../theme/Theme';
import {Post} from '../../../types/api.type';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../../utils/PixelSize';

const PostDetailScreen = ({route}: any) => {
  const {id} = route.params;
  const {width} = useWindowDimensions();
  const [post, setPost] = useState<Post>();

  const getPostData = useCallback(async () => {
    const resPost = await HomeService.getSinglePostData(id);
    //console.log('resPost ', resPost);

    setPost(resPost.article);
  }, [id]);

  useEffect(() => {
    getPostData();
  }, [getPostData]);

  if (post) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>{post.titre}</Text>
            </View>
            <View style={styles.subHeaderContainer}>
              <PostDateIconName
                name={post.titre_auteur_principale}
                nameColor={MyThemeColors.red}
                date={post.date}
                dateColor={MyThemeColors.black}
                dotColor={MyThemeColors.red}
                lock={!post.public}
              />
              <View style={styles.buttonReadTime}>
                <ClockCircleIcon />
                <Text style={styles.txtReadTime}>9 minutes</Text>
              </View>
            </View>
            <Text style={styles.headlineText}>{post.headline}</Text>
            <Image
              source={{
                uri: post.lien_image_alaune,
              }}
              style={styles.cardImage}
            />
            {post.content && (
              <RenderHTML
                ignoredDomTags={['svg']}
                contentWidth={width - 70}
                source={{html: post.content}}
                baseStyle={styles.containerHtml}
              />
            )}
            <FooterPolitisBestOf />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    <View style={{flex: 1}}>
      <Text>null</Text>
    </View>;
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyThemeColors.whiteRedish,
    paddingVertical: pixelSizeVertical(30),
    paddingHorizontal: pixelSizeHorizontal(30),
  },
  containerHtml: {
    color: MyThemeColors.black,
    fontSize: fontPixel(18),
    fontFamily: 'Lato',
    fontWeight: 'normal',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(20),
    marginBottom: pixelSizeVertical(30),
  },
  headerText: {
    color: MyThemeColors.black,
    fontSize: fontPixel(25),
    fontFamily: 'Kadwa',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeaderContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: MyThemeColors.gray1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: MyThemeColors.gray1,
    paddingVertical: pixelSizeVertical(10),
    paddingHorizontal: pixelSizeHorizontal(10),
  },
  buttonReadTime: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(5),
  },
  txtReadTime: {
    marginLeft: pixelSizeHorizontal(5),
    color: MyThemeColors.black,
    fontFamily: 'Lato',
    fontWeight: '500',
    fontSize: fontPixel(13),
  },
  headlineText: {
    color: MyThemeColors.black,
    fontSize: fontPixel(18),
    fontFamily: 'Lato',
    fontWeight: '600',
  },
  cardImage: {
    width: '100%',
    height: heightPixel(200),
  },
});

//make this component available to the app
export default PostDetailScreen;
