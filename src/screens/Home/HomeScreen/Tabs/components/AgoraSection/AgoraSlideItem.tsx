//import liraries
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import ButtonArrowIcon from '../../../../../../components/Buttons/ButtonArrowIcon';
import {MyThemeColors} from '../../../../../../theme/Theme';
import {Post, PostsApiType} from '../../../../../../types/api.type';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../../../../../utils/PixelSize';

type Props = {
  id: string;
  titre: string;
  post: Post;
  icon?: React.JSX.Element;
};
// create a component
const AgoraSlideItem = ({id, titre, post, icon}: Props) => {
  return (
    <View style={styles.itemContainer} key={id}>
      <View style={styles.itemHeaderContainer}>
        {icon ? icon : null}
        <View style={styles.itemHeaderTxtContainer}>
          <Text style={styles.itemHeaderTitreTxt}>{titre}</Text>
          <Text style={styles.itemHeaderDateTxt}>{post.date}</Text>
        </View>
      </View>
      <Text style={styles.postTitreTxt}>{post.titre}</Text>
      <Text style={styles.postHeadlineTxt}>{post.headline}</Text>
      <ButtonArrowIcon
        id={id}
        titre={titre}
        type={PostsApiType.Category}
        label="Toute la rubrique"
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: MyThemeColors.white,
    paddingHorizontal: pixelSizeHorizontal(10),
    paddingVertical: pixelSizeVertical(10),
    marginHorizontal: pixelSizeHorizontal(7),
    height: '100%',
    width: Dimensions.get('window').width - 50,
    minWidth: widthPixel(300),
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
    marginBottom: 15,
  },
  postHeadlineTxt: {
    fontFamily: 'Lato',
    fontSize: fontPixel(15),
    fontWeight: '500',
    color: MyThemeColors.black,
  },
});

//make this component available to the app
export default AgoraSlideItem;
