//import liraries
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Agora1Icon from '../../../../../../assets/images/icons/Agora1Icon';
import Agora2Icon from '../../../../../../assets/images/icons/Agora2Icon';
import Agora3Icon from '../../../../../../assets/images/icons/Agora3Icon';
import Agora4Icon from '../../../../../../assets/images/icons/Agora4Icon';
import AgoraIcon from '../../../../../../assets/images/icons/AgoraIcon';
import ButtonArrowIcon from '../../../../../../components/Buttons/ButtonArrowIcon';
import {useAppSelector} from '../../../../../../hooks/store.hooks';
import {MyThemeColors} from '../../../../../../theme/Theme';
import {PostsApiType} from '../../../../../../types/api.type';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../../../../../utils/PixelSize';
import AgoraSlideItem from './AgoraSlideItem';

// create a component
const AgoraSection = () => {
  const agoraState = useAppSelector(state => state.home.agora);

  const getIconAgora = (id: string) => {
    switch (id) {
      case '2626':
        return <Agora1Icon />;
      case '2622':
        return <Agora2Icon />;
      case '2625':
        return <Agora3Icon />;
      case '2684':
        return <Agora4Icon />;

      default:
        return undefined;
    }
  };

  const getAgoraItemSlide = (id: string, image?: boolean) => {
    const index = agoraState.findIndex(t => t.id === id);
    if (index > -1) {
      if (image) {
        return (
          <View style={styles.itemContainer} key={id}>
            <View style={styles.itemHeaderContainer}>
              {getIconAgora(id)}
              <View style={styles.itemHeaderTxtContainer}>
                <Text style={styles.itemHeaderTitreTxt}>
                  {agoraState[index].titre}
                </Text>
                <Text style={styles.itemHeaderDateTxt}>
                  {agoraState[index].posts[0].date}
                </Text>
              </View>
            </View>
            <Text style={styles.postTitreTxt}>
              {agoraState[index].posts[0].titre}
            </Text>
            <Text style={styles.postHeadlineTxt}>
              {agoraState[index].posts[0].headline}
            </Text>
            <Image
              source={{
                uri: agoraState[index].posts[0].lien_image_alaune,
              }}
              style={styles.postImage}
            />
            <ButtonArrowIcon
              id={agoraState[index].id}
              titre={agoraState[index].titre}
              type={PostsApiType.Category}
              label="Toute la rubrique"
            />
          </View>
        );
      } else {
        return (
          <AgoraSlideItem
            id={id}
            titre={agoraState[index].titre}
            post={agoraState[index].posts[0]}
            icon={getIconAgora(id)}
          />
        );
      }
    } else {
      return null;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AgoraIcon />
      </View>
      <View style={styles.listContainer}>
        <ScrollView style={styles.scrollViewContainer} horizontal={true}>
          {getAgoraItemSlide('2626')}
          {getAgoraItemSlide('2622')}
          {getAgoraItemSlide('2625')}
        </ScrollView>
        {getAgoraItemSlide('2684', true)}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingTop: pixelSizeVertical(10),
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MyThemeColors.bleu,
    borderRadius: 100,
    paddingHorizontal: pixelSizeHorizontal(10),
    paddingVertical: pixelSizeVertical(10),
    zIndex: 10,
    marginBottom: -25 - pixelSizeVertical(10),
  },
  listContainer: {
    paddingTop: pixelSizeVertical(60),
    paddingBottom: pixelSizeVertical(20),
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: MyThemeColors.bleu,
  },
  scrollViewContainer: {
    // width: '100%',
    height: heightPixel(350),
  },

  itemContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: MyThemeColors.white,
    paddingHorizontal: pixelSizeHorizontal(10),
    paddingVertical: pixelSizeVertical(10),
    marginHorizontal: pixelSizeHorizontal(10),
    marginTop: pixelSizeVertical(20),
  },
  itemHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: pixelSizeVertical(5),
  },
  itemHeaderTxtContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: pixelSizeHorizontal(5),
  },
  itemHeaderTitreTxt: {
    fontFamily: 'Lato',
    fontSize: fontPixel(13),
    fontWeight: 'bold',
    color: MyThemeColors.red,
  },
  itemHeaderDateTxt: {
    fontFamily: 'Lato',
    fontSize: fontPixel(13),
    fontWeight: '500',
    color: MyThemeColors.red,
  },

  postTitreTxt: {
    fontFamily: 'Kadwa',
    fontSize: fontPixel(21),
    fontWeight: 'bold',
    color: MyThemeColors.black,
    marginBottom: pixelSizeVertical(15),
  },
  postHeadlineTxt: {
    fontFamily: 'Lato',
    fontSize: fontPixel(15),
    fontWeight: '500',
    color: MyThemeColors.black,
  },
  postImage: {
    width: Dimensions.get('window').width - 50,
    height: heightPixel(250),
  },
});

//make this component available to the app
export default AgoraSection;
